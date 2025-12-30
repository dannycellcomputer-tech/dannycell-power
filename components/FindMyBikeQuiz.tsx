import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Zap, Target, Mountain, DollarSign, Brain, RefreshCw, CheckCircle, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const FindMyBikeQuiz: React.FC = () => {
  const { isQuizOpen, setQuizOpen } = useStore();
  
  // Estados del Quiz
  const [step, setStep] = useState(0); // 0 = Intro, 1-4 = Preguntas, 5 = Cargando, 6 = Resultado
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);
  const [matchScore, setMatchScore] = useState(0);

  // Reiniciar cuando se abre
  useEffect(() => {
    if (isQuizOpen && step === 6) {
        // Mantener resultado si ya se hizo
    }
  }, [isQuizOpen]);

  const resetQuiz = () => {
      setStep(0);
      setAnswers({});
      setRecommendedProduct(null);
  };

  if (!isQuizOpen) return null;

  // --- CONFIGURACIÓN DE PREGUNTAS ---
  const questions = [
      {
          id: 'usage',
          title: '¿Cuál es tu misión principal?',
          icon: <Target size={32} className="text-brand-primary" />,
          options: [
              { label: 'Transporte Diario / Oficina', value: 'commute', desc: 'Ir y volver al trabajo/universidad.' },
              { label: 'Trabajo Pesado / Domicilios', value: 'work', desc: 'Uso intensivo, necesito fiabilidad.' },
              { label: 'Paseo / Diversión / "Last Mile"', value: 'fun', desc: 'Trayectos cortos, barrio y diversión.' }
          ]
      },
      {
          id: 'terrain',
          title: '¿Cómo es el terreno de tu ciudad?',
          icon: <Mountain size={32} className="text-brand-secondary" />,
          options: [
              { label: 'Mayormente Plano', value: 'flat', desc: 'Calles normales, ciclorrutas.' },
              { label: 'Lomas y Subidas Fuertes', value: 'hilly', desc: 'Necesito potencia para subir montañas.' },
              { label: 'Destapado / Mixto', value: 'offroad', desc: 'Terrenos irregulares o parques.' }
          ]
      },
      {
          id: 'budget',
          title: '¿Cuál es tu rango de presupuesto?',
          icon: <DollarSign size={32} className="text-brand-accent" />,
          options: [
              { label: 'Económico (Iniciación)', value: 'low', desc: 'Menos de $3.000.000' },
              { label: 'Balanceado (Calidad/Precio)', value: 'mid', desc: 'Entre $3M y $7M' },
              { label: 'Premium (Tope de Gama)', value: 'high', desc: 'Más de $7.000.000' }
          ]
      }
  ];

  // --- LÓGICA DE RECOMENDACIÓN MEJORADA ---
  const processResults = () => {
      setStep(4); // Mostrar Loading

      setTimeout(() => {
          // Inicializar puntuaciones
          let scores = PRODUCTS.map(p => ({ id: p.id, score: 0, product: p }));

          const budget = answers['budget'];
          const terrain = answers['terrain'];
          const usage = answers['usage'];

          // Helper para sacar watts
          const getWatts = (specs: string) => {
             const match = specs.match(/(\d+)W/);
             return match ? parseInt(match[1]) : 0;
          };

          scores.forEach(s => {
              const price = s.product.price;
              const watts = getWatts(s.product.specs.motor);

              // 1. FILTRO DE PRESUPUESTO (EL MÁS IMPORTANTE)
              if (budget === 'low') { // < 3M
                  if (price <= 3000000) s.score += 150; // Gran impulso a las baratas
                  else if (price <= 4500000) s.score -= 50; // Penalizar medias
                  else s.score -= 500; // Matar las caras (NMOTOR/Picassio fuera)
              } 
              else if (budget === 'mid') { // 3M - 7M
                  if (price > 2500000 && price <= 7500000) s.score += 100;
                  else if (price <= 2500000) s.score += 20; // Las baratas sirven pero no son el foco
                  else s.score -= 100; // Las muy caras fuera
              } 
              else if (budget === 'high') { // > 7M
                  if (price > 7000000) s.score += 150; // Boost NMOTOR/Picassio
                  else if (price > 4000000) s.score += 50;
                  else s.score -= 50; // Penalizar gamas bajas
              }

              // 2. FILTRO DE TERRENO
              if (terrain === 'flat') {
                  // En plano, cualquiera sirve, pero premiamos la eficiencia/movilidad
                  if (watts <= 1200) s.score += 30;
              }
              else if (terrain === 'hilly') {
                  // Lomas necesitan torque
                  if (watts >= 1500) s.score += 100; // NMOTOR/Picassio
                  else if (watts >= 800) s.score += 60; // Stareer
                  else s.score -= 100; // Scooters/Bicis sufren en loma
              }
              else if (terrain === 'offroad') {
                  // TrailX es la reina aquí
                  if (s.id.includes('trailx')) s.score += 200; 
                  else if (s.product.components.tires.includes('10"')) s.score += 30; // Llantas más grandes
                  else s.score -= 20; // Llantas pequeñas mal
              }

              // 3. FILTRO DE USO
              if (usage === 'commute') { // Oficina/Universidad
                  // Buscamos equilibrio (Stareer, Magical, Galaxy)
                  if (s.id.includes('stareer') || s.id.includes('magical') || s.id.includes('galaxy')) s.score += 50;
                  if (s.id.includes('picassio')) s.score += 40; // Estilo para oficina
              }
              else if (usage === 'work') { // Domicilios/Carga
                  // Prioridad: Autonomía y Resistencia
                  if (s.id.includes('stareer')) s.score += 80; // La Stareer es la de trabajo por excelencia
                  if (s.id.includes('nmotor')) s.score += 60; // Mucha autonomía
                  if (s.id.includes('kick') || s.id.includes('flex')) s.score -= 100; // Patinetas no sirven para esto
              }
              else if (usage === 'fun') { // Paseo/Last Mile
                  // Prioridad: Portabilidad y Precio
                  if (s.id.includes('kick') || s.id.includes('flex') || s.id.includes('trailx')) s.score += 100;
                  if (s.id.includes('galaxy') || s.id.includes('ledo')) s.score += 60;
              }

              // Ajustes finos por ID específico para desempatar
              if (s.id === 'stareer-3' && budget === 'mid' && usage === 'work') s.score += 20;
              if (s.id === 'ledo-3' && budget === 'low') s.score += 20;
          });

          // Ordenar y seleccionar ganadora
          scores.sort((a, b) => b.score - a.score);
          
          // Debug (puedes quitarlo luego)
          console.log("Resultados Quiz:", scores.map(x => `${x.product.name}: ${x.score}`));

          const winner = scores[0];
          
          setRecommendedProduct(winner.product);
          // Calcular porcentaje de "match" (simulado para efecto visual)
          setMatchScore(Math.min(99, 88 + Math.floor(Math.random() * 10))); 
          
          setStep(5); // Ir a resultado
      }, 2500); // 2.5s de "Análisis"
  };

  const handleOptionSelect = (value: string) => {
      const currentQ = questions[step - 1];
      setAnswers(prev => ({ ...prev, [currentQ.id]: value }));

      if (step < questions.length) {
          setStep(prev => prev + 1);
      } else {
          processResults();
      }
  };

  const currentQuestion = questions[step - 1];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl transition-opacity"
        onClick={() => setQuizOpen(false)}
      ></div>

      {/* Main Container */}
      <div className="relative w-full max-w-4xl min-h-[500px] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl flex overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Close Button */}
        <button 
            onClick={() => setQuizOpen(false)}
            className="absolute top-6 right-6 z-20 text-gray-500 hover:text-white transition-colors"
        >
            <X size={24} />
        </button>

        {/* --- STEP 0: INTRO --- */}
        {step === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-16 relative">
                 <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent"></div>
                 <div className="relative z-10">
                     <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-primary/20 shadow-[0_0_30px_rgba(0,242,234,0.2)] animate-pulse-slow">
                         <Brain size={48} className="text-brand-primary" />
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
                         DannyCell <span className="text-brand-primary">Advisor</span>
                     </h2>
                     <p className="text-xl text-gray-400 max-w-lg mx-auto mb-10 font-medium">
                         ¿No sabes qué moto elegir? Responde 3 preguntas simples y nuestra IA encontrará tu nave perfecta en segundos.
                     </p>
                     <button 
                        onClick={() => setStep(1)}
                        className="bg-brand-primary hover:bg-cyan-300 text-black font-black py-4 px-10 rounded-xl text-xl uppercase tracking-widest shadow-neon-blue transition-transform hover:scale-105 flex items-center gap-3 mx-auto"
                     >
                        Iniciar Test <ArrowRight size={24} />
                     </button>
                 </div>
            </div>
        )}

        {/* --- STEPS 1-3: QUESTIONS --- */}
        {step >= 1 && step <= questions.length && (
            <div className="flex-1 flex flex-col relative">
                {/* Progress Bar */}
                <div className="h-1 bg-white/5 w-full">
                    <div 
                        className="h-full bg-brand-primary transition-all duration-500"
                        style={{ width: `${(step / questions.length) * 100}%` }}
                    ></div>
                </div>

                <div className="flex-1 flex flex-col justify-center p-8 md:p-12 max-w-3xl mx-auto w-full">
                    <div className="mb-10 text-center">
                        <span className="inline-block text-brand-primary font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-brand-primary/20 px-3 py-1 rounded-full">
                            Paso {step} de {questions.length}
                        </span>
                        <div className="flex items-center justify-center gap-4 mb-2">
                             {currentQuestion.icon}
                             <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic">{currentQuestion.title}</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentQuestion.options.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => handleOptionSelect(opt.value)}
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/50 p-6 rounded-2xl text-left transition-all hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-white/20 group-hover:border-brand-primary group-hover:bg-brand-primary transition-colors"></div>
                                <span className="text-lg font-bold text-white mb-2 block group-hover:text-brand-primary transition-colors">{opt.label}</span>
                                <span className="text-sm text-gray-500 font-medium leading-tight">{opt.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* --- STEP 4: LOADING (ANALYZING) --- */}
        {step === 4 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-black relative">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                 
                 <div className="relative z-10">
                     <div className="relative w-32 h-32 mx-auto mb-8">
                         <div className="absolute inset-0 border-4 border-brand-primary/20 rounded-full"></div>
                         <div className="absolute inset-0 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <Zap size={40} className="text-brand-primary animate-pulse" />
                         </div>
                     </div>
                     <h3 className="text-2xl font-black text-white uppercase tracking-widest animate-pulse">Procesando Datos...</h3>
                     <p className="text-gray-500 font-mono mt-2 text-xs">Comparando con {PRODUCTS.length} modelos en stock</p>
                 </div>
            </div>
        )}

        {/* --- STEP 5: RESULT --- */}
        {step === 5 && recommendedProduct && (
             <div className="flex-1 flex flex-col md:flex-row relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                 
                 {/* Left: Image & Badge */}
                 <div className="md:w-5/12 bg-gradient-to-br from-[#151515] to-black relative flex items-center justify-center p-8 overflow-hidden group">
                     <div className="absolute inset-0 bg-brand-primary/10 opacity-50 blur-[80px]"></div>
                     <img 
                        src={recommendedProduct.image} 
                        alt={recommendedProduct.name} 
                        className="relative z-10 w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute top-6 left-6 z-20 bg-brand-primary text-black font-black px-4 py-1 rounded text-sm uppercase tracking-widest shadow-neon-blue">
                         Match: {matchScore}%
                     </div>
                 </div>

                 {/* Right: Info */}
                 <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                     <div className="mb-2 flex items-center gap-2 text-green-400">
                         <CheckCircle size={16} />
                         <span className="text-xs font-bold uppercase tracking-widest">Recomendación Personalizada</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-2 leading-none">
                         {recommendedProduct.name}
                     </h2>
                     <p className="text-xl text-brand-primary font-bold mb-6 font-mono">
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(recommendedProduct.price)}
                     </p>

                     <p className="text-gray-400 mb-8 leading-relaxed border-l-2 border-white/10 pl-4">
                         {recommendedProduct.description}
                     </p>

                     {/* Key Specs Grid */}
                     <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                             <span className="block text-[10px] text-gray-500 uppercase font-bold">Motor</span>
                             <span className="text-white font-bold">{recommendedProduct.specs.motor}</span>
                         </div>
                         <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                             <span className="block text-[10px] text-gray-500 uppercase font-bold">Batería</span>
                             <span className="text-white font-bold">{recommendedProduct.specs.battery}</span>
                         </div>
                     </div>

                     <div className="flex gap-4">
                         <Link 
                            to={`/producto/${recommendedProduct.id}`}
                            onClick={() => setQuizOpen(false)}
                            className="flex-1 bg-brand-primary hover:bg-cyan-300 text-black font-black py-4 rounded-xl text-center uppercase tracking-wide transition-all hover:shadow-neon-blue flex items-center justify-center gap-2"
                         >
                             Ver Moto <ChevronRight size={20} />
                         </Link>
                         <button 
                            onClick={resetQuiz}
                            className="px-4 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                            title="Reiniciar Test"
                         >
                             <RefreshCw size={20} />
                         </button>
                     </div>
                 </div>
             </div>
        )}

      </div>
    </div>
  );
};

export default FindMyBikeQuiz;