import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalLink: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Eliminar canonical existente si hay
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Crear nueva etiqueta canonical
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://dannycellpower.com${location.pathname}`;
    document.head.appendChild(canonical);

    // Cleanup al desmontar
    return () => {
      canonical.remove();
    };
  }, [location]);

  return null;
};

export default CanonicalLink;
