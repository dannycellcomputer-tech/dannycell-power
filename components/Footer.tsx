import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { useStore } from '../context/StoreContext';

const Footer: React.FC = () => {
  const { t } = useStore();
  
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8 relative overflow-hidden">
      {/* Glow Effect Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <img 
                  src={LOGO_URL} 
                  alt="DannyCell Logo" 
                  referrerPolicy="no-referrer"
                  className="h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                />
              </div>
              <div className="overflow-visible">
                <h3 className="text-2xl font-black text-white mb-0 leading-relaxed italic tracking-tighter pr-6 inline-block">DannyCell <span className="text-brand-primary">Power</span></h3>
                <div className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase mt-1">Electric Moto</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Revolucionando el transporte urbano. Motos eléctricas de alto rendimiento para un futuro sostenible y emocionante.
            </p>
          </div>

          {/* Columna Enlaces */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span> Navegación
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"> <span className="text-brand-primary opacity-50">&gt;</span> {t('nav_home')}</Link></li>
              <li><Link to="/catalogo" className="hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"> <span className="text-brand-primary opacity-50">&gt;</span> {t('nav_catalog')}</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"> <span className="text-brand-primary opacity-50">&gt;</span> {t('nav_contact')}</Link></li>
              <li><Link to="/personalizar" className="hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"> <span className="text-brand-primary opacity-50">&gt;</span> {t('nav_builder')}</Link></li>
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-accent rounded-full"></span> {t('contact_title')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300 text-sm group">
                <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span className="font-bold tracking-wide">+57 300 501 6723</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300 text-sm group">
                <div className="bg-[#25D366]/10 p-3 rounded-lg text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle size={18} />
                </div>
                <span>Soporte WhatsApp 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} DannyCell Power. Energía que te mueve.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;