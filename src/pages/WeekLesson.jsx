import React, { useState } from 'react';
import { networkCourseWeeks as weekData } from '../networkCourseData';

const WeekLesson = ({ weekNum, user, onNavigate, onExerciseComplete, onLogout }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const week = weekData[weekNum];
  if (!week) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Week {weekNum} not found</h1>
          <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-cyan-600 text-white rounded-lg">Back to Home</button>
        </div>
      </div>
    );
  }

  const totalSteps = week.content.length + 1;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const handleAnswer = (qIndex, optIndex) => { 
    if (!submitted) setAnswers({ ...answers, [qIndex]: optIndex }); 
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = week.exercises.filter((ex, i) => answers[i] === ex.correct).length;
    const score = Math.round((correct / week.exercises.length) * 100);
    onExerciseComplete(weekNum, score);
  };

  const renderContent = (item, index) => {
    if (item.type === 'intro') {
      return (
        <div key={index} className="bg-gradient-to-r from-cyan-950/60 to-slate-800/60 rounded-2xl p-8 border border-cyan-500/40 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">{item.titleEn}</h2>
          <p className="text-cyan-300 font-arabic text-lg mb-4">{item.titleAr}</p>
          <p className="text-slate-200 mb-4 leading-relaxed text-base">{item.contentEn}</p>
          <div className="p-4 bg-slate-900/50 rounded-xl border border-cyan-500/20">
            <p className="text-cyan-200/90 font-arabic leading-relaxed text-base">{item.contentAr}</p>
          </div>
        </div>
      );
    }
    if (item.type === 'concept') {
      return (
        <div key={index} className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">{item.titleEn}</h3>
          <p className="text-cyan-300 font-arabic mb-4">{item.titleAr}</p>
          <p className="text-slate-300 mb-3 leading-relaxed">{item.contentEn}</p>
          <p className="text-cyan-200/80 font-arabic mb-6 leading-relaxed">{item.contentAr}</p>
          {item.keyPoints && (
            <ul className="space-y-3 mt-4">
              {item.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-700/40 p-4 rounded-xl border border-slate-600/50">
                  <span className="text-cyan-400 mt-1 text-lg font-bold">•</span>
                  <div>
                    <span className="text-white font-medium block">{point.en}</span>
                    <span className="text-cyan-300/80 font-arabic text-sm block mt-1.5">{point.ar}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    if (item.type === 'code') {
      return (
        <div key={index} className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">{item.titleEn}</h3>
          <p className="text-cyan-300 font-arabic mb-4">{item.titleAr}</p>
          <pre className="bg-slate-950 rounded-xl p-5 overflow-x-auto mb-4 border border-slate-800">
            <code className="text-cyan-300 text-sm font-mono leading-relaxed">{item.code}</code>
          </pre>
          <p className="text-slate-300 text-sm font-medium">{item.explanation}</p>
          <p className="text-cyan-300/80 font-arabic text-sm mt-1.5">{item.explanationAr}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span>←</span> Back to Course | العودة
            </button>
            <div className="text-center">
              <h1 className="text-white font-bold text-sm">Week {weekNum}: {week.titleEn}</h1>
              <p className="text-cyan-300/70 text-xs font-arabic">{week.titleAr}</p>
            </div>
            <button onClick={onLogout} className="text-red-400 hover:text-red-300 text-sm">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {currentStep === 0 && week.video && (
          <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 mb-8 shadow-xl">
            <div className="aspect-video bg-slate-950">
              <iframe 
                className="w-full h-full" 
                src={`https://www.youtube.com/embed/${week.video.youtubeId}`} 
                title={week.video.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-1">{week.video.title}</h3>
              <p className="text-cyan-300/70 text-sm font-arabic mb-3">{week.video.titleAr}</p>
              <p className="text-slate-400 text-sm">{week.video.description}</p>
            </div>
          </div>
        )}

        {currentStep > 0 && currentStep <= week.content.length && (
          <div className="mb-8">
            {renderContent(week.content[currentStep - 1], currentStep - 1)}
          </div>
        )}

        {currentStep === totalSteps - 1 && (
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl border border-cyan-500/30">
                📝
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Week {weekNum} Quiz & Exercises</h3>
              <p className="text-cyan-300/70 font-arabic mb-6">اختبار الفهم واستيعاب المفاهيم الشبكية المتقدمة للأسبوع {weekNum}</p>
              <button 
                onClick={() => setShowExercise(true)} 
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-600/30 transition-all"
              >
                {submitted ? 'Review Quiz Answers | مراجعة الإجابات' : 'Start Exercises | بدء الاختبار'}
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <button 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} 
            disabled={currentStep === 0} 
            className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-semibold"
          >
            ← Previous | السابق
          </button>
          {currentStep < totalSteps - 1 ? (
            <button 
              onClick={() => setCurrentStep(currentStep + 1)} 
              className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm font-semibold shadow-md shadow-cyan-600/20"
            >
              Next Step | التالي →
            </button>
          ) : (
            <button 
              onClick={() => onNavigate('home')} 
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors text-sm font-semibold shadow-md shadow-emerald-600/20"
            >
              Finish Week | إنهاء الأسبوع ✓
            </button>
          )}
        </div>

        {showExercise && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-700 shadow-2xl">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700">
                <div>
                  <h3 className="text-xl font-bold text-white">Week {weekNum} Exercises</h3>
                  <p className="text-cyan-300/70 text-xs font-arabic">اختبار الفهم والتقييم الذاتي</p>
                </div>
                <button onClick={() => setShowExercise(false)} className="text-slate-400 hover:text-white text-xl font-bold">✕</button>
              </div>

              <div className="space-y-6 mb-8">
                {week.exercises.map((ex, qIndex) => (
                  <div key={qIndex} className="bg-slate-700/30 p-5 rounded-xl border border-slate-600/50">
                    <p className="text-white font-medium mb-1">
                      <span className="text-cyan-400 font-bold">{qIndex + 1}. </span>{ex.q}
                    </p>
                    <p className="text-cyan-300/70 font-arabic text-sm mb-4">{ex.qAr}</p>
                    <div className="space-y-2">
                      {ex.options.map((opt, optIndex) => {
                        const isSelected = answers[qIndex] === optIndex;
                        const isCorrect = ex.correct === optIndex;
                        let optClass = "p-3.5 rounded-lg border text-sm text-left transition-all cursor-pointer block w-full ";
                        if (submitted) {
                          if (isCorrect) optClass += "bg-emerald-600/20 border-emerald-500 text-emerald-300";
                          else if (isSelected && !isCorrect) optClass += "bg-red-600/20 border-red-500 text-red-300";
                          else optClass += "bg-slate-800/40 border-slate-700 text-slate-400 opacity-60";
                        } else {
                          optClass += isSelected 
                            ? "bg-cyan-600/30 border-cyan-500 text-cyan-300 font-medium" 
                            : "bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-700/50";
                        }
                        return (
                          <div key={optIndex} onClick={() => handleAnswer(qIndex, optIndex)} className={optClass}>
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {!submitted ? (
                <button 
                  onClick={handleSubmit} 
                  disabled={Object.keys(answers).length < week.exercises.length} 
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-cyan-600/30 transition-all"
                >
                  Submit Answers & Save Grade | إرسال الإجابات وحفظ النتيجة
                </button>
              ) : (
                <div className="text-center bg-slate-900/80 p-6 rounded-xl border border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">Your Score | نتيجتك</p>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">
                    {Math.round((week.exercises.filter((ex, i) => answers[i] === ex.correct).length / week.exercises.length) * 100)}%
                  </p>
                  <p className="text-emerald-400 text-xs font-semibold mb-4">
                    ✓ Saved to your profile and synced to Supabase database!
                  </p>
                  <button 
                    onClick={() => { setShowExercise(false); onNavigate('home'); }} 
                    className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Return to Course Home | العودة للرئيسية
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekLesson;
