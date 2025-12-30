import React, { useState, useEffect } from 'react';
import { Zap, Battery, Gauge, MessageCircle, Settings, Layers, RotateCcw, Palette } from 'lucide-react';
import { WHATSAPP_NUMBER, PRODUCTS } from '../constants';
import { Product } from '../types';

const Builder: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedColor, setSelectedColor] = useState<string>(PRODUCTS[0].availableColors?.[0] || 'Negro');

  const availableMotors = Array.from(new Set(PRODUCTS.map(p => p.specs.motor)));
  const availableBatteries = Array.from(new Set(PRODUCTS.map(p => p.specs.battery)));
  const availableRanges = Array.from(new Set(PRODUCTS.map(p => p.specs.autonomy)));

  useEffect(() => {
    if (selectedProduct.availableColors && !selectedProduct.availableColors.includes(selectedColor)) {
        setSelectedColor(selectedProduct.availableColors[0]);
    }
  }, [selectedProduct]);

  const handleMotorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      const match = PRODUCTS.find(p => p.specs.motor === val);
      if (match) setSelectedProduct(match);
  };

  const handleBatteryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      const match = PRODUCTS.find(p => p.specs.battery === val);
      if (match) setSelectedProduct(match);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      const match = PRODUCTS.find(p => p.specs.autonomy === val);
      if (match) setSelectedProduct(match);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      const match = PRODUCTS.find(p => p.id === val);
      if (match) setSelectedProduct(match);
  };

  const handleQuote = () => {
    const message = `👋 Hola DannyCell Power, estoy usando el Configurador Web.\n\n` +
      `He seleccionado el modelo: *${selectedProduct.name}*\n` +
      `🛠️ Especificaciones:\n` +
      `- Motor: ${selectedProduct.specs.motor}\n` +
      `- Batería: ${selectedProduct.specs.battery}\n` +
      `- Rango: ${selectedProduct.specs.autonomy}\n` +
      `🎨 Color deseado: *${selectedColor}*\n\n` +
      `Me gustaría confirmar disponibilidad y precio actual (${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(selectedProduct.price)}).`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8 md:py-12 lg:py-16 bg-brand-bg text-white">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter">
                Configurador <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500">REAL</span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">Explora nuestras especificaciones reales y encuentra tu máquina.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
            
            {/* LEFT COLUMN: Visual Preview */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
                {/* Adjusted height for tablet: h-350 mobile, h-500 tablet, h-700 desktop */}
                <div className="bg-[#111] rounded-[2rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[700px] flex items-center justify-center group transition-all duration-500">
                    
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                        <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-brand-primary/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-primary mb-2 shadow-neon-blue">
                             <Layers size={10} className="md:w-3 md:h-3" /> {selectedProduct.name}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white/10 uppercase italic absolute top-8 left-0 whitespace-nowrap pointer-events-none select-none">
                            {selectedProduct.specs.motor.split(' ')[0]}
                        </h2>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 transition-all duration-500">
                        <div 
                            className="absolute inset-0 blur-[80px] md:blur-[120px] opacity-20 transition-colors duration-700"
                            style={{ backgroundColor: selectedColor.toLowerCase().includes('rojo') ? 'red' : selectedColor.toLowerCase().includes('azul') ? 'blue' : '#00f2ea' }}
                        ></div>

                        <img 
                            key={selectedProduct.id}
                            src={selectedProduct.image} 
                            alt="Moto Preview" 
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 animate-in fade-in zoom-in-95"
                        />
                    </div>

                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex gap-2 md:gap-4">
                         <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-center min-w-[80px] md:min-w-[100px] hover:border-brand-primary/50 transition-colors">
                             <span className="block text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-1">Velocidad</span>
                             <span className="block text-sm md:text-xl font-black text-white">{selectedProduct.specs.maxSpeed}</span>
                         </div>
                         <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-center min-w-[80px] md:min-w-[100px] hover:border-brand-primary/50 transition-colors">
                             <span className="block text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-1">Precio</span>
                             <span className="block text-sm md:text-xl font-black text-brand-primary">
                                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(selectedProduct.price)}
                             </span>
                         </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Controls Form */}
            <div className="lg:col-span-5 bg-brand-card rounded-[1.5rem] md:rounded-[2rem] border border-white/5 p-6 md:p-8 shadow-xl">
                 <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b border-white/10">
                    <div className="p-2 md:p-3 bg-brand-primary text-black rounded-xl animate-pulse-slow">
                        <Settings size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-black text-white uppercase italic">Configuración Técnica</h3>
                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Datos extraídos de inventario real</p>
                    </div>
                 </div>

                 <div className="space-y-6 md:space-y-8">
                    
                    <div className="space-y-2 md:space-y-3 relative group">
                        <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wide">
                            <Layers size={14} className="text-brand-primary md:w-4 md:h-4" /> Modelo Base
                        </label>
                        <div className="relative">
                            <select 
                                value={selectedProduct.id} 
                                onChange={handleModelChange} 
                                className="w-full p-3 md:p-4 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:border-brand-primary outline-none font-bold appearance-none transition-all hover:bg-white/5 cursor-pointer text-sm md:text-base"
                            >
                                {PRODUCTS.map(p => (
                                    <option key={p.id} value={p.id}>{p.name} - {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(p.price)}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-brand-primary transition-colors">
                                <RotateCcw size={16} />
                            </div>
                        </div>
                        <p className="text-[9px] md:text-[10px] text-gray-500 font-medium ml-1">Seleccionar un modelo cargará sus especificaciones automáticamente.</p>
                    </div>

                    <div className="w-full h-px bg-white/5"></div>

                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center justify-between text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wide">
                                <div className="flex items-center gap-2"><Zap size={14} className="text-brand-accent md:w-4 md:h-4" /> Potencia Motor</div>
                                <span className="text-[9px] md:text-[10px] text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded">Real Specs</span>
                            </label>
                            <select 
                                value={selectedProduct.specs.motor} 
                                onChange={handleMotorChange} 
                                className="w-full p-3 md:p-4 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:border-brand-accent outline-none font-bold transition-all hover:border-brand-accent/50 cursor-pointer text-sm md:text-base"
                            >
                                {availableMotors.map((m, idx) => (
                                    <option key={idx} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center justify-between text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wide">
                                <div className="flex items-center gap-2"><Battery size={14} className="text-brand-secondary md:w-4 md:h-4" /> Batería</div>
                                <span className="text-[9px] md:text-[10px] text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded">Real Specs</span>
                            </label>
                            <select 
                                value={selectedProduct.specs.battery} 
                                onChange={handleBatteryChange} 
                                className="w-full p-3 md:p-4 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:border-brand-secondary outline-none font-bold transition-all hover:border-brand-secondary/50 cursor-pointer text-sm md:text-base"
                            >
                                {availableBatteries.map((b, idx) => (
                                    <option key={idx} value={b}>{b}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center justify-between text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wide">
                                <div className="flex items-center gap-2"><Gauge size={14} className="text-green-500 md:w-4 md:h-4" /> Autonomía</div>
                                <span className="text-[9px] md:text-[10px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded">Real Specs</span>
                            </label>
                            <select 
                                value={selectedProduct.specs.autonomy} 
                                onChange={handleRangeChange} 
                                className="w-full p-3 md:p-4 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:border-green-500 outline-none font-bold transition-all hover:border-green-500/50 cursor-pointer text-sm md:text-base"
                            >
                                {availableRanges.map((r, idx) => (
                                    <option key={idx} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/5"></div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wide">
                            <Palette size={14} className="text-brand-primary md:w-4 md:h-4" /> Colores Disponibles
                        </label>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {selectedProduct.availableColors && selectedProduct.availableColors.length > 0 ? (
                                selectedProduct.availableColors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border text-[10px] md:text-xs font-bold uppercase transition-all flex items-center gap-2
                                            ${selectedColor === color 
                                                ? 'bg-white text-black border-white shadow-glow' 
                                                : 'bg-black/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}
                                        `}
                                    >
                                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${color.toLowerCase().includes('negro') ? 'bg-black border border-gray-500' : color.toLowerCase().includes('blanco') ? 'bg-white' : 'bg-brand-primary'}`} style={{ backgroundColor: color.includes('Rojo') ? 'red' : color.includes('Azul') ? 'blue' : undefined }}></div>
                                        {color}
                                    </button>
                                ))
                            ) : (
                                <span className="text-gray-500 text-xs italic">Colores estándar disponibles.</span>
                            )}
                        </div>
                    </div>

                    <div className="pt-4 md:pt-6 mt-4">
                        <button 
                            onClick={handleQuote}
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-base md:text-lg font-black py-4 md:py-5 rounded-xl md:rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3 uppercase tracking-wide group"
                        >
                            <MessageCircle size={20} strokeWidth={3} className="group-hover:animate-bounce md:w-6 md:h-6" /> 
                            Cotizar {selectedProduct.name}
                        </button>
                        <p className="text-center text-[9px] md:text-[10px] text-gray-500 mt-2 md:mt-3 font-mono">
                            Al hacer clic serás redirigido a WhatsApp con esta configuración cargada.
                        </p>
                    </div>

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;