import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Truck, ChevronDown, ChevronUp, ShieldCheck, Zap, PiggyBank, TrendingUp, Palette, ChevronLeft, ChevronRight, Moon, Briefcase, Plug } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { useStore } from '../context/StoreContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart, t, language } = useStore();
  
  // Estados para acordeones
  const [showDesc, setShowDesc] = useState(true);
  const [showSpecs, setShowSpecs] = useState(true);
  
  // Estados Simulador de Ahorro
  const [dailyKm, setDailyKm] = useState(30);

  // Estado Configurador de Color (Inicializado con el primer color disponible)
  const [selectedColor, setSelectedColor] = useState(product?.availableColors?.[0] || 'Negro');
  
  // Estado Carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estado Zoom
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (product && product.availableColors) {
        setSelectedColor(product.availableColors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-brand-bg text-white">
        <h2 className="text-3xl font-black mb-4 uppercase">Modelo no encontrado</h2>
        <Link to="/catalogo" className="text-brand-primary hover:text-brand-accent underline font-bold text-lg">
          {t('back_catalog')}
        </Link>
      </div>
    );
  }

  // Helper para asignar clases de color a los botones
  const getColorClass = (colorName: string) => {
    const name = colorName.toLowerCase();
    if (name.includes('negro') || name.includes('mate')) return 'bg-zinc-900 border-gray-600';
    if (name.includes('blanco') || name.includes('perla') || name.includes('crema')) return 'bg-gray-100 border-white';
    if (name.includes('rojo') || name.includes('llama')) return 'bg-red-600 border-red-400';
    if (name.includes('azul')) return 'bg-blue-600 border-blue-400';
    if (name.includes('verde') || name.includes('menta')) return 'bg-emerald-400 border-emerald-300';
    if (name.includes('rosado') || name.includes('pastel')) return 'bg-pink-400 border-pink-300';
    if (name.includes('amarillo')) return 'bg-yellow-400 border-yellow-300';
    if (name.includes('naranja') || name.includes('durazno') || name.includes('energético')) return 'bg-orange-400 border-orange-300';
    if (name.includes('gris') || name.includes('plateado') || name.includes('titanio')) return 'bg-gray-400 border-gray-300';
    return 'bg-brand-primary border-white'; // Default
  };

  // Helper para escala base de la imagen
  const getBaseScale = () => {
    // Grupo XL: Referencia
    if (product?.id === 'nmotor-sport' || product?.id === 'picassio-retro') return 1.0;

    // Grupo S: Stareers
    if (product?.id === 'stareer-3') return 1.70;
    if (product?.id === 'stareer-2') return 1.60;
    
    // Ledos (Ajuste específico)
    if (product?.id === 'ledo-3') return 1.45; // Bajado
    if (product?.id === 'ledo-2') return 1.60;
    
    // Grupo M: Bicis (Ajuste específico)
    if (product?.id === 'magical-3') return 1.25; // Bajado
    if (product?.id === 'galaxy-3') return 1.20; // Bajado
    
    // Grupo L: Patinetas
    if (product?.id === 'a6l-kick') return 1.1;
    if (product?.id === 'flex-f3') return 1.2;
    if (product?.id === 'trailx-t3') return 1.25;
    
    return 1.1; // Default
  };

  // Lógica de Precios
  const totalPrice = product.price;
  const fakeOldPrice = Math.round(totalPrice * 1.15); 
  const savings = fakeOldPrice - totalPrice;

  const name = language === 'en' && product.name_en ? product.name_en : product.name;
  const description = language === 'en' && product.description_en ? product.description_en : product.description;
  const specs = language === 'en' && product.specs_en ? product.specs_en : product.specs;
  const components = language === 'en' && product.components_en ? product.components_en : product.components;

  // Lógica Carousel
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
  
  // Precargar imágenes de forma optimizada para evitar cache excesivo
  React.useEffect(() => {
    // Solo precargar las primeras 3 imágenes para carga inicial rápida
    const imagesToPreload = gallery.slice(0, 3);
    
    // Precargar imagen de representación si existe
    if ((product as any).starterImage) {
      imagesToPreload.push((product as any).starterImage);
    }
    
    // Precargar con retraso para no sobrecargar
    const preloadImages = () => {
      imagesToPreload.forEach((imageUrl, index) => {
        setTimeout(() => {
          const img = new Image();
          img.src = imageUrl;
        }, index * 100); // 100ms entre cada imagen
      });
    };
    
    // Ejecutar después de que la página esté completamente cargada
    if (document.readyState === 'complete') {
      preloadImages();
    } else {
      window.addEventListener('load', preloadImages);
      return () => window.removeEventListener('load', preloadImages);
    }
  }, [gallery.length, (product as any).starterImage]); // Dependencias más específicas
  
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };


  const formatPrice = (price: number) => new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  // Lógica Simulador de Ahorro
  const calculateSavings = () => {
    // Costo promedio por km gasolina (gasolina + aceite + mtto): ~150 COP
    // Costo promedio por km eléctrico (energía): ~15 COP
    const gasCost = 150;
    const electricCost = 15;
    const dailySaving = dailyKm * (gasCost - electricCost);
    const yearlySaving = dailySaving * 30 * 12; // 360 días aprox
    return formatPrice(yearlySaving);
  };

  // --- CÁLCULO DINÁMICO DE MÉTRICAS ---
  const extractNumber = (str: string): number => {
    if (!str) return 0;
    // Extrae todos los números y toma el mayor (ej: "100 - 110 km/h" -> 110)
    const matches = str.match(/(\d+)/g);
    if (!matches) return 0;
    return Math.max(...matches.map(Number));
  };

  const speedVal = extractNumber((specs as any).maxSpeed);
  const rangeVal = extractNumber((specs as any).autonomy);
  const powerVal = extractNumber((specs as any).motor);

  // Referencias base para el 100% (Basado en el tope de gama NMOTOR)
  const REF_SPEED = 120; // km/h
  const REF_RANGE = 120; // km
  const REF_POWER = 6000; // Watts (Nominal alto para no aplastar visualmente a las pequeñas)

  const speedPct = Math.min(Math.round((speedVal / REF_SPEED) * 100), 100);
  const rangePct = Math.min(Math.round((rangeVal / REF_RANGE) * 100), 100);
  const powerPct = Math.min(Math.round((powerVal / REF_POWER) * 100), 100);

  // Asegurar un mínimo visual para barras muy pequeñas (ej: patinetas)
  const minBar = 5; 
  const displaySpeedPct = Math.max(speedPct, minBar);
  const displayRangePct = Math.max(rangePct, minBar);
  const displayPowerPct = Math.max(powerPct, minBar);


  const handleAddToCart = () => {
    const productWithColor = { ...product, selectedColor };
    addToCart(productWithColor);
  };

  const handleAddiCheckout = () => {
    // Crear mensaje para WhatsApp con información de ADDI
    const addiMessage = encodeURIComponent(
      `¡Hola! Estoy interesado en comprar el producto ${name} con ADDI a cuotas.\n\n` +
      `💳 *Producto:* ${name}\n` +
      `💰 *Precio:* ${formatPrice(totalPrice)}\n` +
      `📦 *Referencia:* ${product.id}\n\n` +
      `Me gustaría información sobre las cuotas disponibles con ADDI y cómo proceder con la compra.`
    );
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${addiMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const whatsappMessage = encodeURIComponent(`Hola DannyCell Power, me interesa la moto "${name}" en color *${selectedColor}*. Precio: ${formatPrice(totalPrice)}.`);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen py-8 bg-brand-bg text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link to="/catalogo" className="inline-flex items-center text-gray-400 hover:text-brand-primary mb-6 transition-colors font-bold uppercase tracking-wide text-xs md:text-sm">
          <ArrowLeft size={16} className="mr-2" /> {t('back_catalog')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
            
            {/* LEFT COLUMN: Images & Simulator */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* CAROUSEL - Compact on mobile */}
              <div className="flex flex-col gap-4">
                  <div 
                    className="bg-brand-card rounded-3xl overflow-hidden border border-white/5 relative h-[300px] md:h-[600px] flex items-center justify-center p-4 md:p-8 group shadow-2xl transition-all duration-500 select-none cursor-crosshair"
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                    onMouseMove={handleMouseMove}
                  >
                    
                    {/* Background Glow - Static Neutral */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

                    {/* Main Image - ORIGINAL WITHOUT FILTER */}
                    <img 
                        key={currentImageIndex}
                        src={gallery[currentImageIndex]} 
                        alt={`${name} view ${currentImageIndex + 1}`} 
                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)] animate-in fade-in duration-300"
                        loading="lazy"
                        fetchPriority="auto"
                        decoding="async"
                        style={{
                            transform: isZoomed ? 'scale(1.5)' : `scale(${getBaseScale()})`,
                            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                            transition: 'transform 0.25s ease-out'
                        }}
                    />
                    
                    {/* Navigation Arrows */}
                    {gallery.length > 1 && (
                        <>
                            <button 
                                onClick={prevImage}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-brand-primary hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10 transition-all md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronLeft size={20} className="md:w-6 md:h-6" />
                            </button>
                            <button 
                                onClick={nextImage}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-brand-primary hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10 transition-all md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronRight size={20} className="md:w-6 md:h-6" />
                            </button>
                        </>
                    )}

                    {product.isFeatured && (
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-brand-accent text-white font-black px-3 py-1 md:px-4 md:py-2 rounded shadow-lg text-[10px] md:text-xs uppercase tracking-widest z-20">
                        Destacado
                        </div>
                    )}
                    
                    {/* Etiqueta flotante del color seleccionado */}
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black/60 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 flex items-center gap-2 z-20 animate-in fade-in slide-in-from-bottom-2 pointer-events-none shadow-xl">
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${getColorClass(selectedColor).split(' ')[0]} shadow-[0_0_10px_currentColor]`}></div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{selectedColor}</span>
                    </div>
                  </div>

                  {/* Thumbnails Row */}
                  {gallery.length > 1 && (
                      <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 custom-scrollbar px-1">
                          {gallery.map((img, idx) => (
                              <button 
                                  key={idx} 
                                  onClick={() => setCurrentImageIndex(idx)}
                                  className={`relative w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 group ${idx === currentImageIndex ? 'border-brand-primary ring-2 ring-brand-primary/30 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                              >
                                  <img 
                                    src={img} 
                                    alt={`Thumbnail ${idx}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                    fetchPriority={idx === 0 ? "high" : "low"}
                                    decoding="async"
                                  />
                              </button>
                          ))}
                      </div>
                  )}
              </div>
              
              {/* Extra Info Badges - Compact Grid */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="bg-brand-card p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/5 flex flex-col items-center text-center gap-1 md:gap-2">
                   <ShieldCheck className="text-brand-primary w-5 h-5 md:w-6 md:h-6" />
                   <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase">Garantía Directa</span>
                </div>
                <div className="bg-brand-card p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/5 flex flex-col items-center text-center gap-1 md:gap-2">
                   <Zap className="text-brand-primary w-5 h-5 md:w-6 md:h-6" />
                   <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase">100% Eléctrica</span>
                </div>
                <div className="bg-brand-card p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/5 flex flex-col items-center text-center gap-1 md:gap-2">
                   <Truck className="text-brand-primary w-5 h-5 md:w-6 md:h-6" />
                   <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase">Envío Nacional</span>
                </div>
              </div>

               {/* SAVINGS SIMULATOR - Compact */}
               <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden group hover:border-green-500/30 transition-colors">
                   <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-green-600/10 rounded-full blur-3xl pointer-events-none"></div>
                   
                   <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 relative z-10">
                      <div className="p-1.5 md:p-2 bg-green-600 rounded-lg text-white"><PiggyBank size={18} className="md:w-5 md:h-5" /></div>
                      <h3 className="text-lg md:text-xl font-black uppercase italic">Simula tu Ahorro vs Gasolina</h3>
                   </div>

                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-4">
                         <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                           Recorrido Diario Estimado
                         </label>
                         <span className="text-white font-bold text-sm md:text-lg bg-white/10 px-2 py-0.5 md:px-3 md:py-1 rounded-lg">{dailyKm} km</span>
                      </div>
                      
                      <input 
                         type="range" 
                         min="5" 
                         max="100" 
                         step="5"
                         value={dailyKm} 
                         onChange={(e) => setDailyKm(Number(e.target.value))}
                         className="w-full h-1.5 md:h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 mb-6 md:mb-8 hover:accent-green-400 transition-all"
                      />
                      
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-4 md:pt-6 gap-3 md:gap-4 text-center md:text-left">
                         <div>
                            <p className="text-gray-300 text-xs md:text-sm font-bold mb-1 uppercase tracking-wide">Ahorro Anual Proyectado</p>
                            <p className="text-[9px] md:text-[10px] text-gray-500 font-medium">*Comparado con moto de combustión promedio</p>
                         </div>
                         <div className="text-right">
                             <span className="text-3xl md:text-5xl font-black text-green-400 tracking-tighter drop-shadow-sm animate-pulse-slow block">
                                {calculateSavings()}
                             </span>
                         </div>
                      </div>
                   </div>
               </div>
            </div>

            {/* RIGHT COLUMN: Details */}
            <div className="lg:col-span-5 flex flex-col h-full">
              
              <div className="mb-4 md:mb-6">
                <h1 className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 leading-tight uppercase italic tracking-tight">{name}</h1>
                <p className="text-gray-500 text-xs md:text-sm font-mono uppercase tracking-widest">REF: {product.id.toUpperCase()}</p>
              </div>

              {/* COLOR SELECTION - SIMPLE */}
              <div className="mb-6 md:mb-8 bg-white/5 border border-white/5 rounded-2xl p-4 md:p-6 relative overflow-hidden">
                  
                  <div className="flex items-center justify-between mb-3 md:mb-4 relative z-10">
                     <label className="text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-[0.2em] flex items-center gap-2">
                        <Palette size={12} className="md:w-3.5 md:h-3.5" /> Personalización
                     </label>
                  </div>
                  
                  <div className="mb-2 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest relative z-10">
                     Color Seleccionado: <span className="text-white">{selectedColor}</span>
                  </div>

                  <div className="flex gap-3 md:gap-4 flex-wrap relative z-10">
                     {product.availableColors && product.availableColors.length > 0 ? (
                         product.availableColors.map((color) => (
                            <button
                               key={color}
                               onClick={() => setSelectedColor(color)}
                               className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${getColorClass(color)} border relative transition-all duration-300 hover:scale-110 shadow-lg group
                                  ${selectedColor === color 
                                     ? `border-white ring-2 ring-brand-primary ring-offset-2 md:ring-offset-4 ring-offset-[#1a1a1a] scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]` 
                                     : 'opacity-80 hover:opacity-100 border-white/20'
                                  }
                               `}
                               title={color}
                               aria-label={`Seleccionar color ${color}`}
                            >
                               {selectedColor === color && (
                                  <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-200">
                                     <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shadow-sm ${color.toLowerCase().includes('blanco') ? 'bg-black' : 'bg-white'}`}></div>
                                  </div>
                               )}
                            </button>
                         ))
                     ) : (
                         <div className="text-gray-500 text-xs">Consultar disponibilidad.</div>
                     )}
                  </div>
              </div>

              {/* Price Block */}
              <div className="mb-6 md:mb-8 p-6 md:p-8 bg-gradient-to-br from-brand-card to-[#000] rounded-2xl md:rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-end gap-2 md:gap-3 mb-2">
                    <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm mb-4">
                    <span className="text-gray-500 line-through font-bold text-base md:text-xl">{formatPrice(fakeOldPrice)}</span>
                    <span className="bg-green-500/10 text-green-400 px-2 py-0.5 md:py-1 rounded font-bold uppercase tracking-wide text-[10px] md:text-xs border border-green-500/20">Ahorras {formatPrice(savings)}</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium">*Precio incluye IVA. Envío se cotiza según destino.</p>
                </div>
              </div>

              {/* Performance Stats Bars */}
              <div className="mb-6 md:mb-8 bg-white/5 rounded-2xl p-4 md:p-6 border border-white/5">
                 <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <TrendingUp size={12} className="md:w-3.5 md:h-3.5" /> Métricas de Rendimiento
                 </h4>
                 <div className="space-y-3 md:space-y-4">
                    {/* Velocidad */}
                    <div>
                       <div className="flex justify-between text-[9px] md:text-[10px] font-bold uppercase text-gray-300 mb-1">
                          <span>Velocidad</span>
                          <span className="text-brand-primary">{speedVal} KM/H ({displaySpeedPct}%)</span>
                       </div>
                       <div className="h-1.5 bg-black rounded-full overflow-hidden">
                          <div 
                              className="h-full bg-brand-primary shadow-[0_0_10px_rgba(0,242,234,0.5)] transition-all duration-1000"
                              style={{ width: `${displaySpeedPct}%` }}
                          ></div>
                       </div>
                    </div>
                    {/* Autonomía */}
                    <div>
                       <div className="flex justify-between text-[9px] md:text-[10px] font-bold uppercase text-gray-300 mb-1">
                          <span>Autonomía</span>
                          <span className="text-brand-secondary">{rangeVal} KM ({displayRangePct}%)</span>
                       </div>
                       <div className="h-1.5 bg-black rounded-full overflow-hidden">
                          <div 
                              className="h-full bg-brand-secondary shadow-[0_0_10px_rgba(112,0,255,0.5)] transition-all duration-1000"
                              style={{ width: `${displayRangePct}%` }}
                          ></div>
                       </div>
                    </div>
                    {/* Potencia */}
                    <div>
                       <div className="flex justify-between text-[9px] md:text-[10px] font-bold uppercase text-gray-300 mb-1">
                          <span>Potencia</span>
                          <span className="text-brand-accent">{powerVal}W ({displayPowerPct}%)</span>
                       </div>
                       <div className="h-1.5 bg-black rounded-full overflow-hidden">
                          <div 
                              className="h-full bg-brand-accent shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all duration-1000"
                              style={{ width: `${displayPowerPct}%` }}
                          ></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* CHARGING SPEED WIDGET */}
              <div className="mb-6 md:mb-8 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-4 md:p-6 border border-white/10 relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
                  <div className="absolute -right-6 -bottom-6 text-brand-primary/5 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                      <Zap size={100} className="md:w-[140px] md:h-[140px]" />
                  </div>

                  <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2 relative z-10">
                      <Zap size={12} className="text-yellow-400 md:w-3.5 md:h-3.5" /> Tiempo de Carga
                  </h4>

                  <div className="relative z-10">
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-2xl md:text-3xl font-black text-white">{(specs as any).chargingTime}</span>
                        <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-1.5">0% a 100%</span>
                      </div>

                      <div className="w-full h-3 md:h-4 bg-gray-800 rounded-full mb-4 md:mb-6 overflow-hidden relative border border-white/5">
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-green-500 w-full rounded-full animate-pulse origin-left shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <Zap size={8} className="text-black fill-black animate-bounce md:w-2.5 md:h-2.5" />
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/5 p-2 md:p-3 rounded-xl border border-white/5 flex flex-col items-center text-center gap-1 md:gap-2 hover:bg-white/10 transition-colors group/item">
                              <Moon size={16} className="text-blue-400 group-hover/item:scale-110 transition-transform md:w-5 md:h-5" />
                              <div>
                                  <span className="block text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-wider">Mientras</span>
                                  <span className="block text-[10px] md:text-xs font-bold text-white">Duermes</span>
                              </div>
                          </div>
                          <div className="bg-white/5 p-2 md:p-3 rounded-xl border border-white/5 flex flex-col items-center text-center gap-1 md:gap-2 hover:bg-white/10 transition-colors group/item">
                              <Briefcase size={16} className="text-orange-400 group-hover/item:scale-110 transition-transform md:w-5 md:h-5" />
                              <div>
                                  <span className="block text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-wider">Jornada</span>
                                  <span className="block text-[10px] md:text-xs font-bold text-white">Laboral</span>
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-3 md:mt-4 flex items-center gap-2 text-[9px] md:text-[10px] text-gray-500 font-medium justify-center bg-black/20 py-1.5 md:py-2 rounded-lg border border-white/5">
                        <Plug size={10} className="text-gray-400 md:w-3 md:h-3" /> Compatible con enchufe 110V casero
                      </div>
                  </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 transition-all uppercase tracking-wide text-sm md:text-lg shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" /> Comprar por WhatsApp
                </a>
                
                <button
                  onClick={handleAddiCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black py-2 md:py-3 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 transition-all uppercase tracking-wide text-sm md:text-lg shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  <img 
                    src="/addi-logo.png" 
                    alt="ADDI" 
                    className="w-10 h-10 md:w-14 md:h-14 object-contain bg-transparent self-center flex-shrink-0"
                  />
                  Comprar con ADDI a cuotas
                </button>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-brand-card hover:bg-white/10 border-2 border-white/10 text-white font-bold py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 transition-all uppercase tracking-wide text-xs md:text-sm hover:border-white/30"
                >
                  {t('add_to_cart')}
                </button>
              </div>

              {/* Accordions */}
              <div className="space-y-3 md:space-y-4 flex-grow">
                <div className="border border-white/10 rounded-xl md:rounded-2xl overflow-hidden bg-brand-card/30">
                  <button 
                    onClick={() => setShowDesc(!showDesc)}
                    className="w-full flex justify-between items-center p-3 md:p-4 text-left font-bold uppercase tracking-wider hover:bg-white/5 transition-colors text-xs md:text-base"
                  >
                    <span><span className="text-brand-primary mr-1">01.</span> Resumen General</span>
                    {showDesc ? <ChevronUp size={16} className="text-gray-500 md:w-5 md:h-5" /> : <ChevronDown size={16} className="text-gray-500 md:w-5 md:h-5" />}
                  </button>
                  {showDesc && (
                    <div className="px-3 pb-4 md:px-4 md:pb-6 text-gray-300 leading-relaxed text-xs md:text-sm animate-in fade-in slide-in-from-top-1 duration-200 border-t border-white/5 pt-3 md:pt-4">
                      {description}
                      <div className="mt-3 md:mt-4 grid grid-cols-2 gap-3 md:gap-4">
                         <div>
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase font-bold block mb-1">Frenos</span>
                            <span className="text-white font-medium">{(components as any).brakes}</span>
                         </div>
                         <div>
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase font-bold block mb-1">Llantas</span>
                            <span className="text-white font-medium">{(components as any).tires}</span>
                         </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-white/10 rounded-xl md:rounded-2xl overflow-hidden bg-brand-card/30">
                  <button 
                    onClick={() => setShowSpecs(!showSpecs)}
                    className="w-full flex justify-between items-center p-3 md:p-4 text-left font-bold uppercase tracking-wider hover:bg-white/5 transition-colors text-xs md:text-base"
                  >
                     <span><span className="text-brand-primary mr-1">02.</span> Ficha Técnica</span>
                    {showSpecs ? <ChevronUp size={16} className="text-gray-500 md:w-5 md:h-5" /> : <ChevronDown size={16} className="text-gray-500 md:w-5 md:h-5" />}
                  </button>
                  {showSpecs && (
                    <div className="px-3 pb-4 md:px-4 md:pb-6 text-gray-300 text-xs md:text-sm animate-in fade-in slide-in-from-top-1 duration-200 border-t border-white/5 pt-3 md:pt-4">
                      <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-3 md:gap-x-4">
                        <div>
                          <span className="block text-brand-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Motor</span>
                          <span className="text-sm md:text-base font-bold text-white">{(specs as any).motor}</span>
                        </div>
                        <div>
                          <span className="block text-brand-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Autonomía</span>
                          <span className="text-sm md:text-base font-bold text-white">{(specs as any).autonomy}</span>
                        </div>
                        <div>
                          <span className="block text-brand-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Batería</span>
                          <span className="text-sm md:text-base font-bold text-white">{specs.battery}</span>
                        </div>
                        <div>
                          <span className="block text-brand-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Velocidad</span>
                          <span className="text-sm md:text-base font-bold text-white">{(specs as any).maxSpeed}</span>
                        </div>
                        <div>
                          <span className="block text-brand-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Carga</span>
                          <span className="text-sm md:text-base font-bold text-white">{(specs as any).chargingTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
