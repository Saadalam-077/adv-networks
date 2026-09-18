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
  // Try table candidates in order
  for (const table of TABLE_CANDIDATES) {
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .eq('student_number', studentNumber)
        .eq('password', password)
        .single();

      if (!error && data) {
        activeTable = table;
        return { success: true, student: data };
      }
    } catch (e) {
      // continue to next table
    }
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

  // Try inserting into primary candidate tables
  for (const table of TABLE_CANDIDATES) {
    try {
      const { data: existing } = await supabase
        .from(table)
        .select('id')
        .eq('student_number', formData.studentNumber)
        .single();

      if (existing) {
        return { success: false, message: 'Student number already registered in Supabase' };
      }

      const { data, error } = await supabase
        .from(table)
        .insert([newStudent])
        .select()
        .single();

      if (!error && data) {
        activeTable = table;
        return { success: true, student: data };
      }
    } catch (e) {
      // continue trying other tables
    }
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
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('student_name');

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
