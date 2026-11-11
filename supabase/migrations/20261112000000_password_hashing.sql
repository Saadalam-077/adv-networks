-- Advanced Networks course: hashed student passwords + fixed recovery code 1234567890.
-- The app has always looked students up in these tables, in this order:
--   network_students, adv_network_students, net_students, cp2_students (Computer Programming)
-- Only the tables that actually exist are used. New registrations go into network_students.
-- Requires the com_prog migration (cp2_students.password_hash) to have run already. Safe to re-run.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.network_students (
  id             bigint generated always as identity primary key,
  student_name   text not null,
  student_number text not null unique,
  section_number text,
  password       text,
  progress       jsonb not null default '{}'::jsonb,
  total_score    integer not null default 0,
  overall_grade  text not null default 'N/A',
  created_at     timestamptz not null default now()
);

-- For each course table that exists: add password_hash, hash plaintext passwords,
-- and stop the browser from reading or changing password columns.
do $$
declare
  t text;
  sel_cols text;
  upd_cols text;
begin
  foreach t in array array['network_students', 'adv_network_students', 'net_students'] loop
    if to_regclass('public.' || t) is null then
      continue;
    end if;

    execute format('alter table public.%I add column if not exists password_hash text', t);
    execute format($q$
      update public.%I
      set password_hash = extensions.crypt(password, extensions.gen_salt('bf', 12)),
          password = encode(extensions.gen_random_bytes(32), 'hex')
      where password_hash is null and password is not null
    $q$, t);

    select string_agg(quote_ident(column_name), ', ') into sel_cols
    from information_schema.columns
    where table_schema = 'public' and table_name = t
      and column_name not in ('password', 'password_hash');

    select string_agg(quote_ident(column_name), ', ') into upd_cols
    from information_schema.columns
    where table_schema = 'public' and table_name = t
      and column_name in ('progress', 'total_score', 'overall_grade');

    execute format('revoke all on table public.%I from anon, authenticated', t);
    execute format('grant select (%s) on table public.%I to anon, authenticated', sel_cols, t);
    if upd_cols is not null then
      execute format('grant update (%s) on table public.%I to anon, authenticated', upd_cols, t);
    end if;
    execute format('grant delete on table public.%I to anon, authenticated', t);
  end loop;
end;
$$;

-- Login: tries each existing table in order. Returns the student row (without
-- password columns) plus success and source (the table that matched).
create or replace function public.net_student_login(
  p_student_number text,
  p_password text
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  t text;
  v_row jsonb;
begin
  if p_student_number is null or p_password is null then
    return jsonb_build_object('success', false);
  end if;

  foreach t in array array['network_students', 'adv_network_students', 'net_students', 'cp2_students'] loop
    if to_regclass('public.' || t) is null then
      continue;
    end if;
    execute format($q$
      select to_jsonb(s) - 'password' - 'password_hash'
      from public.%I s
      where s.student_number = $1
        and s.password_hash is not null
        and extensions.crypt($2, s.password_hash) = s.password_hash
      limit 1
    $q$, t)
    into v_row
    using trim(p_student_number), p_password;

    if v_row is not null then
      return v_row || jsonb_build_object('success', true, 'source', t);
    end if;
  end loop;

  return jsonb_build_object('success', false);
end;
$$;

-- New registrations go into network_students only.
create or replace function public.net_register_student(
  p_student_name text,
  p_student_number text,
  p_section_number text,
  p_password text
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  t text;
  v_exists boolean;
  v_student public.network_students%rowtype;
begin
  if length(trim(coalesce(p_student_name, ''))) = 0
     or coalesce(trim(p_student_number), '') !~ '^[0-9]{8}$'
     or length(coalesce(p_password, '')) < 8 then
    return jsonb_build_object('success', false, 'error', 'invalid');
  end if;

  foreach t in array array['network_students', 'adv_network_students', 'net_students', 'cp2_students'] loop
    if to_regclass('public.' || t) is null then
      continue;
    end if;
    execute format('select exists (select 1 from public.%I where student_number = $1)', t)
      into v_exists using trim(p_student_number);
    if v_exists then
      return jsonb_build_object('success', false, 'error', 'exists');
    end if;
  end loop;

  insert into public.network_students (
    student_name, student_number, section_number, password, password_hash,
    progress, total_score, overall_grade
  ) values (
    trim(p_student_name), trim(p_student_number), p_section_number,
    encode(extensions.gen_random_bytes(32), 'hex'),
    extensions.crypt(p_password, extensions.gen_salt('bf', 12)),
    '{}'::jsonb, 0, 'N/A'
  )
  returning * into v_student;

  return jsonb_build_object(
    'success', true,
    'student', (to_jsonb(v_student) - 'password' - 'password_hash')
               || jsonb_build_object('source', 'network_students')
  );
exception when unique_violation then
  return jsonb_build_object('success', false, 'error', 'exists');
end;
$$;

-- Fixed recovery code for all students: 1234567890 (reusable, not consumed).
-- Resets the password in the first table (same order as login) that has the student.
create or replace function public.net_reset_student_password(
  p_student_number text,
  p_recovery_code text,
  p_new_password text
)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  t text;
  v_count integer;
begin
  if p_student_number is null
     or p_recovery_code is null
     or trim(p_recovery_code) <> '1234567890'
     or length(coalesce(p_new_password, '')) < 8 then
    return false;
  end if;

  foreach t in array array['network_students', 'adv_network_students', 'net_students', 'cp2_students'] loop
    if to_regclass('public.' || t) is null then
      continue;
    end if;
    execute format($q$
      update public.%I
      set password_hash = extensions.crypt($2, extensions.gen_salt('bf', 12)),
          password = encode(extensions.gen_random_bytes(32), 'hex')
      where student_number = $1
    $q$, t)
    using trim(p_student_number), p_new_password;
    get diagnostics v_count = row_count;
    if v_count > 0 then
      return true;
    end if;
  end loop;

  return false;
end;
$$;

revoke all on function public.net_student_login(text, text) from public;
revoke all on function public.net_register_student(text, text, text, text) from public;
revoke all on function public.net_reset_student_password(text, text, text) from public;
grant execute on function public.net_student_login(text, text) to anon, authenticated;
grant execute on function public.net_register_student(text, text, text, text) to anon, authenticated;
grant execute on function public.net_reset_student_password(text, text, text) to anon, authenticated;
