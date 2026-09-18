import React from 'react';

const ProfilePage = ({ user, onNavigate, onLogout }) => {
  const completedWeeks = Object.entries(user.progress || {}).filter(([key, val]) => val && val.completed).length;

  const weekTitles = [
    "SDN & OpenFlow | الشبكات المعرفة بالبرمجيات وبروتوكول OpenFlow",
    "NFV & Service Function Chaining | محاكاة وظائف الشبكة وسلاسل الخدمات",
    "5G Core & Edge Computing | بنية شبكات الجيل الخامس والحوسبة الطرفية",
    "Data Center & Spine-Leaf | شبكات مراكز البيانات وبنية Spine-Leaf",
    "Zero Trust Architecture | أمن الشبكات المتقدم ونموذج انعدام الثقة",
    "IoT Protocols (MQTT, CoAP) | بروتوكولات إنترنت الأشياء والشبكات منخفضة الطاقة",
    "IPv6 & Segment Routing | الانتقال إلى IPv6 والتوجيه المقطعي SRv6",
    "In-Band Telemetry & P4 | قياسات الشبكة عن بُعد والمراقبة الذاتية",
    "AI in Autonomous Networks | الذكاء الاصطناعي في إدارة الشبكات الذاتية",
    "Cloud Networking & SASE | شبكات السحابة والربط متعدد السحب و SASE"
  ];

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-cyan-400';
    if (grade === 'B+' || grade === 'B') return 'text-blue-400';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-400';
    if (grade === 'D+' || grade === 'D') return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span>←</span> Back to Course | العودة للمقرر
            </button>
            <button onClick={onLogout} className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8 shadow-xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-cyan-600/30">
              {user.studentName?.charAt(0) || 'N'}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{user.studentName}</h1>
              <p className="text-slate-400 text-sm mt-1">Student ID: <span className="font-mono text-slate-300">{user.studentNumber}</span></p>
              <p className="text-cyan-400 text-sm font-semibold">Section: {user.sectionNumber}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/40 rounded-xl p-5 text-center border border-slate-600/30">
              <p className="text-slate-400 text-xs mb-2">Overall Grade | التقدير العام</p>
              <p className={`text-4xl font-bold ${getGradeColor(user.overallGrade)}`}>{user.overallGrade}</p>
            </div>
            <div className="bg-slate-700/40 rounded-xl p-5 text-center border border-slate-600/30">
              <p className="text-slate-400 text-xs mb-2">Average Score | المعدل</p>
              <p className="text-4xl font-bold text-white">{user.totalScore}%</p>
            </div>
            <div className="bg-slate-700/40 rounded-xl p-5 text-center border border-slate-600/30">
              <p className="text-slate-400 text-xs mb-2">Progress | الإنجاز</p>
              <p className="text-4xl font-bold text-cyan-400">{completedWeeks}/10</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6">Weekly Progress Record | سجل الأسابيع</h2>
          <div className="space-y-3">
            {weekTitles.map((title, index) => {
              const weekNum = index + 1;
              const wp = user.progress?.[`week${weekNum}`];
              const isDone = wp?.completed;
              return (
                <div key={weekNum} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-slate-600/40">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${isDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-700 text-slate-400'}`}>
                      {isDone ? '✓' : weekNum}
                    </span>
                    <div>
                      <p className="text-white font-medium text-sm">Week {weekNum}: {title.split(' | ')[0]}</p>
                      <p className="text-cyan-300/70 text-xs font-arabic">{title.split(' | ')[1]}</p>
                    </div>
                  </div>
                  <div>
                    {isDone ? (
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-lg text-sm font-semibold">
                        {wp.score}%
                      </span>
                    ) : (
                      <button 
                        onClick={() => onNavigate(`week${weekNum}`)} 
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs transition-colors"
                      >
                        Start →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
