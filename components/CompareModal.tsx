import React, { useState, useEffect } from 'react';
import { X, Zap, Gauge, Battery, Check, ArrowRight, Plus, Bot, Cpu, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const CompareModal: React.FC = () => {
  const { isCompareOpen, setCompareOpen, compareList, toggleCompare } = useStore();
  
  // Estados para la IA
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{winner: string, value: string, summary: string} | null>(null);
  const [loadingText, setLoadingText] = useState('INICIANDO NEURAL CORE...');

  // Resetear estado al cerrar o cambiar lista
  useEffect(() => {
    if (!isCompareOpen) {
        setAnalysisResult(null);
        setIsAnalyzing(false);
    }
  }, [isCompareOpen, compareList]);

  if (!isCompareOpen) return null;

  const formatPrice = (price: number) => new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  // --- LÓGICA DE LA IA (DannyCell Neural Engine) ---
  const extractNumber = (str: string) => {
      const match = str.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
  };

  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Secuencia de "Pensamiento" PROPIETARIA
    const steps = [
        "ACCEDIENDO A BASE DE DATOS DANNYCELL...",
        "ANALIZANDO TOPOGRAFÍA COLOMBIANA...",
        "CALCULANDO COEFiCIENTE DE TORQUE/PRECIO...",
        "EJECUTANDO PROTOCOLO DE DECISIÓN V3.0..."
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex < steps.length) {
            setLoadingText(steps[stepIndex]);
            stepIndex++;
        }
    }, 600);

    setTimeout(() => {
        clearInterval(interval);
        
        // 1. Encontrar la más potente (Velocidad + Motor) - "ALPHA UNIT"
        const performanceWinner = [...compareList].sort((a, b) => {
            const speedA = extractNumber(a.specs.maxSpeed);
            const speedB = extractNumber(b.specs.maxSpeed);
            // Si velocidad es igual, desempatar por precio (la más cara suele tener mejores componentes)
            if (speedB === speedA) return b.price - a.price;
            return speedB - speedA;
        })[0];

        // 2. Encontrar la mejor valor (Precio más bajo) - "SMART BUY"
        const valueWinner = [...compareList].sort((a, b) => a.price - b.price)[0];

        // 3. Generar Resumen
        let summaryText = "";
        
        if (compareList.length === 2) {
            const other = compareList.find(p => p.id !== performanceWinner.id) || compareList[1];
            const diffPrice = Math.abs(performanceWinner.price - other.price);
            
            if (performanceWinner.id === valueWinner.id) {
                // Caso raro donde la más rápida también es la más barata
                summaryText = `>> REPORTE: ANOMALÍA POSITIVA DETECTADA.\nLa ${performanceWinner.name} rompe la lógica del mercado. Mi algoritmo confirma que es superior en rendimiento Y precio simultáneamente. No hay debate: esta es la compra maestra.`;
            } else {
                summaryText = `>> REPORTE COMPARATIVO BINARIO:\n\n1. RENDIMIENTO: La ${performanceWinner.name} supera las métricas con una configuración de motor superior. Es la elección para dominar la vía.\n\n2. ECONOMÍA: La ${valueWinner.name} ofrece la mayor eficiencia financiera, ahorrándote ${formatPrice(diffPrice)} inmediatos.\n\nCONCLUSIÓN: ¿Priorizas velocidad o capital? El sistema DannyCell recomienda la ${performanceWinner.name} si buscas emociones fuertes.`;
            }
        } else {
            // LÓGICA DE 3 VÍAS MEJORADA - Identificar la "Equilibrada"
            // Filtramos la que NO es ni la más rápida ni la más barata
            const balancedOption = compareList.find(p => p.id !== performanceWinner.id && p.id !== valueWinner.id);

            summaryText = `>> ANÁLISIS TRIANGULAR COMPLETADO.\n\n`;
            summaryText += `• POTENCIA BRUTA: La ${performanceWinner.name} lidera la tabla. Máximo torque y velocidad final.\n`;
            summaryText += `• INVERSIÓN INTELIGENTE: La ${valueWinner.name} protege tu bolsillo con el costo de entrada más bajo.\n`;
            
            if (balancedOption) {
                summaryText += `\n>> VEREDICTO DEL SISTEMA: Mi análisis identifica a la ${balancedOption.name} como el "Equilibrio Táctico". No es la más costosa, pero supera en prestaciones a la básica. Es la configuración recomendada para el usuario promedio colombiano.`;
            } else {
                // Fallback por si hay empate técnico
                summaryText += `\n>> VEREDICTO: Tienes extremos muy marcados. Para uso intensivo ve por la ${performanceWinner.name}. Para movilidad urbana ligera, la ${valueWinner.name} es suficiente.`;
            }
        }

        setAnalysisResult({
            winner: performanceWinner.name,
            value: valueWinner.name,
            summary: summaryText
        });
        setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
        onClick={() => setCompareOpen(false)}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-[95vh] bg-[#050505] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
          <div className="flex items-center gap-4">
             <div className="bg-brand-primary/20 p-2.5 rounded-xl text-brand-primary border border-brand-primary/20">
                <ArrowRight size={24} className="rotate-45" />
             </div>
             <div>
                <h2 className="text-2xl font-black text-white uppercase italic tracking-wider">Modo VS</h2>
                <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-xs font-bold uppercase">Comparando {compareList.length} Modelos</p>
                    {compareList.length >= 2 && (
                        <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded border border-green-500/20 font-bold animate-pulse">
                            IA DISPONIBLE
                        </span>
                    )}
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
              {/* BOTÓN IA - Solo aparece con 2+ modelos */}
              {compareList.length >= 2 && !isAnalyzing && !analysisResult && (
                  <button 
                    onClick={runAIAnalysis}
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-brand-secondary to-brand-primary hover:from-brand-primary hover:to-brand-secondary text-white px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-[0_0_20px_rgba(112,0,255,0.4)] border border-white/20"
                  >
                      <Sparkles size={16} /> Analizar con IA
                  </button>
              )}

              <button 
                onClick={() => setCompareOpen(false)}
                className="p-2 hover:bg-red-500/20 hover:text-red-500 text-gray-400 rounded-full transition-all"
              >
                <X size={24} />
              </button>
          </div>
        </div>

        {/* Main Content Area: Grid + AI Result */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-20 flex flex-col">
            
            {/* 1. Comparison Grid */}
            <div className="p-6 md:p-8">
                {compareList.length === 0 ? (
                    <div className="h-[60vh] flex flex-col items-center justify-center text-gray-500">
                        <p className="text-xl uppercase font-bold tracking-widest mb-4">No hay modelos seleccionados</p>
                        <button onClick={() => setCompareOpen(false)} className="text-brand-primary hover:underline">Volver al catálogo</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {compareList.map(product => (
                            <div key={product.id} className="bg-brand-card border border-white/10 rounded-2xl flex flex-col relative overflow-hidden group hover:border-brand-primary/50 transition-colors shrink-0 shadow-lg">
                                {/* Remove Button */}
                                <button 
                                    onClick={() => toggleCompare(product)}
                                    className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                                >
                                    <X size={16} />
                                </button>

                                {/* Image Header */}
                                <div className="h-48 bg-gradient-to-b from-[#151515] to-brand-card flex items-center justify-center p-4 relative">
                                    <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors"></div>
                                    <img src={product.image} alt={product.name} className="h-full w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col space-y-6">
                                    <div>
                                        <h3 className="text-xl font-black text-white uppercase italic leading-tight mb-2">{product.name}</h3>
                                        <div className="text-2xl font-bold text-brand-primary">{formatPrice(product.price)}</div>
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                                            <div className="text-gray-500 text-[10px] font-bold uppercase flex items-center gap-2"><Zap size={14} className="text-brand-primary" /> Motor</div>
                                            <div className="text-white font-bold">{product.specs.motor}</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                                            <div className="text-gray-500 text-[10px] font-bold uppercase flex items-center gap-2"><Battery size={14} className="text-brand-secondary" /> Batería</div>
                                            <div className="text-white font-bold text-right text-xs max-w-[60%]">{product.specs.battery}</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                                            <div className="text-gray-500 text-[10px] font-bold uppercase flex items-center gap-2"><Gauge size={14} className="text-brand-accent" /> Vel. Max</div>
                                            <div className="text-white font-bold">{product.specs.maxSpeed}</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                                            <div className="text-gray-500 text-[10px] font-bold uppercase flex items-center gap-2"><Check size={14} className="text-green-500" /> Rango</div>
                                            <div className="text-white font-bold">{product.specs.autonomy}</div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <Link 
                                            to={`/producto/${product.id}`}
                                            onClick={() => setCompareOpen(false)}
                                            className="block w-full text-center bg-white/5 hover:bg-white text-white hover:text-black font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-widest border border-white/10"
                                        >
                                            Ver Detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Interactive "Add Model" Button (Visible when < 3 items) */}
                        {compareList.length < 3 && (
                            <Link 
                                to="/catalogo"
                                onClick={() => setCompareOpen(false)}
                                className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-500 gap-6 hover:border-brand-primary hover:bg-brand-primary/5 hover:text-brand-primary transition-all cursor-pointer group min-h-[400px]"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all shadow-lg group-hover:shadow-neon-blue group-hover:scale-110">
                                    <Plus size={40} />
                                </div>
                                <div className="text-center">
                                    <span className="block font-black uppercase tracking-widest text-lg mb-1 group-hover:text-white">Agregar Modelo</span>
                                    <span className="text-xs font-mono opacity-50">Click para ir al catálogo</span>
                                </div>
                            </Link>
                        )}
                    </div>
                )}
            </div>

            {/* 2. AI ANALYSIS SECTION (Conditional Render) */}
            
            {/* Estado: Cargando */}
            {isAnalyzing && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-[#0f0f0f] border border-brand-primary/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-48">
                         {/* Matrix Rain Effect Simulated */}
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                         
                         <Cpu size={48} className="text-brand-primary animate-pulse mb-4" />
                         <h3 className="text-2xl font-black text-white font-mono uppercase tracking-widest mb-2">
                            {loadingText}
                         </h3>
                         <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                             <div className="h-full bg-brand-primary animate-drive"></div>
                         </div>
                    </div>
                </div>
            )}

            {/* Estado: Resultado */}
            {analysisResult && !isAnalyzing && (
                <div className="px-6 md:px-8 pb-8 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-brand-primary/40 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(0,242,234,0.1)]">
                         {/* Decoracion Cyberpunk */}
                         <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                         <div className="absolute top-4 right-4 flex gap-2">
                             <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping"></div>
                             <div className="text-[10px] text-brand-primary font-mono uppercase">AI CORE: ONLINE</div>
                         </div>

                         <div className="flex flex-col md:flex-row gap-8 items-start">
                             <div className="flex-shrink-0 bg-brand-primary/10 p-4 rounded-2xl border border-brand-primary/20">
                                 <Bot size={48} className="text-brand-primary" />
                             </div>
                             
                             <div className="flex-1 space-y-6">
                                 <div>
                                     <h3 className="text-2xl font-black text-white uppercase italic mb-2">Análisis Neural DannyCell</h3>
                                     <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base border-l-2 border-white/10 pl-4 whitespace-pre-line">
                                         {analysisResult.summary}
                                     </p>
                                 </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div className="bg-black/40 p-4 rounded-xl border border-brand-secondary/30 flex items-center justify-between">
                                         <div>
                                             <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest block mb-1">Rendimiento Puro</span>
                                             <span className="text-lg font-black text-white">{analysisResult.winner}</span>
                                         </div>
                                         <Zap className="text-brand-secondary" />
                                     </div>
                                     <div className="bg-black/40 p-4 rounded-xl border border-green-500/30 flex items-center justify-between">
                                         <div>
                                             <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest block mb-1">Mejor Precio</span>
                                             <span className="text-lg font-black text-white">{analysisResult.value}</span>
                                         </div>
                                         <Check className="text-green-500" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            )}

            {/* Mobile Analyse Button (Sticky Bottom) */}
            {compareList.length >= 2 && !isAnalyzing && !analysisResult && (
                 <div className="md:hidden sticky bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <button 
                        onClick={runAIAnalysis}
                        className="w-full flex items-center justify-center gap-2 bg-brand-primary text-black py-4 rounded-xl font-black uppercase tracking-widest shadow-neon-blue"
                      >
                          <Sparkles size={20} /> Analizar Diferencias
                      </button>
                 </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default CompareModal;