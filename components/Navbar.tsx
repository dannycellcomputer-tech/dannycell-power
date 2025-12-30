import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Smartphone, Globe, User, LogOut, Settings, Bike, Search } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    cartCount, 
    user, 
    setLoginModalOpen, 
    logout, 
    language, 
    toggleLanguage, 
    setCartOpen,
    setSearchOpen,
    t
  } = useStore();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-brand-primary/5">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Altura: Móvil h-16, Tablet h-18, Desktop h-20 */}
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20 transition-all duration-300 relative">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group py-2 overflow-visible relative">
                <div className="relative z-50">
                  <div className="absolute inset-0 bg-brand-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                  {/* Logo responsive: h-10 mobile, h-12 tablet, h-16 desktop */}
                  <img 
                    src={LOGO_URL} 
                    alt="DannyCell Logo" 
                    referrerPolicy="no-referrer"
                    className="h-10 md:h-12 lg:h-20 w-auto object-contain relative drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-300" 
                  />
                </div>
                <div className="flex flex-col justify-center overflow-visible pl-2">
                  <span className="text-lg md:text-xl lg:text-2xl font-black tracking-tighter text-white leading-relaxed italic pb-1 inline-block">
                    DannyCell<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500 pr-2 ml-1">Power</span>
                  </span>
                  <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-400 font-bold tracking-[0.4em] uppercase group-hover:text-brand-primary transition-colors hidden sm:block">
                    Electric Moto
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu - Solo visible en LG (Laptop/PC) */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                
                {/* IDIOMA Y LOGIN */}
                <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
                  <button 
                    onClick={toggleLanguage}
                    className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg text-[10px] font-bold transition-all border border-transparent hover:border-white/10 uppercase tracking-widest flex items-center gap-2"
                  >
                    <Globe size={14} /> {language === 'es' ? 'ES' : 'EN'}
                  </button>

                  {user ? (
                    <button 
                      onClick={logout}
                      className="text-gray-400 hover:text-brand-accent hover:bg-white/5 px-3 py-2 rounded-lg text-[10px] font-bold transition-all border border-transparent hover:border-white/10 uppercase tracking-widest flex items-center gap-2"
                    >
                      <LogOut size={14} /> {user.name}
                    </button>
                  ) : (
                    <button 
                      onClick={() => setLoginModalOpen(true)}
                      className="text-gray-400 hover:text-brand-primary hover:bg-white/5 px-3 py-2 rounded-lg text-[10px] font-bold transition-all border border-transparent hover:border-white/10 uppercase tracking-widest flex items-center gap-2"
                    >
                      <User size={14} /> {t('login')}
                    </button>
                  )}
                </div>

                <Link to="/" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-transparent hover:border-white/10 uppercase tracking-wide">{t('nav_home')}</Link>
                <Link to="/catalogo" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-transparent hover:border-white/10 uppercase tracking-wide flex items-center gap-2">
                   <Bike size={16} /> {t('nav_catalog')}</Link>
                <Link to="/personalizar" className="text-gray-300 hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 uppercase tracking-wide border border-transparent hover:border-brand-primary/20">
                    <Settings size={16} /> {t('nav_builder')}
                </Link>
                
                <div className="h-6 w-px bg-white/10 mx-2"></div>

                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-3 text-gray-300 hover:text-white transition-all hover:bg-white/5 rounded-full"
                  aria-label="Buscar"
                >
                  <Search size={22} />
                </button>

                <button 
                  onClick={() => setCartOpen(true)}
                  className="relative p-3 text-gray-300 hover:text-brand-primary transition-all group"
                >
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 rounded-full blur-sm transition-all"></div>
                  <ShoppingCart size={22} className="relative z-10" />
                  <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-brand-bg shadow-neon-red">
                    {cartCount}
                  </span>
                </button>
                <Link to="/contacto" className="bg-brand-primary hover:bg-cyan-400 text-black px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-wider transition-all shadow-neon-blue hover:scale-105 flex items-center gap-2 ml-4">
                  <Smartphone size={18} strokeWidth={2.5} /> {t('nav_contact')}
                </Link>
              </div>
            </div>
            
            {/* Mobile & Tablet Controls - Visible hasta LG */}
            <div className="-mr-2 flex lg:hidden items-center gap-2">
              <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Search size={22} />
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                className="p-2 text-gray-300 hover:text-brand-primary transition-colors relative"
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                   <span className="absolute top-0 right-0 bg-brand-accent text-white text-[9px] font-bold px-1 py-0.5 rounded-full border border-black min-w-[16px] text-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-brand-primary hover:bg-white/5 focus:outline-none"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden bg-brand-card border-b border-brand-border shadow-2xl animate-in slide-in-from-top-5">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold border-b border-white/5 uppercase tracking-wide">{t('nav_home')}</Link>
              <Link to="/catalogo" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold border-b border-white/5 uppercase tracking-wide">{t('nav_catalog')}</Link>
              <Link to="/personalizar" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold border-b border-white/5 uppercase tracking-wide">{t('nav_builder')}</Link>
              <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-brand-primary font-bold block px-3 py-3 rounded-md text-base uppercase tracking-wide">{t('nav_contact')}</Link>
              
              <div className="pt-4 mt-2 space-y-3 px-3">
                {user ? (
                   <button onClick={logout} className="w-full text-left text-brand-accent font-bold py-2 text-sm flex items-center gap-2 uppercase">
                     <LogOut size={18} /> {t('logout')}
                   </button>
                ) : (
                  <button onClick={() => { setIsOpen(false); setLoginModalOpen(true); }} className="w-full text-left text-gray-400 hover:text-brand-primary py-2 text-sm font-medium flex items-center gap-2 uppercase">
                     <User size={18} /> {t('login')}
                  </button>
                )}
                
                <button onClick={() => { setIsOpen(false); toggleLanguage(); }} className="w-full text-left text-gray-400 hover:text-brand-primary py-2 text-sm font-medium flex items-center gap-2 uppercase">
                   <Globe size={18} /> {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;