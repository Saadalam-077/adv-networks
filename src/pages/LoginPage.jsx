import React, { useState } from 'react';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await onLogin(studentNumber, password);
      if (!result) {
        setError('Invalid student number or password | الرقم الجامعي أو كلمة المرور غير صحيحة');
      }
    } catch (err) {
      setError('Login failed. Please try again. | فشل تسجيل الدخول. حاول مرة أخرى.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-slate-700/80 shadow-2xl shadow-cyan-950/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-600/30 border border-cyan-400/30">
            <span className="text-white font-black text-xl tracking-wider">NET</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Advanced Topics in Networks</h1>
          <p className="text-cyan-300/80 font-arabic text-lg font-medium mt-1">موضوعات متقدمة في الشبكات</p>
          <p className="text-slate-400 text-sm mt-2">Taif University | جامعة الطائف</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm flex items-center gap-2">
              <span>❌</span> {error}
            </div>
          )}
          
          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Student Number | الرقم الجامعي</label>
            <input 
              type="text" 
              value={studentNumber} 
              onChange={(e) => setStudentNumber(e.target.value)} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono" 
              placeholder="Enter student number or ID" 
              required 
              disabled={loading} 
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2 font-medium">Password | كلمة المرور</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" 
              placeholder="Enter password" 
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
                <span>Logging in... | جاري الدخول</span>
              </>
            ) : (
              'Login | تسجيل الدخول'
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-700/60 text-center">
          <p className="text-slate-400 text-sm">
            Don't have an account?{' '}
            <button onClick={() => onNavigate('register')} className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4">
              Register | تسجيل حساب جديد
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
