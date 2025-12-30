import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import { Zap, Wind } from 'lucide-react';

const Catalog: React.FC = () => {
  const { t } = useStore();

  // Categorizar productos
  // IDs específicos para la sección de Scooters/Patinetas
  const scooterIds = ['a6l-kick', 'flex-f3', 'trailx-t3'];

  // 1. Scooters Urbanos (Kickscooters + Flex F3 + TrailX T3)
  const kickscooters = PRODUCTS.filter(p => scooterIds.includes(p.id));
  
  // 2. Motos Eléctricas (Todo lo que no está en la lista de scooters)
  const motos = PRODUCTS.filter(p => !scooterIds.includes(p.id));

  return (
    <div className="min-h-screen py-16 bg-brand-bg text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
            {t('catalog_title')} <span className="text-brand-primary">.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium border-t border-white/10 pt-6 mt-6">
            {t('catalog_subtitle')}
          </p>
        </div>

        {/* Sección Motos Eléctricas */}
        {motos.length > 0 && (
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <Zap className="text-brand-primary" size={28} />
                    <h2 className="text-3xl font-black uppercase italic tracking-wide">Motos Eléctricas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {motos.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        )}

        {/* Sección Scooters Urbanos */}
        {kickscooters.length > 0 && (
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <Wind className="text-brand-accent" size={28} />
                    <h2 className="text-3xl font-black uppercase italic tracking-wide">Scooters Urbanos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {kickscooters.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        )}

        {PRODUCTS.length === 0 && (
          <div className="text-center py-20 bg-brand-card rounded-3xl border border-white/5">
            <p className="text-gray-500 text-lg font-bold uppercase tracking-widest">{t('no_products')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;