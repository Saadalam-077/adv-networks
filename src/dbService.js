import { supabase } from './supabaseClient';

const LOCAL_STUDENTS_KEY = 'network_local_students';

// Local storage helpers
export function getLocalStudents() {
  try {
    const raw = localStorage.getItem(LOCAL_STUDENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveLocalStudents(students) {
  try {
    localStorage.setItem(LOCAL_STUDENTS_KEY, JSON.stringify(students));
  } catch (e) {
    console.error('Failed to save to local storage', e);
  }
}

// Candidates for table in priority order
const TABLE_CANDIDATES = ['network_students', 'adv_network_students', 'net_students', 'cp2_students'];
let activeTable = 'network_students';

export async function loginStudent(studentNumber, password) {
  // Password is checked inside the database, trying the course tables in order.
  try {
    const { data, error } = await supabase.rpc('net_student_login', {
      p_student_number: studentNumber.trim(),
      p_password: password
    });
    if (!error && data?.success) {
      activeTable = data.source || 'network_students';
      return { success: true, student: data };
    }
    if (error) console.warn('Supabase login failed, attempting local fallback', error);
  } catch (e) {
    console.warn('Supabase login failed, attempting local fallback', e);
  }

  // Fallback to local storage
  const locals = getLocalStudents();
  const localMatch = locals.find(s => s.student_number === studentNumber && s.password === password);
  if (localMatch) {
    return { success: true, student: localMatch };
  }

  return { success: false };
}

export async function registerStudent(formData) {
  const newStudent = {
    student_name: formData.studentName,
    student_number: formData.studentNumber,
    section_number: formData.sectionNumber,
    password: formData.password,
    progress: {},
    total_score: 0,
    overall_grade: 'N/A'
  };

  // Check if exists in local
  const locals = getLocalStudents();
  if (locals.some(s => s.student_number === formData.studentNumber)) {
    return { success: false, message: 'Student number already registered | الرقم الجامعي مسجل مسبقاً' };
  }

  try {
    const { data, error } = await supabase.rpc('net_register_student', {
      p_student_name: formData.studentName.trim(),
      p_student_number: formData.studentNumber.trim(),
      p_section_number: formData.sectionNumber,
      p_password: formData.password
    });
    if (!error) {
      if (!data?.success) {
        return { success: false, message: 'Student number already registered | الرقم الجامعي مسجل مسبقاً' };
      }
      activeTable = 'network_students';
      return { success: true, student: data.student };
    }
    console.warn('Supabase registration failed, falling back to local storage', error);
  } catch (e) {
    console.warn('Supabase registration failed, falling back to local storage', e);
  }

  // Fallback to local storage
  const mockStudent = {
    ...newStudent,
    id: 'local_' + Date.now()
  };
  locals.push(mockStudent);
  saveLocalStudents(locals);
  return { success: true, student: mockStudent };
}

export async function updateStudentProgress(studentId, newProgress, totalScore = 0, overallGrade = 'N/A') {
  const updatePayload = { 
    progress: newProgress,
    total_score: totalScore,
    overall_grade: overallGrade
  };

  // Update Supabase
  try {
    await supabase
      .from(activeTable)
      .update(updatePayload)
      .eq('id', studentId);
  } catch (e) {
    console.warn('Supabase progress update failed:', e);
  }

  // Also update local storage if present
  const locals = getLocalStudents();
  const index = locals.findIndex(s => s.id === studentId);
  if (index !== -1) {
    locals[index].progress = newProgress;
    locals[index].total_score = totalScore;
    locals[index].overall_grade = overallGrade;
    saveLocalStudents(locals);
  }
}

export async function fetchAllStudents() {
  let dbStudents = [];

  for (const table of TABLE_CANDIDATES) {
    try {
      // Password columns are not readable from the browser, so list columns explicitly.
      let { data, error } = await supabase
        .from(table)
        .select('id, student_name, student_number, section_number, progress, total_score, overall_grade')
        .order('student_name');
      if (error) {
        ({ data, error } = await supabase
          .from(table)
          .select('id, student_name, student_number, section_number, progress')
          .order('student_name'));
      }

      if (!error && data && data.length > 0) {
        activeTable = table;
        dbStudents = data;
        break;
      }
    } catch (e) {
      // continue
    }
  }

  // Merge with local storage students (avoid duplicate IDs or student numbers)
  const locals = getLocalStudents();
  const merged = [...dbStudents];

  for (const local of locals) {
    if (!merged.some(m => m.student_number === local.student_number || m.id === local.id)) {
      merged.push(local);
    }
  }

  return merged;
}

export async function deleteStudentRecord(id) {
  try {
    await supabase.from(activeTable).delete().eq('id', id);
  } catch (e) {
    console.warn('Supabase delete error:', e);
  }

  const locals = getLocalStudents().filter(s => s.id !== id);
  saveLocalStudents(locals);
}

export async function resetStudentRecordProgress(id) {
  try {
    await supabase.from(activeTable).update({ 
      progress: {}, 
      total_score: 0, 
      overall_grade: 'N/A' 
    }).eq('id', id);
  } catch (e) {
    console.warn('Supabase reset error:', e);
  }

  const locals = getLocalStudents();
  const idx = locals.findIndex(s => s.id === id);
  if (idx !== -1) {
    locals[idx].progress = {};
    locals[idx].total_score = 0;
    locals[idx].overall_grade = 'N/A';
    saveLocalStudents(locals);
  }
}

export async function resetStudentPassword(studentNumber, recoveryCode, newPassword) {
  const { data, error } = await supabase.rpc('net_reset_student_password', {
    p_student_number: studentNumber.trim(),
    p_recovery_code: recoveryCode.trim(),
    p_new_password: newPassword
  });
  if (error) {
    console.error('Password recovery error:', error);
    return false;
  }
  return data === true;
}
