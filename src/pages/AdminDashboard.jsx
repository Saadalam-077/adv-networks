import React, { useState, useEffect } from 'react';
import { fetchAllStudents, deleteStudentRecord, resetStudentRecordProgress } from '../dbService';

const AdminDashboard = ({ onLogout }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { fetchStudents(); }, []);

  const fetchStudents = async () => {
    setLoading(true);
    const list = await fetchAllStudents();
    setStudents(list);
    setLoading(false);
  };

  const calculateGrade = (progress) => {
    const scores = Object.values(progress || {}).filter(p => p && p.completed).map(p => p.score);
    if (scores.length === 0) return { grade: 'N/A', avg: 0 };
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    let grade = 'F';
    if (avg >= 95) grade = 'A+'; else if (avg >= 90) grade = 'A'; else if (avg >= 85) grade = 'B+';
    else if (avg >= 80) grade = 'B'; else if (avg >= 75) grade = 'C+'; else if (avg >= 70) grade = 'C';
    else if (avg >= 65) grade = 'D+'; else if (avg >= 60) grade = 'D';
    return { grade, avg };
  };

  const filteredStudents = students.filter(s => {
    const matchSection = filter === 'all' || s.section_number === filter;
    const matchSearch = !searchTerm || 
      (s.student_name && s.student_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (s.student_number && s.student_number.includes(searchTerm));
    return matchSection && matchSearch;
  });

  const sections = [...new Set(students.map(s => s.section_number).filter(Boolean))].sort();

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-cyan-400';
    if (grade === 'B+' || grade === 'B') return 'text-blue-400';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-400';
    if (grade === 'D+' || grade === 'D') return 'text-orange-400';
    if (grade === 'F') return 'text-red-400';
    return 'text-slate-400';
  };

  const safeConfirm = (msg) => {
    try {
      return typeof window !== 'undefined' && window.confirm ? window.confirm(msg) : true;
    } catch {
      return true;
    }
  };

  const deleteStudent = async (id, name) => {
    if (!safeConfirm(`Are you sure you want to delete ${name}?`)) return;
    await deleteStudentRecord(id);
    setStudents(students.filter(s => s.id !== id));
  };

  const resetProgress = async (id, name) => {
    if (!safeConfirm(`Reset all progress for ${name}?`)) return;
    await resetStudentRecordProgress(id);
    setStudents(students.map(s => s.id === id ? { ...s, progress: {}, total_score: 0, overall_grade: 'N/A' } : s));
  };

  const exportCSV = () => {
    const rows = [
      ['Student Name', 'Student ID', 'Section', 'Completed Weeks', 'Average %', 'Grade']
    ];
    filteredStudents.forEach(s => {
      const { grade, avg } = calculateGrade(s.progress);
      const completed = Object.values(s.progress || {}).filter(p => p && p.completed).length;
      rows.push([s.student_name, s.student_number, s.section_number, `${completed}/10`, `${avg}%`, grade]);
    });
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `network_students_grades_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shadow-md shadow-cyan-600/30">
                <span className="text-white font-black text-xs">NET</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Admin Dashboard | لوحة التحكم</h1>
                <p className="text-cyan-300/70 text-xs font-arabic">Advanced Topics in Networks | موضوعات متقدمة في الشبكات</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={fetchStudents} className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">
                🔄 Refresh
              </button>
              <button onClick={onLogout} className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Total Students | إجمالي الطلاب</h3>
            <p className="text-4xl font-bold text-white">{students.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Sections | عدد الشعب</h3>
            <p className="text-4xl font-bold text-cyan-400">{sections.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Completed Course | أنهوا المقرر</h3>
            <p className="text-4xl font-bold text-blue-400">
              {students.filter(s => Object.values(s.progress || {}).filter(p => p && p.completed).length >= 10).length}
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Average Score | متوسط الدرجات</h3>
            <p className="text-4xl font-bold text-yellow-400">
              {students.length > 0 ? Math.round(students.reduce((sum, s) => sum + calculateGrade(s.progress).avg, 0) / students.length) : 0}%
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Students List | قائمة الطلاب</h2>
              <p className="text-slate-400 text-sm">قائمة الطلاب المسجلين في قاعدة بيانات Supabase</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Search by name or ID..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 w-full md:w-64"
              />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
                className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Sections ({students.length})</option>
                {sections.map(sec => (
                  <option key={sec} value={sec}>Section {sec}</option>
                ))}
              </select>
              <button 
                onClick={exportCSV} 
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-cyan-600/30"
              >
                <span>📥</span> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-700/40 text-slate-400 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Section</th>
                  <th className="px-6 py-4">Progress</th>
                  <th className="px-6 py-4">Average</th>
                  <th className="px-6 py-4">Grade</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-slate-400">Loading students from Supabase...</td>
                  </tr>
                ) : filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-slate-400">No students found</td>
                  </tr>
                ) : (
                  filteredStudents.map(student => {
                    const { grade, avg } = calculateGrade(student.progress);
                    const completed = Object.values(student.progress || {}).filter(p => p && p.completed).length;
                    return (
                      <tr key={student.id} className="hover:bg-slate-700/20 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">{student.student_name}</td>
                        <td className="px-6 py-4 text-slate-300 font-mono text-sm">{student.student_number}</td>
                        <td className="px-6 py-4 text-cyan-400 font-medium">{student.section_number}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-cyan-500" style={{ width: `${(completed / 10) * 100}%` }} />
                            </div>
                            <span className="text-xs text-slate-400">{completed}/10</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-white">{avg}%</td>
                        <td className={`px-6 py-4 font-bold ${getGradeColor(grade)}`}>{grade}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => resetProgress(student.id, student.student_name)} 
                              className="px-2.5 py-1 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 text-xs rounded transition-colors"
                              title="Reset Progress"
                            >
                              Reset
                            </button>
                            <button 
                              onClick={() => deleteStudent(student.id, student.student_name)} 
                              className="px-2.5 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs rounded transition-colors"
                              title="Delete Student"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
