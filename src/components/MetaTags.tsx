import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaTags: React.FC = () => {
  const location = useLocation();

  const getMetaInfo = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return {
        title: 'DannyCell Power - Motos Eléctricas | Distribuidores Oficiales Ofero',
        description: 'DannyCell Power: Distribuidores Oficiales Ofero en Colombia. Motos eléctricas, scooters y bicicletas con la mejor garantía. Envío nacional y asesoría experta.',
        keywords: 'motos eléctricas, scooters eléctricos, bicicletas eléctricas, Ofero, DannyCell Power, movilidad eléctrica Colombia'
      };
    }
    
    if (path === '/catalogo') {
      return {
        title: 'Catálogo de Motos Eléctricas | DannyCell Power',
        description: 'Explora nuestro catálogo completo de motos eléctricas Ofero. Modelos para todos los estilos y presupuestos con la mejor garantía del mercado.',
        keywords: 'catálogo motos eléctricas, modelos Ofero, precios motos eléctricas, comprar moto eléctrica'
      };
    }
    
    if (path === '/contacto') {
      return {
        title: 'Contacto | DannyCell Power',
        description: 'Contáctanos para asesoría experta en motos eléctricas. Atención personalizada y cotizaciones inmediatas en toda Colombia.',
        keywords: 'contacto DannyCell Power, teléfono motos eléctricas, asesoría Ofero, cotización moto eléctrica'
      };
    }
    
    if (path === '/personalizar') {
      return {
        title: 'Personaliza tu Moto Eléctrica | DannyCell Power',
        description: 'Diseña tu moto eléctrica a medida. Configura colores, accesorios y especificaciones con nuestro constructor personalizado.',
        keywords: 'personalizar moto eléctrica, configurador Ofero, moto a medida, diseño personalizado'
      };
    }
    
    if (path.startsWith('/producto/')) {
      return {
        title: 'Producto | DannyCell Power',
        description: 'Descubre las especificaciones técnicas y características de este modelo de moto eléctrica Ofero.',
        keywords: 'ficha técnica moto eléctrica, especificaciones Ofero, detalles producto'
      };
    }
    
    // Default
    return {
      title: 'DannyCell Power - Motos Eléctricas',
      description: 'DannyCell Power: Distribuidores Oficiales Ofero en Colombia. Motos eléctricas, scooters y bicicletas con la mejor garantía.',
      keywords: 'motos eléctricas, DannyCell Power, Ofero, movilidad eléctrica Colombia'
    };
  };

  const meta = getMetaInfo();

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://dannycellpower.com${location.pathname}`} />
      <meta property="og:image" content="https://dannycellpower.com/logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content="https://dannycellpower.com/logo.png" />
      <link rel="canonical" href={`https://dannycellpower.com${location.pathname}`} />
    </Helmet>
  );
};

export default MetaTags;
