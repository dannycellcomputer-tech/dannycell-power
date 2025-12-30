import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Icono de WhatsApp SVG inline para asegurar el diseño oficial
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="white" className="w-8 h-8">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.909.896 3.156.896h.001c3.181 0 5.768-2.586 5.768-5.766 0-1.545-.603-2.99-1.686-4.072-1.082-1.082-2.529-1.685-4.443-1.685zm.001-2.003c2.316 0 4.417.828 6.049 2.459 1.63 1.63 2.532 3.733 2.532 6.052 0 4.706-3.832 8.539-8.544 8.539h-.006c-1.455 0-2.879-.374-4.148-1.054l-4.702 1.233 1.254-4.577c-.722-1.306-1.103-2.778-1.103-4.135 0-4.707 3.832-8.544 8.544-8.544l.124.025zm4.846 8.35c.205-.102 1.21-.595 1.383-.664.172-.068.297-.102.423.102.126.205.51.664.624.81.114.146.228.163.433.061.205-.102.868-.319 1.652-1.019.615-.548 1.033-1.226 1.154-1.433.121-.207.013-.321.116-.423.093-.092.205-.239.308-.358.102-.12.136-.205.205-.34.068-.136.034-.255-.017-.358-.051-.102-.456-1.099-.624-1.505-.166-.399-.334-.343-.456-.349l-.388-.006c-.135 0-.355.051-.541.255-.187.205-.712.697-.712 1.701 0 1.004.731 1.973.833 2.11.102.136 1.438 2.193 3.486 3.076 1.378.595 1.916.476 2.273.442.404-.038 1.293-.529 1.476-1.04.183-.511.183-.949.128-1.04-.055-.092-.205-.146-.41-.248z" transform="scale(0.85) translate(2,2)"/>
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Mensaje tipo burbuja */}
      {isVisible && (
        <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs relative animate-fade-in border border-gray-100">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          <div className="flex flex-col gap-1 pr-6">
            <h4 className="font-bold text-gray-800 text-sm">¡Bienvenido a DannyCell Power!</h4>
            <p className="text-gray-600 text-sm">¿Cómo podemos ayudarte con tu movilidad?</p>
          </div>
          {/* Triángulo de la burbuja */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
        </div>
      )}

      {/* Botón flotante */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center gap-2 group"
      >
        <div className="flex items-center gap-2">
            <WhatsAppIcon />
            <span className="font-semibold pr-2 hidden group-hover:block transition-all duration-300">Escríbenos</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppWidget;