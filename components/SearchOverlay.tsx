import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-brand-bg/95 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2 text-brand-primary opacity-50">
                <Zap size={20} /> <span className="text-xs font-bold uppercase tracking-[0.3em]">Buscador Global</span>
            </div>
            <button 
                onClick={() => setSearchOpen(false)}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
                <span className="text-xs font-bold uppercase tracking-widest group-hover:mr-2 transition-all">Cerrar (ESC)</span>
                <div className="p-2 border border-white/10 rounded-full group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                    <X size={20} />
                </div>
            </button>
        </div>

        <div className="relative mb-16">
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Busca por modelo, ej: Ninja, Scooter..." 
                className="w-full bg-transparent border-b-2 border-white/10 py-6 text-3xl md:text-5xl font-black text-white focus:outline-none focus:border-brand-primary placeholder-white/10 uppercase italic tracking-tight"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20" size={48} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[60vh] pb-10 custom-scrollbar">
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <Link 
                        to={`/producto/${product.id}`} 
                        key={product.id}
                        onClick={() => setSearchOpen(false)}
                        className="group bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 hover:border-brand-primary/30 transition-all flex flex-col gap-4"
                    >
                        <div className="aspect-square rounded-xl overflow-hidden bg-black/50 relative p-2">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase text-lg leading-tight mb-1 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                            <p className="text-gray-400 text-sm font-mono">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price)}</p>
                        </div>
                        <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                            Ver detalles <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))
            ) : query !== '' ? (
                <div className="col-span-full text-center text-gray-500 py-10">
                    <p className="text-xl">No encontramos resultados para "{query}"</p>
                </div>
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;