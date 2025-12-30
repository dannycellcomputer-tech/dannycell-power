import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { WHATSAPP_NUMBER } from '../constants';

const CartSidebar: React.FC = () => {
  const { isCartOpen, setCartOpen, cart, removeFromCart, cartTotal, t, language } = useStore();

  if (!isCartOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    let message = `Hola DannyCell Power, quiero realizar el siguiente pedido:\n\n`;
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `▪️ ${item.quantity}x ${item.name} - ${formatPrice(itemTotal)}\n`;
    });
    message += `\n*Total: ${formatPrice(cartTotal)}*\n\n¿Me indican los pasos para el pago?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl h-full flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111]">
          <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-wide">
            <ShoppingBag className="text-brand-primary" /> {t('cart_title')}
          </h2>
          <button 
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-600">
              <ShoppingBag size={64} className="mb-4 opacity-20" />
              <p className="font-medium uppercase tracking-wide">{t('cart_empty')}</p>
            </div>
          ) : (
            cart.map(item => {
               const name = language === 'en' && item.name_en ? item.name_en : item.name;
               return (
                <div key={item.id} className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="w-20 h-20 bg-black rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                    <img src={item.image} alt={name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm leading-tight mb-1">{name}</h4>
                    <p className="text-xs text-brand-primary mb-2 font-mono">{item.quantity} x {formatPrice(item.price)}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs flex items-center gap-1 hover:text-red-400 uppercase font-bold"
                    >
                      <Trash2 size={12} /> Eliminar
                    </button>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
               );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#111]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 font-medium uppercase tracking-wide">{t('cart_total')}</span>
              <span className="text-2xl font-black text-brand-primary">{formatPrice(cartTotal)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-green-500/30 uppercase tracking-wide text-lg"
            >
              <MessageCircle size={24} /> {t('cart_checkout')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;