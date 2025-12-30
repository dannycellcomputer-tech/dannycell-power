import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Gauge, ArrowRight, Battery, Scale } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, language, toggleCompare, compareList, setCompareOpen } = useStore();

  const name = language === 'en' && product.name_en ? product.name_en : product.name;
  const description = language === 'en' && product.description_en ? product.description_en : product.description;
  const specs = language === 'en' && product.specs_en ? product.specs_en : product.specs;

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(product.price);

  const isSelected = compareList.some(p => p.id === product.id);

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleCompare(product);
    if (!isSelected) {
        setCompareOpen(true);
    }
  };

  const getImageScaleClass = (id: string) => {
    if (id === 'nmotor-sport') return 'scale-100 group-hover:scale-105';
    if (id === 'picassio-retro') return 'scale-100 group-hover:scale-105';
    if (id === 'stareer-3') return 'scale-[1.1] group-hover:scale-[1.2]';
    if (id === 'stareer-2') return 'scale-[1.60] group-hover:scale-[1.70]';
    if (id === 'ledo-3') return 'scale-[1.45] group-hover:scale-[1.55]';
    if (id === 'ledo-2') return 'scale-[1.60] group-hover:scale-[1.70]';
    if (id === 'magical-3') return 'scale-[1.25] group-hover:scale-[1.35]';
    if (id === 'galaxy-3') return 'scale-[1.20] group-hover:scale-[1.30]';
    if (id === 'a6l-kick') return 'scale-[1.1] group-hover:scale-[1.2]';
    if (id === 'flex-f3') return 'scale-[1.1] group-hover:scale-[1.2]';
    if (id === 'trailx-t3') return 'scale-[1.15] group-hover:scale-[1.25]';
    return 'scale-100 group-hover:scale-110';
  };

  return (
    <div className="group relative bg-brand-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-neon-blue flex flex-col h-full hover:-translate-y-2">
      
      {/* Highlight Badge */}
      <div className="absolute top-0 right-0 bg-gradient-to-bl from-brand-primary to-transparent w-16 h-16 opacity-20 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Adjusted Image Height: Mobile h-56, Tablet h-64, Desktop h-72 */}
      <div className="relative overflow-hidden h-56 md:h-60 lg:h-72 bg-gradient-to-b from-[#1a1a1a] to-brand-card p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full transform scale-50 group-hover:scale-75 transition-transform duration-700"></div>
        
        <img 
          src={product.image} 
          alt={name} 
          className={`w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 origin-center ${getImageScaleClass(product.id)}`}
        />
        
        {product.isBestSeller ? (
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-20 shadow-neon-red flex items-center gap-1 animate-pulse-slow border border-red-400">
              🔥 TOP
            </div>
        ) : null}

        <button 
            onClick={handleCompare}
            className={`absolute top-4 right-4 z-30 p-2 rounded-full border transition-all duration-300 flex items-center justify-center group/vs ${isSelected ? 'bg-brand-primary text-black border-brand-primary' : 'bg-black/50 text-gray-400 border-white/20 hover:bg-white hover:text-black'}`}
            title="Comparar"
        >
            <Scale size={16} className={isSelected ? 'fill-black' : ''} />
        </button>
      </div>
      
      <div className="p-4 md:p-5 lg:p-6 flex-1 flex flex-col relative">
        <h3 className="text-lg md:text-xl lg:text-xl font-black text-white mb-2 leading-tight group-hover:text-brand-primary transition-colors tracking-tight uppercase italic">{name}</h3>
        
        <div className="w-12 h-1 bg-brand-primary/50 rounded-full mb-3 lg:mb-4 group-hover:w-full transition-all duration-500"></div>

        <div className="text-gray-400 text-xs md:text-sm mb-4 lg:mb-6 flex-1 font-medium">
          <p className="line-clamp-2">{description}</p>
        </div>
        
        <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6 bg-black/40 p-3 lg:p-4 rounded-2xl border border-white/5 group-hover:border-brand-primary/20 transition-colors">
          <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
            <Zap size={14} className="text-brand-primary lg:w-4 lg:h-4" />
            <span className="truncate font-bold tracking-wide">{specs.motor}</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
            <Gauge size={14} className="text-brand-primary lg:w-4 lg:h-4" />
            <span className="truncate font-semibold">{specs.maxSpeed}</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
            <Battery size={14} className="text-brand-primary lg:w-4 lg:h-4" />
            <span className="truncate font-semibold">{specs.autonomy}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex flex-col">
             <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider mb-1">{t('price_label')}</span>
             <span className="text-xl md:text-xl lg:text-2xl font-black text-white">{formattedPrice}</span>
          </div>
          <Link 
            to={`/producto/${product.id}`}
            className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-all hover:scale-110 shadow-lg group-hover:rotate-[-45deg]"
          >
            <ArrowRight size={18} strokeWidth={3} className="lg:w-5 lg:h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;