import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { useStore } from '../context/StoreContext';

const Contact: React.FC = () => {
  const { t } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simular envío o abrir WhatsApp con el mensaje
    const text = `Hola DannyCell Power, soy ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    
    // Pequeño delay para feedback visual antes de abrir
    setTimeout(() => {
        window.open(url, '_blank');
        setSubmitted(false);
        setFormData({ name: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20 bg-brand-bg text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">{t('contact_title')}</h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Estamos listos para asesorarte y armar el combo perfecto para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-brand-card p-10 rounded-[2rem] border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-wide">Info de Contacto</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary border border-brand-primary/20">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-wider mb-1">Línea Directa</h4>
                    <p className="text-gray-300 text-lg font-medium">+57 320 633 8184</p>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary font-bold text-sm hover:underline mt-2 block uppercase tracking-wide"
                    >
                      Iniciar chat ahora &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-10 rounded-[2rem] text-black shadow-neon-blue relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-black mb-4 uppercase italic">¿Necesitas asesoría inmediata?</h3>
              <p className="mb-8 font-bold leading-relaxed opacity-80">Nuestros expertos están disponibles en WhatsApp para responder tus dudas técnicas al instante.</p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-black px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg uppercase tracking-wide"
              >
                Chatear con Soporte
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-brand-card p-10 rounded-[2rem] border border-white/5 shadow-2xl relative">
             <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/20 rounded-bl-[4rem] rounded-tr-[2rem]"></div>
            <h3 className="text-3xl font-black text-white mb-8 uppercase italic">Escríbenos</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-primary mb-2 uppercase tracking-wide">{t('contact_name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:shadow-neon-blue transition-all font-medium placeholder-gray-700"
                  placeholder="TU NOMBRE"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-primary mb-2 uppercase tracking-wide">{t('contact_message')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:shadow-neon-blue transition-all font-medium placeholder-gray-700"
                  placeholder="¿EN QUÉ PODEMOS AYUDARTE?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white hover:bg-brand-primary hover:text-white text-black font-black py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg uppercase tracking-widest text-lg group"
                disabled={submitted}
              >
                {submitted ? 'Abriendo WhatsApp...' : (
                  <>
                    Contactar por WhatsApp <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;