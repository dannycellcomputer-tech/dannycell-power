import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, Truck, Package, ShieldCheck, Zap, Battery, Wind, Wallet, Leaf, Clock, CreditCard, CheckCircle, Plus, Minus, HelpCircle, MapPin, Navigation, Fuel, XCircle, Calculator, TrendingDown, Brain, Sparkles, Smartphone, Camera, Shield, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS, WHATSAPP_NUMBER } from '../constants';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

// Phone Calculator Component
const PhoneCalculator: React.FC = () => {
  const [selectedPhone, setSelectedPhone] = useState('iphone');
  
  const phonePrices: Record<string, { dannyCell: number; otherStore: number; savings: number; percentage: number; name: string }> = {
    'iphone': { 
      dannyCell: 5200000, 
      otherStore: 6500000, 
      savings: 1300000, 
      percentage: 20,
      name: 'iPhone 15 Pro'
    },
    'samsung': { 
      dannyCell: 4800000, 
      otherStore: 5800000, 
      savings: 1000000, 
      percentage: 17,
      name: 'Samsung S24 Ultra'
    },
    'xiaomi': { 
      dannyCell: 3500000, 
      otherStore: 4200000, 
      savings: 700000, 
      percentage: 17,
      name: 'Xiaomi 14 Pro'
    },
    'redmi': { 
      dannyCell: 1800000, 
      otherStore: 2200000, 
      savings: 400000, 
      percentage: 18,
      name: 'Redmi Note 13 Pro'
    }
  };

  const currentPhone = phonePrices[selectedPhone];

  return (
    <div className="bg-[#111] p-8 lg:p-10 rounded-3xl border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-brand-secondary" size={24} />
        <h3 className="text-xl lg:text-2xl font-black text-white">Comparador de Precios</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Selecciona un Celular</label>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setSelectedPhone('iphone')}
              className={`bg-white/5 hover:bg-brand-secondary/20 border border-white/10 hover:border-brand-secondary/50 rounded-lg py-3 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-secondary/20 ${
                selectedPhone === 'iphone' ? 'bg-brand-secondary/20 border-2 border-brand-secondary/50 scale-105 shadow-lg shadow-brand-secondary/20' : ''
              }`}
            >
              iPhone 15 Pro
            </button>
            <button 
              onClick={() => setSelectedPhone('samsung')}
              className={`bg-white/5 hover:bg-brand-secondary/20 border border-white/10 hover:border-brand-secondary/50 rounded-lg py-3 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-secondary/20 ${
                selectedPhone === 'samsung' ? 'bg-brand-secondary/20 border-2 border-brand-secondary/50 scale-105 shadow-lg shadow-brand-secondary/20' : ''
              }`}
            >
              Samsung S24 Ultra
            </button>
            <button 
              onClick={() => setSelectedPhone('xiaomi')}
              className={`bg-white/5 hover:bg-brand-secondary/20 border border-white/10 hover:border-brand-secondary/50 rounded-lg py-3 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-secondary/20 ${
                selectedPhone === 'xiaomi' ? 'bg-brand-secondary/20 border-2 border-brand-secondary/50 scale-105 shadow-lg shadow-brand-secondary/20' : ''
              }`}
            >
              Xiaomi 14 Pro
            </button>
            <button 
              onClick={() => setSelectedPhone('redmi')}
              className={`bg-white/5 hover:bg-brand-secondary/20 border border-white/10 hover:border-brand-secondary/50 rounded-lg py-3 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-secondary/20 ${
                selectedPhone === 'redmi' ? 'bg-brand-secondary/20 border-2 border-brand-secondary/50 scale-105 shadow-lg shadow-brand-secondary/20' : ''
              }`}
            >
              Redmi Note 13 Pro
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">Tiendas Competidoras</h4>
              <div className="text-2xl font-black text-red-400">{new Intl.NumberFormat('es-CO').format(currentPhone.otherStore)}</div>
              <div className="text-xs text-gray-500">*Precio promedio mercado</div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">DannyCell</h4>
              <div className="text-2xl font-black text-green-400">{new Intl.NumberFormat('es-CO').format(currentPhone.dannyCell)}</div>
              <div className="text-xs text-gray-500">*Precio especial</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h4 className="text-sm text-gray-400 mb-2">Tu Ahorro</h4>
          <div className="text-3xl lg:text-4xl font-black text-brand-secondary">{new Intl.NumberFormat('es-CO').format(currentPhone.savings)}</div>
          <div className="text-sm text-green-400">Ahorras un {currentPhone.percentage}% en {currentPhone.name}</div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left focus:outline-none"
      >
        <span className={`text-base md:text-lg font-bold transition-colors uppercase tracking-wide ${isOpen ? 'text-brand-primary' : 'text-white group-hover:text-gray-300'}`}>
          {question}
        </span>
        <div className={`p-1.5 md:p-2 rounded-full border border-white/10 transition-all ${isOpen ? 'bg-brand-primary text-black rotate-180' : 'text-gray-400 group-hover:bg-white/10'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4 md:pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
           <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base pr-4 md:pr-8">
             {answer}
           </p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const { t, setQuizOpen } = useStore();
  
  const [comparatorKm, setComparatorKm] = useState(40);
  const gasCostPerKm = 180;
  const electricCostPerKm = 20;

  const monthlyGas = Math.round(comparatorKm * gasCostPerKm * 30);
  const monthlyElectric = Math.round(comparatorKm * electricCostPerKm * 30);
  const threeYearSavings = (monthlyGas - monthlyElectric) * 12 * 3;

  const formatCurrency = (val: number) => new Intl.NumberFormat('es-CO', { 
    style: 'currency', currency: 'COP', maximumFractionDigits: 0 
  }).format(val);

  const faqs = [
    {
      q: "¿Necesito SOAT y Licencia?",
      a: "No Necesitas SOAT ni Licencia. Nuestros modelos de movilidad urbana están clasificados para circular libremente sin estos requisitos. ¡Solo ponte el casco y disfruta del camino sin gastos extra de papeles!"
    },
    {
      q: "¿Dónde puedo cargar mi moto?",
      a: "¡Donde quieras! Todas nuestras motos incluyen un cargador inteligente que se conecta a cualquier toma corriente convencional de 110V (como donde cargas tu celular). No necesitas estaciones especiales ni adaptadores costosos."
    },
    {
      q: "¿Qué pasa si llueve?",
      a: "Nuestras motos cuentan con certificación IP65 o superior en motor y batería, lo que significa que son resistentes a la lluvia y salpicaduras. Puedes rodar bajo la lluvia sin problema, aunque recomendamos evitar inundaciones profundas que cubran el motor."
    },
    {
      q: "¿Cuánto dura la batería?",
      a: "La vida útil de nuestras baterías de Litio es de aproximadamente 800 a 1000 ciclos de carga completos, lo que equivale a unos 3 a 5 años de uso diario antes de que empiece a perder capacidad significativa."
    },
    {
        q: "¿Tienen garantía?",
        a: "Sí, ofrecemos garantía directa de 12 meses en motor y controlador, y 6 meses en batería por defectos de fábrica. Además, contamos con taller especializado y repuestos originales para todos nuestros modelos."
    },
    {
      q: "¿Los celulares son originales?",
      a: "Sí, todos nuestros celulares son 100% originales con garantía oficial del fabricante. Trabajamos directamente con distribuidores autorizados para garantizar autenticidad y calidad."
    },
    {
      q: "¿Qué garantía tienen los celulares?",
      a: "Ofrecemos 1 año de garantía oficial del fabricante en todos nuestros celulares. Además, incluimos soporte técnico gratuito durante todo el período de garantía."
    },
    {
      q: "¿Los celulares vienen desbloqueados?",
      a: "Sí, todos nuestros celulares vienen completamente desbloqueados para usar con cualquier operador de Colombia. Puedes usar tu chip actual o cambiar de operador cuando quieras sin restricciones."
    },
    {
      q: "¿Incluyen accesorios originales?",
      a: "Sí, cada celular incluye su caja sellada con todos los accesorios originales del fabricante: cargador, cable, audífonos y documentación oficial."
    },
    {
      q: "¿Puedo financiar un celular?",
      a: "Sí, ofrecemos planes de financiamiento hasta en 12 meses sin Cuota inicial con ADDI."
    }
  ];

  // Testimonials Carousel Component
const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const allTestimonials = [
    // Testimonios de motos
    ...TESTIMONIALS,
    // Testimonios de celulares
    {
      id: 'phone1',
      name: 'María Rodríguez',
      location: 'Bogotá, DC',
      rating: 5,
      image: 'https://i.postimg.cc/3J3LqQqF/woman-smiling-phone.jpg',
      text: 'Compré el iPhone 15 Pro con DannyCell. Me ahorré $1.300.000 comparado con otras tiendas. El servicio fue excelente y lo recibí al día siguiente.'
    },
    {
      id: 'phone2', 
      name: 'Andrés Castillo',
      location: 'Medellín, ANT',
      rating: 5,
      image: 'https://i.postimg.cc/6Q2fW8qB/man-professional-phone.jpg',
      text: 'El Samsung S24 Ultra es una bestia. DannyCell me ofreció el mejor precio del mercado y con garantía oficial. Totalmente recomendado.'
    },
    {
      id: 'phone3',
      name: 'Sofía Martínez',
      location: 'Cali, VAL',
      rating: 5,
      image: 'https://i.postimg.cc/9Qh6vJ7L/woman-happy-phone.jpg',
      text: 'Mi Xiaomi 14 Pro funciona perfecto. DannyCell me asesoró muy bien en la elección y el precio fue increíble. Muy contenta con mi compra.'
    },
    {
      id: 'phone4',
      name: 'Luis Fernando',
      location: 'Barranquilla, ATL',
      rating: 5,
      image: 'https://i.postimg.cc/L5X8b2K5/man-business-phone.jpg',
      text: 'Excelente experiencia comprando el Redmi Note 13 Pro. DannyCell tiene precios competitivos y el servicio al cliente es de primer nivel.'
    }
  ];

  const visibleTestimonials = 3;
  const maxIndex = allTestimonials.length - visibleTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <button
          onClick={prevTestimonial}
          className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/50 rounded-full p-3 lg:p-4 transition-all hover:scale-110 group"
        >
          <ChevronLeft size={20} className="text-white group-hover:text-brand-primary lg:w-6 lg:h-6" />
        </button>
        
        <div className="text-center flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-3 lg:mb-4 uppercase italic tracking-tight">
            Pilotos DannyCell
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Ellos ya se movilizan con energía limpia y se conectan con la mejor tecnología.
          </p>
        </div>

        <button
          onClick={nextTestimonial}
          className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/50 rounded-full p-3 lg:p-4 transition-all hover:scale-110 group"
        >
          <ChevronRight size={20} className="text-white group-hover:text-brand-primary lg:w-6 lg:h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {allTestimonials.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial) => (
          <div key={testimonial.id} className="bg-brand-card p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] border border-white/5 flex flex-col h-full hover:border-brand-primary/30 transition-all hover:shadow-glow">
            <div className="flex items-center gap-1 text-brand-primary mb-4 lg:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className={`${i < testimonial.rating ? "drop-shadow-[0_0_5px_rgba(0,242,234,0.5)]" : "text-gray-800 fill-gray-800"} lg:w-5 lg:h-5`} />
              ))}
            </div>
            <div className="mb-4 lg:mb-8 flex-grow relative">
              <Quote size={32} className="absolute -top-3 -left-3 text-white/5 z-0 lg:w-12 lg:h-12 lg:-top-4 lg:-left-4" />
              <p className="text-gray-300 italic relative z-10 leading-relaxed text-sm md:text-base lg:text-lg font-medium">"{testimonial.text}"</p>
            </div>
            <div className="flex items-center gap-3 lg:gap-5 mt-auto pt-4 lg:pt-8 border-t border-white/5">
              <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-brand-primary shadow-sm" />
              <div>
                <h4 className="font-bold text-white text-sm lg:text-lg">{testimonial.name}</h4>
                <span className="text-[10px] lg:text-xs text-brand-muted font-bold uppercase tracking-wider">{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const bannerBikes = [
    "https://i.postimg.cc/fbxVHn3c/Picassio-2-Photoroom.png",
    "https://i.postimg.cc/JhJpPn5R/bici-moto-electrica-ofero-magical-3-con-removebg-preview.png"
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white overflow-hidden">
      
      {/* RUNNING BANNER */}
      <div className="bg-[#FFEA00] overflow-hidden py-3 md:py-6 lg:py-10 border-y-2 md:border-y-4 border-black relative z-20 mt-4 md:mt-8 lg:mt-12 mb-4">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
             {bannerBikes.map((img: string, idx: number) => (
                <img 
                  key={idx}
                  src={img} 
                  alt="Moto en movimiento" 
                  className="absolute bottom-1 w-16 md:w-24 lg:w-36 transform -scale-x-100 animate-drive filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
                  style={{ animationDelay: `${idx * 10}s`, animationDuration: '20s', left: '-20%' }}
                />
             ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee relative z-10 items-center pt-1">
          {[...Array(12)].map((_, i) => (
             <div key={i} className="flex items-center gap-3 md:gap-4 lg:gap-6 mx-2 md:mx-4">
                <span className="text-xl md:text-3xl lg:text-5xl font-black text-black italic tracking-tighter uppercase transform -skew-x-12">DANNYCELL POWER</span>
                <Zap size={16} className="text-black fill-black animate-pulse md:w-5 md:h-5 lg:w-7 lg:h-7" />
                <span className="text-xl md:text-3xl lg:text-5xl font-black text-black/40 italic tracking-tighter uppercase transform -skew-x-12">ENTREGA INMEDIATA</span>
                <div className="w-2 h-2 lg:w-4 lg:h-4 bg-black rounded-full"></div>
             </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-brand-bg overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] bg-brand-secondary/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-32 relative z-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16">
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 text-brand-primary font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs mb-4 md:mb-6 lg:mb-8 border border-brand-primary/20 uppercase tracking-[0.2em] shadow-glow animate-pulse-fast">
                 <Zap size={12} fill="currentColor" className="md:w-3.5 md:h-3.5" /> {t('hero_badge')}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-5 lg:mb-6 leading-tight tracking-tighter italic pr-0 md:pr-2">
                {t('hero_title').toUpperCase()} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-primary animate-gradient pb-2 inline-block">
                  {t('hero_subtitle').toUpperCase()}
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-xl text-gray-400 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium md:border-l-4 border-brand-primary md:pl-6">
                {t('hero_desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 justify-center md:justify-start">
                <Link to="/catalogo" className="bg-brand-primary hover:bg-cyan-300 text-black px-8 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full font-black text-sm md:text-base lg:text-lg transition-all shadow-neon-blue hover:scale-105 flex items-center justify-center gap-2 lg:gap-3 uppercase tracking-wider">
                  {t('hero_btn_1')} <ArrowRight size={18} className="lg:w-6 lg:h-6" />
                </Link>
                <Link to="/personalizar" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm md:text-base lg:text-lg transition-all text-center uppercase tracking-wider hover:border-white">
                   {t('hero_btn_2')}
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 relative group p-2 md:p-4 mt-4 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-full filter blur-2xl md:blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <img 
                    src="https://i.postimg.cc/hj5XX6Dh/Gemini-Generated-Image-2wuww02wuww02wuw-upscayl-5x-upscayl-standard-4x.png" 
                    alt="Moto Eléctrica"
                    referrerPolicy="no-referrer"
                    className="relative rounded-2xl md:rounded-3xl shadow-2xl z-10 border border-white/10 w-full transform md:rotate-2 hover:rotate-0 transition-transform duration-700 hover:shadow-neon-blue object-cover h-[250px] md:h-[350px] lg:h-auto"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="bg-black border-t border-white/10 py-4 md:py-6 lg:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-between gap-4 md:gap-6 text-gray-300 font-bold text-[10px] md:text-xs lg:text-lg uppercase tracking-widest">
            <div className="flex items-center gap-2 lg:gap-4"><Wind className="text-brand-primary w-4 h-4 lg:w-7 lg:h-7" /> {t('feature_1')}</div>
            <div className="flex items-center gap-2 lg:gap-4"><Battery className="text-brand-secondary w-4 h-4 lg:w-7 lg:h-7" /> {t('feature_2')}</div>
            <div className="flex items-center gap-2 lg:gap-4"><Truck className="text-brand-accent w-4 h-4 lg:w-7 lg:h-7" /> {t('feature_3')}</div>
            <div className="hidden md:flex items-center gap-2 lg:gap-4"><ShieldCheck className="text-brand-primary lg:w-7 lg:h-7" /> {t('feature_4')}</div>
          </div>
        </div>
      </div>

      {/* CREDITO ADDI BANNER */}
      <section className="w-full bg-black py-8 md:py-10 lg:py-12 px-4 relative overflow-hidden border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-gradient-to-r from-[#00d4ff] via-[#0044ff] to-[#00d4ff] animate-gradient shadow-[0_0_50px_rgba(0,212,255,0.3)] border border-white/20 group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
              <div className="absolute top-10 right-10 text-white/20 transform rotate-12 animate-float hidden lg:block">
                 <CreditCard size={180} />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:px-12 lg:px-20 lg:py-16 gap-6 lg:gap-10 text-center lg:text-left">
                <div className="flex-1 space-y-4 md:space-y-5 lg:space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white text-blue-600 font-black px-4 py-1.5 md:px-5 md:py-2 lg:px-6 rounded-full text-[10px] md:text-xs lg:text-sm uppercase tracking-wider shadow-xl transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <Zap size={12} fill="currentColor" className="md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" /> Financiación Inmediata
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-md">
                    Llévala a <span className="text-[#FFEA00] inline-block animate-pulse">Cuotas</span> <br/>
                    <span className="text-lg md:text-3xl lg:text-5xl font-extrabold not-italic tracking-normal">con el respaldo de</span> <span className="underline decoration-4 decoration-white/30 inline-block transform hover:scale-105 transition-transform duration-300 cursor-pointer">Addi</span>
                  </h2>
                  <ul className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 lg:gap-8 text-blue-50 font-bold text-xs md:text-sm lg:text-lg">
                     <li className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle size={14} className="text-[#FFEA00] lg:w-5 lg:h-5" /> Sin cuota inicial</li>
                     <li className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle size={14} className="text-[#FFEA00] lg:w-5 lg:h-5" /> 0% Papeleo</li>
                     <li className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle size={14} className="text-[#FFEA00] lg:w-5 lg:h-5" /> Rápido</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center gap-3 md:gap-4 mt-2 lg:mt-0">
                   <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero comprar mi moto a crédito con ADDI`} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-3 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-2xl md:rounded-3xl font-black text-sm md:text-lg lg:text-2xl uppercase tracking-wide transition-all hover:scale-110 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2 lg:gap-3 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                     Solicitar Crédito <ArrowRight size={18} strokeWidth={3} className="animate-pulse lg:w-7 lg:h-7" />
                   </a>
                   <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">* Sujeto a estudio de crédito</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 lg:py-24 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 lg:mb-16 gap-4 md:gap-6 border-b border-white/5 pb-4 md:pb-6 lg:pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 md:mb-3 lg:mb-4 italic tracking-tighter uppercase leading-tight">
              {t('featured_title')} <span className="text-brand-accent">.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg font-medium">{t('featured_subtitle')}</p>
          </div>
          <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:text-white transition-colors bg-brand-primary/10 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full uppercase tracking-wider border border-brand-primary/20 hover:border-brand-primary text-sm lg:text-base">
            Ver Garaje <ArrowRight size={18} />
          </Link>
        </div>
        
        {/* Adjusted Grid for Tablets: md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center md:hidden">
          <Link to="/catalogo" className="inline-block bg-brand-card border border-white/10 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm">
            Ver Todo
          </Link>
        </div>
      </section>

      {/* Additional Products Carousel */}
      <section className="py-12 md:py-16 lg:py-24 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 lg:mb-16 gap-4 md:gap-6 border-b border-white/5 pb-4 md:pb-6 lg:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-primary mb-2 md:mb-3">
              <Package size={16} className="animate-pulse lg:w-5 lg:h-5" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Más Productos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-2 md:mb-3">
              Explora Nuestro <span className="text-brand-primary">Catálogo</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl font-medium">
              Descubre más productos increíbles que no te puedes perder. Motos eléctricas y celulares de última generación.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => {
              const carousel = document.getElementById('additional-products-carousel');
              if (carousel) {
                carousel.scrollBy({ left: -320, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => {
              const carousel = document.getElementById('additional-products-carousel');
              if (carousel) {
                carousel.scrollBy({ left: 320, behavior: 'smooth' });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel Track */}
          <div 
            id="additional-products-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PRODUCTS.filter(p => !p.isFeatured).map(product => (
              <div key={product.id} className="flex-shrink-0 w-72 md:w-80">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <Link to="/catalogo" className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-black px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/20">
            Ver Catálogo Completo
          </Link>
        </div>
      </section>

      {/* AI QUIZ TRIGGER */}
      <section className="bg-gradient-to-r from-brand-secondary/20 via-black to-brand-primary/20 py-10 md:py-14 lg:py-16 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="max-w-[1440px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-brand-primary mb-2 md:mb-3">
                      <Brain size={16} className="animate-pulse lg:w-5 lg:h-5" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Smart Advisor</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-3 md:mb-4">¿No sabes qué moto o celular elegir?</h2>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg font-medium max-w-xl mx-auto md:mx-0">Responde 3 preguntas simples y nuestra IA encontrará la moto o el celular perfecto.</p>
              </div>
              <button 
                onClick={() => setQuizOpen(true)}
                className="group relative bg-white text-black px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-lg lg:text-xl uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] overflow-hidden flex items-center gap-2 lg:gap-3 flex-shrink-0"
              >
                  <span className="relative z-10 flex items-center gap-2">
                     <Sparkles size={18} className="text-brand-primary fill-brand-primary lg:w-6 lg:h-6" /> Encuentra tu Nave
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-white to-brand-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
          </div>
      </section>

      {/* Impact / Why Choose Electric */}
      <section className="py-12 md:py-16 lg:py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] lg:w-[800px] h-[200px] lg:h-[800px] bg-brand-primary/5 rounded-full blur-[80px] lg:blur-[150px] pointer-events-none"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-5 lg:mb-6 uppercase italic tracking-tighter">
              Revolución <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Eléctrica</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium">Más que una moto, es una decisión inteligente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-primary/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Wallet size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                <div className="bg-brand-primary/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-primary mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Wallet size={24} className="lg:w-8 lg:h-8" /></div>
                <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">Ahorro Brutal</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Olvídate de la gasolina. Cargar tu moto cuesta un 90% menos que tanquear.</p>
             </div>
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-secondary/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Leaf size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                <div className="bg-brand-secondary/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-secondary mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Leaf size={24} className="lg:w-8 lg:h-8" /></div>
                <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">0% Emisiones</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Muévete sin dejar huella. Cero humo, cero ruido. Contribuye a una ciudad más limpia.</p>
             </div>
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-accent/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Clock size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                <div className="bg-brand-accent/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-accent mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Clock size={24} className="lg:w-8 lg:h-8" /></div>
                <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">Carga Fácil</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Sin filas en gasolineras. Carga en cualquier toma de 110V como si fuera tu celular.</p>
             </div>
          </div>
          
          <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-12 lg:pt-16">
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">300+</span><span className="text-[10px] md:text-xs text-brand-primary font-bold uppercase tracking-[0.2em]">Motos Vendidas</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">50Ton</span><span className="text-[10px] md:text-xs text-brand-secondary font-bold uppercase tracking-[0.2em]">CO2 Ahorrado</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">100%</span><span className="text-[10px] md:text-xs text-brand-accent font-bold uppercase tracking-[0.2em]">Satisfacción</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">24/7</span><span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Soporte</span></div>
          </div>
        </div>
      </section>

      {/* PHONE REVOLUTION SECTION */}
      <section className="py-12 md:py-16 lg:py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[200px] lg:w-[800px] h-[200px] lg:h-[800px] bg-brand-secondary/5 rounded-full blur-[80px] lg:blur-[150px] pointer-events-none"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-5 lg:mb-6 uppercase italic tracking-tighter">
              Revolución <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">Móvil</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium">Más que un celular, es tu conexión con el futuro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-secondary/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Camera size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                <div className="bg-brand-secondary/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-secondary mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Camera size={24} className="lg:w-8 lg:h-8" /></div>
                <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">Cámaras Pro</h3>
                <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Fotografía profesional en tu bolsillo. Captura momentos como nunca antes.</p>
             </div>
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-accent/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Zap size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                 <div className="bg-brand-accent/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-accent mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Zap size={24} className="lg:w-8 lg:h-8" /></div>
                 <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">Rendimiento Extremo</h3>
                 <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Procesadores de última generación. Juegos, multitarea y productividad sin límites.</p>
             </div>
             <div className="bg-[#111] p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 hover:border-brand-primary/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Shield size={80} className="text-white lg:w-[120px] lg:h-[120px]" /></div>
                 <div className="bg-brand-primary/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-primary mb-4 lg:mb-8 group-hover:scale-110 transition-transform"><Shield size={24} className="lg:w-8 lg:h-8" /></div>
                 <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-4 uppercase italic">Seguridad Total</h3>
                 <p className="text-gray-400 leading-relaxed font-medium text-sm lg:text-lg">Datos protegidos con encriptación militar. Tu privacidad es nuestra prioridad.</p>
             </div>
          </div>
          
          <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-12 lg:pt-16">
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">500+</span><span className="text-[10px] md:text-xs text-brand-secondary font-bold uppercase tracking-[0.2em]">Celulares Vendidos</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">99.9%</span><span className="text-[10px] md:text-xs text-brand-accent font-bold uppercase tracking-[0.2em]">Satisfacción</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">1Año</span><span className="text-[10px] md:text-xs text-brand-primary font-bold uppercase tracking-[0.2em]">Garantía</span></div>
             <div className="text-center"><span className="block text-3xl lg:text-5xl font-black text-white mb-1 lg:mb-2 font-mono">24/7</span><span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Soporte</span></div>
          </div>
        </div>
      </section>

      {/* PHONE SAVINGS CALCULATOR */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/5 to-transparent opacity-20"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-5 lg:mb-6 uppercase italic tracking-normal">
              Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">Billetera</span><br className="md:hidden" /> te lo Agradecerá
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium">Plan tradicional vs DannyCell. Calcula cuánto estás ahorrando.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <PhoneCalculator />
            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <TrendingDown className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Sin Compromisos</h4>
                    <p className="text-gray-400 text-sm">Olvidate de contratos atadores. Cambia cuando quieras.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-secondary/20 p-2 rounded-lg">
                    <Wifi className="text-brand-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Red 5G Ultra Rápida</h4>
                    <p className="text-gray-400 text-sm">La velocidad más rápida en todas nuestras redes. Disfruta streaming sin interrupciones.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/20 p-2 rounded-lg">
                    <Smartphone className="text-brand-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Celular Nuevo</h4>
                    <p className="text-gray-400 text-sm">El último modelo sin pagar de más. Financiamiento sin intereses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#080808] border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-20"></div>
         <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
               <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border border-white/10 mb-3 md:mb-4">
                  <CheckCircle size={12} className="md:w-3.5 md:h-3.5" /> Respaldo Oficial
               </span>
               <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase italic tracking-tighter">Nuestros Proveedores</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
               <div className="group relative h-40 md:h-56 lg:h-64 rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-white group-hover:bg-gray-100 transition-colors"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/20 rounded-2xl lg:rounded-3xl z-20 transition-all"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                     <img src="https://i.postimg.cc/5N1mbQR8/65beb96676825-(1)-(1).jpg" alt="Mobulaa" className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-700" />
                  </div>
               </div>
               <div className="group relative h-40 md:h-56 lg:h-64 rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2">
                   <div className="absolute inset-0 bg-[#3ce56d] transition-colors"></div>
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/20 rounded-2xl lg:rounded-3xl z-20 transition-all"></div>
                   <div className="relative z-10 w-full h-full flex items-center justify-center">
                     <img src="https://i.postimg.cc/BZ2CrBM4/eb709744793397bb28d3b3e911414cd3-(1).jpg" alt="Ofero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
               </div>
            </div>
            <p className="text-center text-gray-500 mt-6 md:mt-8 text-xs md:text-sm font-medium uppercase tracking-wide">Calidad certificada y repuestos garantizados</p>
         </div>
      </section>

      {/* Shipping Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-brand-dark border-y border-white/5 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="md:w-1/2">
              <div className="inline-block bg-brand-accent/10 text-brand-accent font-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-xs mb-4 md:mb-6 border border-brand-accent/20 uppercase tracking-[0.2em]">Logística Especializada</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-5 lg:mb-6 leading-tight">{t('shipping_title')}</h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 font-light">{t('shipping_carriers_text')}</p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="bg-black/40 border border-white/10 px-6 py-3 md:px-6 md:py-4 rounded-xl lg:rounded-2xl font-bold text-gray-300 flex items-center gap-2 md:gap-3 text-xs md:text-base hover:border-brand-primary/50 transition-colors"><Truck size={18} className="text-brand-primary lg:w-6 lg:h-6" /> Carga Pesada</div>
                <div className="bg-black/40 border border-white/10 px-6 py-3 md:px-6 md:py-4 rounded-xl lg:rounded-2xl font-bold text-gray-300 flex items-center gap-2 md:gap-3 text-xs md:text-base hover:border-brand-primary/50 transition-colors"><Truck size={18} className="text-blue-500 lg:w-6 lg:h-6" /> Envíos Nacionales</div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6 text-gray-300 bg-white/5 p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 backdrop-blur-sm">
                <Package size={24} className="text-brand-primary flex-shrink-0 lg:w-8 lg:h-8" />
                <span className="font-bold text-sm lg:text-lg">{t('shipping_packaging')}</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center w-full">
              <div className="relative w-full max-w-lg">
                 <div className="absolute inset-0 bg-brand-accent/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
                 <div className="relative bg-[#111] p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10 w-full backdrop-blur-xl">
                    <ShieldCheck size={48} className="text-brand-accent mb-4 lg:mb-6 lg:w-16 lg:h-16" />
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-2 lg:mb-4 uppercase italic">Garantía DannyCell</h3>
                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">Batería, motor y controlador garantizados. Tu inversión viaja asegurada en guacal de madera certificado hasta la puerta de tu casa.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATOR VS SECTION */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-brand-bg to-[#0f0f0f] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-white/5 text-white font-black px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs mb-3 md:mb-4 border border-white/10 uppercase tracking-[0.2em]">
                    <Calculator size={12} className="md:w-3.5 md:h-3.5" /> Tu Bolsillo te lo Agradecerá
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight">Gasolina <span className="text-red-500">VS</span> Eléctrica</h2>
                <p className="text-gray-400 mt-2 md:mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium">Calcula cuánto dinero estás perdiendo.</p>
            </div>

            <div className="max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16 bg-[#151515] p-6 md:p-8 rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex justify-between items-end mb-4 md:mb-6">
                    <label className="text-gray-400 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2"><MapPin size={16} className="text-brand-primary" /> Recorrido Diario (Ida y Vuelta)</label>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{comparatorKm} <span className="text-sm md:text-base lg:text-lg text-gray-500 font-bold">KM</span></div>
                </div>
                <input type="range" min="10" max="100" step="5" value={comparatorKm} onChange={(e) => setComparatorKm(Number(e.target.value))} className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-primary hover:accent-cyan-300 transition-all" />
                <div className="flex justify-between mt-3 text-[10px] md:text-xs text-gray-600 font-bold uppercase tracking-widest"><span>10 KM (Solo barrio)</span><span>100 KM (Uso intenso)</span></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
                <div className="bg-[#1a0505] rounded-[2rem] lg:rounded-[2.5rem] border border-red-900/30 p-6 md:p-10 lg:p-12 relative overflow-hidden group hover:border-red-600/50 transition-colors">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Fuel size={80} className="text-red-600 lg:w-[120px] lg:h-[120px]" /></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500"><Fuel size={20} className="lg:w-6 lg:h-6" /></div>
                            <h3 className="text-xl lg:text-2xl font-black text-red-100 uppercase italic">Moto Gasolina</h3>
                        </div>
                        <div className="mb-6 lg:mb-8">
                             <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Gasto Mensual Estimado</p>
                             <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white/90">{formatCurrency(monthlyGas)}</div>
                             <p className="text-red-400/60 text-[10px] md:text-xs mt-2">*Incluye gasolina + aceite + mtto</p>
                        </div>
                        <ul className="space-y-3 lg:space-y-4 text-xs md:text-sm lg:text-base">
                            <li className="flex items-center gap-2 lg:gap-3 text-gray-400"><XCircle size={16} className="text-red-500 flex-shrink-0 lg:w-5 lg:h-5" /> Gasto en gasolina y aceite</li>
                            <li className="flex items-center gap-2 lg:gap-3 text-gray-400"><XCircle size={16} className="text-red-500 flex-shrink-0 lg:w-5 lg:h-5" /> Mantenimiento frecuente</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#051a1a] rounded-[2rem] lg:rounded-[2.5rem] border border-brand-primary/30 p-6 md:p-10 lg:p-12 relative overflow-hidden group hover:border-brand-primary/60 transition-colors shadow-neon-blue">
                     <div className="absolute top-0 right-0 p-8 opacity-10"><Zap size={80} className="text-brand-primary lg:w-[120px] lg:h-[120px]" /></div>
                    <div className="relative z-10">
                         <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-brand-primary text-black font-black px-2 py-0.5 md:px-3 md:py-1 rounded text-[10px] md:text-xs uppercase tracking-widest animate-pulse-slow">Mejor Opción</div>
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary"><Zap size={20} className="lg:w-6 lg:h-6" /></div>
                            <h3 className="text-xl lg:text-2xl font-black text-brand-primary uppercase italic">Moto DannyCell</h3>
                        </div>
                        <div className="mb-6 lg:mb-8">
                             <p className="text-brand-primary/70 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Gasto Mensual Estimado</p>
                             <div className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary">{formatCurrency(monthlyElectric)}</div>
                             <p className="text-brand-primary/50 text-[10px] md:text-xs mt-2">*Costo de energía en estrato 4</p>
                        </div>
                        <ul className="space-y-3 lg:space-y-4 text-xs md:text-sm lg:text-base">
                            <li className="flex items-center gap-2 lg:gap-3 text-white font-medium"><CheckCircle size={16} className="text-brand-primary flex-shrink-0 lg:w-5 lg:h-5" /> <span className="text-brand-primary">Ahorras un 90% en "combustible"</span></li>
                            <li className="flex items-center gap-2 lg:gap-3 text-gray-300"><CheckCircle size={16} className="text-brand-primary flex-shrink-0 lg:w-5 lg:h-5" /> Mantenimiento casi nulo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-12 bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
                <div className="relative z-10">
                     <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 text-green-400"><TrendingDown size={24} className="lg:w-8 lg:h-8" /><span className="text-lg md:text-xl font-black uppercase italic tracking-wide">Tu Ahorro Proyectado</span></div>
                     <p className="text-gray-400 text-xs md:text-sm mb-4 lg:mb-6 max-w-lg mx-auto">Dinero que dejas de gastar en gasolina y aceite en 3 años.</p>
                     <div className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-lg">{formatCurrency(threeYearSavings)}</div>
                     <div className="mt-6 lg:mt-8">
                         <Link to="/catalogo" className="inline-block bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-8 py-3 lg:px-10 lg:py-4 rounded-xl shadow-lg transition-transform hover:scale-105 uppercase tracking-wide text-sm md:text-base lg:text-lg">Empezar a Ahorrar Hoy</Link>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-24 bg-brand-bg border-y border-white/5">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Territorio */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none"></div>
         <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-10 md:mb-12 lg:mb-16">
               <div className="inline-flex items-center gap-2 text-brand-primary mb-2 lg:mb-4">
                  <MapPin size={20} className="animate-bounce lg:w-6 lg:h-6" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Cobertura Nacional</span>
               </div>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter mb-2 lg:mb-4">Territorio DannyCell</h2>
               <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-medium max-w-2xl">Desde el corazón del Atlántico para toda Colombia.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
               <div className="bg-brand-card rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-8 lg:p-10 border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 space-y-6 lg:space-y-8">
                     <div><h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-1 lg:mb-2">Cuartel General</h3><p className="text-brand-primary font-mono text-xs md:text-sm uppercase tracking-wider">Sabanalarga, Atlántico</p></div>
                     <div className="space-y-4 lg:space-y-6">
                        <div className="flex items-start gap-3 lg:gap-4"><div className="p-2 lg:p-3 bg-white/5 rounded-xl border border-white/10"><MapPin size={20} className="text-brand-accent lg:w-6 lg:h-6" /></div><div><span className="block text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Dirección</span><p className="text-white font-bold text-sm md:text-lg leading-tight">Cl 19 # 17 - 63</p><p className="text-gray-400 text-xs md:text-sm">Barrio Centro</p></div></div>
                        <div className="flex items-start gap-3 lg:gap-4"><div className="p-2 lg:p-3 bg-white/5 rounded-xl border border-white/10"><Clock size={20} className="text-brand-primary lg:w-6 lg:h-6" /></div><div><span className="block text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Horario Showroom</span><p className="text-white font-bold text-sm md:text-lg">Lunes - Sábado</p><p className="text-gray-400 text-xs md:text-sm">8:00 AM - 6:00 PM</p></div></div>
                     </div>
                  </div>
                  <div className="mt-6 lg:mt-10 relative z-10">
                     <a href="https://www.google.com/maps/search/?api=1&query=Cl+19+%23+17+-63,+Sabanalarga,+Atlántico" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 lg:gap-3 bg-white hover:bg-brand-primary hover:text-black text-black font-black py-3 px-6 lg:py-4 lg:px-8 rounded-xl transition-all uppercase tracking-wide group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm md:text-base">
                        <Navigation size={18} className="lg:w-5 lg:h-5" /> Cómo llegar
                     </a>
                  </div>
               </div>
               <div className="h-[250px] md:h-[350px] lg:h-auto rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl group">
                  <iframe src="https://maps.google.com/maps?q=Cl+19+%23+17+-63,+Sabanalarga,+Atlántico&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%) hue-rotate(180deg)' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></iframe>
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                     <div className="bg-black/80 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-full border border-white/10 text-white text-[10px] md:text-sm font-bold uppercase tracking-widest flex items-center gap-2 lg:gap-3 animate-pulse"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-brand-accent rounded-full animate-ping"></span> Sede Principal</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#050505] relative border-t border-white/5">
         <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
               <div className="inline-flex items-center gap-2 text-brand-primary mb-3 md:mb-4 opacity-70"><HelpCircle size={16} className="lg:w-5 lg:h-5" /><span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Centro de Ayuda</span></div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter">Preguntas Frecuentes</h2>
               <p className="text-gray-400 mt-2 md:mt-4 text-sm md:text-base lg:text-lg font-medium">Todo lo que necesitas saber.</p>
            </div>
            <div className="bg-brand-card/50 rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-10 lg:p-12 border border-white/5 backdrop-blur-sm shadow-2xl">
               <div className="space-y-1 lg:space-y-2">
                  {faqs.map((faq, idx) => (<FAQItem key={idx} question={faq.q} answer={faq.a} />))}
               </div>
            </div>
         </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-4 lg:mb-6 uppercase italic">¿Buscas una moto personalizada?</h2>
          <p className="text-gray-400 mb-8 lg:mb-12 text-sm md:text-lg lg:text-xl font-medium max-w-2xl mx-auto">Podemos personalizar el color, la batería y los accesorios de tu próxima moto eléctrica.</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 lg:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-black text-sm md:text-lg lg:text-xl transition-all shadow-glow hover:scale-105 uppercase tracking-wider">Hablar con un Asesor</a>
        </div>
      </section>
    </div>
  );
};

export default Home;