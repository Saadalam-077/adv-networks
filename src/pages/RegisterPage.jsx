import React, { useState } from 'react';

const RegisterPage = ({ onRegister, onNavigate }) => {
  const [form, setForm] = useState({ 
    studentName: '', 
    studentNumber: '', 
    sectionNumber: 'NET-401', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setSuccess('');
    
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match | كلمات المرور غير متطابقة');
      return;
    }
    if (form.studentNumber.length < 6 || form.studentNumber.length > 12) {
      setError('Student number must be between 6 and 12 digits | الرقم الجامعي يجب أن يكون بين 6 و 12 رقماً');
      return;
    }
    if (form.password.length < 4) {
      setError('Password must be at least 4 characters | كلمة المرور يجب أن تكون 4 أحرف على الأقل');
      return;
    }

    setLoading(true);
    try {
      const result = await onRegister(form);
      if (result === true) {
        setSuccess('Registration successful! Redirecting... | تم التسجيل بنجاح! جاري التحويل...');
      } else {
        setError('Student number already exists | الرقم الجامعي مسجل مسبقاً');
      }
    } catch (err) {
      setError('Registration failed. Please try again. | فشل التسجيل. حاول مرة أخرى.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-slate-700/80 shadow-2xl shadow-cyan-950/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-600/30 border border-cyan-400/30">
            <span className="text-white font-black text-xl tracking-wider">NET</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Register | تسجيل طالب جديد</h1>
          <p className="text-cyan-300/80 font-arabic font-medium mt-1">مقرر موضوعات متقدمة في الشبكات</p>
          <p className="text-slate-400 text-sm mt-1">Taif University | جامعة الطائف</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm flex items-center gap-2">
              <span>❌</span> {error}
            </div>
          )}
          {success && (
            <div className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-3 text-cyan-300 text-sm flex items-center gap-2">
              <span>✅</span> {success}
            </div>
          )}
          
          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Full Name | الاسم الكامل</label>
            <input 
              type="text" 
              value={form.studentName} 
              onChange={(e) => setForm({...form, studentName: e.target.value})} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" 
              placeholder="مثال: صالح أحمد الغامدي" 
              required 
              disabled={loading} 
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Student Number | الرقم الجامعي</label>
            <input 
              type="text" 
              value={form.studentNumber} 
              onChange={(e) => setForm({...form, studentNumber: e.target.value.replace(/\D/g, '').slice(0, 10)})} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-mono" 
              placeholder="44XXXXXX" 
              required 
              disabled={loading} 
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Section | الشعبة</label>
            <select 
              value={form.sectionNumber} 
              onChange={(e) => setForm({...form, sectionNumber: e.target.value})} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500" 
              disabled={loading}
            >
              <option value="NET-401">NET-401</option>
              <option value="NET-402">NET-402</option>
              <option value="NET-403">NET-403</option>
              <option value="2444">2444</option>
              <option value="2445">2445</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Password | كلمة المرور</label>
            <input 
              type="password" 
              value={form.password} 
              onChange={(e) => setForm({...form, password: e.target.value})} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" 
              placeholder="Enter password"
              required 
              disabled={loading} 
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Confirm Password | تأكيد كلمة المرور</label>
            <input 
              type="password" 
              value={form.confirmPassword} 
              onChange={(e) => setForm({...form, confirmPassword: e.target.value})} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500" 
              placeholder="Re-enter password"
              required 
              disabled={loading} 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Registering... | جاري التسجيل</span>
              </>
            ) : (
              'Register | إنشاء حساب'
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-700/60 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <button onClick={() => onNavigate('login')} className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4">
              Login | تسجيل الدخول
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
