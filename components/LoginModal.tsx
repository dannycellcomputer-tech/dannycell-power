import React, { useState } from 'react';
import { X, User, Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { LOCAL_LOGO_URL } from '../constants';

const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setLoginModalOpen, login, t } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setLoginModalOpen(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-brand-primary/10 w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
        <button 
          onClick={() => setLoginModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-glow">
            <img 
              src={LOCAL_LOGO_URL} 
              alt="Logo" 
              referrerPolicy="no-referrer"
              className="w-16 h-16 object-cover" 
            />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic">{t('login')}</h2>
          <p className="text-sm text-gray-400 mt-2 font-medium">Ingresa tus credenciales para acceder al sistema</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-brand-primary mb-2 uppercase tracking-wide">Correo Electrónico</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary focus:shadow-neon-blue text-white transition-all placeholder-gray-700"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-primary mb-2 uppercase tracking-wide">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="password" 
                required
                className="w-full pl-10 pr-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary focus:shadow-neon-blue text-white transition-all placeholder-gray-700"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-primary hover:bg-cyan-400 text-black font-black py-3 rounded-xl transition-all shadow-lg hover:shadow-neon-blue uppercase tracking-wider"
          >
            {t('login')}
          </button>
        </form>
        
        <p className="text-xs text-center text-gray-600 mt-6 font-mono">
          * Demo Access: System Bypass Enabled.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;