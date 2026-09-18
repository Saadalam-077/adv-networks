import React from 'react';

const HomePage = ({ user, onNavigate, onLogout }) => {
  const weeks = [
    { week: 1, titleEn: "SDN & OpenFlow Protocol", titleAr: "الشبكات المعرفة بالبرمجيات وبروتوكول OpenFlow", icon: "🌐" },
    { week: 2, titleEn: "NFV & Service Function Chaining", titleAr: "محاكاة وظائف الشبكة وسلاسل الخدمات", icon: "📦" },
    { week: 3, titleEn: "5G Core & Edge Computing (MEC)", titleAr: "بنية شبكات الجيل الخامس والحوسبة الطرفية", icon: "📶" },
    { week: 4, titleEn: "Data Centers & Spine-Leaf Fabrics", titleAr: "شبكات مراكز البيانات وبنية Spine-Leaf", icon: "🏢" },
    { week: 5, titleEn: "Zero Trust Architecture & Security", titleAr: "أمن الشبكات المتقدم ونموذج انعدام الثقة Zero Trust", icon: "🛡️" },
    { week: 6, titleEn: "IoT Protocols (MQTT, CoAP, LoRaWAN)", titleAr: "بروتوكولات إنترنت الأشياء والشبكات منخفضة الطاقة", icon: "📡" },
    { week: 7, titleEn: "IPv6 Migration & Segment Routing (SRv6)", titleAr: "الانتقال إلى IPv6 والتوجيه المقطعي SRv6", icon: "🔀" },
    { week: 8, titleEn: "In-Band Telemetry (INT) & P4 Observability", titleAr: "قياسات الشبكة عن بُعد والمراقبة الذاتية", icon: "📊" },
    { week: 9, titleEn: "AI in Autonomous Networks & IBN", titleAr: "الذكاء الاصطناعي في إدارة الشبكات الذاتية", icon: "🤖" },
    { week: 10, titleEn: "Cloud Networking, Interconnect & SASE", titleAr: "شبكات السحابة والربط متعدد السحب و SASE", icon: "☁️" },
  ];

  const completedWeeks = Object.entries(user.progress || {}).filter(([key, val]) => val && val.completed && parseInt(key.replace('week', '')) <= 10).length;
  const progressPercent = Math.round((completedWeeks / 10) * 100);

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-cyan-400';
    if (grade === 'B+' || grade === 'B') return 'text-blue-400';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-400';
    if (grade === 'D+' || grade === 'D') return 'text-orange-400';
    if (grade === 'F') return 'text-red-400';
    return 'text-slate-400';
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
                <h1 className="text-white font-bold">Advanced Topics in Networks</h1>
                <p className="text-cyan-300/70 text-xs font-arabic">موضوعات متقدمة في الشبكات | جامعة الطائف</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => onNavigate('profile')} className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{user.studentName.charAt(0)}</div>
                <div className="text-left hidden sm:block">
                  <p className="text-white text-sm font-semibold">{user.studentName}</p>
                  <p className="text-slate-400 text-xs">{user.studentNumber}</p>
                </div>
              </button>
              <button onClick={onLogout} className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <a href="https://t.me/+B2zs30x2p9dhNzRk" target="_blank" rel="noopener noreferrer" className="block mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-600/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Join Our Telegram Channel! | انضم لقناة التليجرام</h3>
                <p className="text-white/80 text-sm">قناة المادة للاستفسارات، التحديثات، والإعلانات الأكاديمية</p>
              </div>
            </div>
            <div className="text-white text-2xl font-bold">→</div>
          </div>
        </a>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Overall Progress | التقدم العام</h3>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-white">{progressPercent}%</span>
              <span className="text-slate-400 text-sm mb-1">{completedWeeks}/10 weeks</span>
            </div>
            <div className="mt-4 h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Current Grade | الدرجة الحالية</h3>
            <div className="flex items-end gap-3">
              <span className={`text-4xl font-bold ${getGradeColor(user.overallGrade)}`}>{user.overallGrade}</span>
              <span className="text-slate-400 text-sm mb-1">{user.totalScore}% avg</span>
            </div>
            <p className="text-slate-500 text-xs mt-3">محسوبة بناءً على التمارين والاختبارات المكتملة</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Student Info | معلومات الطالب</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span className="text-slate-500 text-sm">Name:</span><span className="text-white text-sm">{user.studentName}</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">ID:</span><span className="text-white text-sm font-mono">{user.studentNumber}</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">Section:</span><span className="text-cyan-400 text-sm font-semibold">{user.sectionNumber}</span></div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Course Curriculum | الخطة الأسبوعية للمقرر</h2>
            <p className="text-slate-400 text-sm font-arabic mt-1">10 أسابيع دراسية شاملة لأحدث تقنيات وهندسة شبكات الحاسب المتقدمة</p>
          </div>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-semibold">
            10 Weeks • 40 Exercises
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {weeks.map((w) => {
            const weekProgress = user.progress?.[`week${w.week}`];
            const isCompleted = weekProgress?.completed;
            const score = weekProgress?.score;

            return (
              <div 
                key={w.week}
                onClick={() => onNavigate(`week${w.week}`)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isCompleted 
                    ? 'bg-slate-800/80 border-cyan-500/40 hover:border-cyan-400 shadow-sm shadow-cyan-500/10' 
                    : 'bg-slate-800/40 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    {w.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-cyan-600/20 text-cyan-400 text-xs font-bold rounded">Week {w.week}</span>
                      {isCompleted && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded flex items-center gap-1">
                          ✓ {score}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-base">{w.titleEn}</h3>
                    <p className="text-cyan-300/70 text-sm font-arabic">{w.titleAr}</p>
                  </div>
                </div>
                <div className="text-slate-400 text-xl font-bold pl-2">
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
