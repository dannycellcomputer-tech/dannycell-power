import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Gauge, ArrowRight, Battery, CreditCard, Scale } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import CheckoutForm from './CheckoutForm';
import { firebaseService } from '../services/firebaseService';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, language, toggleCompare, compareList, setCompareOpen } = useStore();
  
  // Estado para el formulario de checkout
  const [showCheckoutForm, setShowCheckoutForm] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const name = language === 'en' && product.name_en ? product.name_en : product.name;
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

  // Mostrar formulario de cliente
  const handleMercadoPago = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCheckoutForm(true);
  };

  // Procesar datos del cliente y continuar al pago
  const handleCheckoutContinue = async (clientData: any) => {
    setIsProcessing(true);
    setShowCheckoutForm(false);
    
    try {
      console.log('🧩 PASO 2: Guardando pedido en Firebase...');
      console.log('Datos del cliente:', clientData);
      console.log('Producto:', { name, price: product.price, image: product.image });
      
      // 🔥 GUARDAR PEDIDO EN FIREBASE ANTES DEL PAGO
      const order = await firebaseService.createOrder(
        product,
        clientData,
        undefined // Se agregará después de crear la preferencia
      );
      
      console.log('✅ Pedido guardado en Firebase:', order.id);
      
      // Crear preferencia con orderId real
      const requestData = {
        title: name,
        price: product.price,
        image: product.image,
        orderId: order.id // Usar el ID real del pedido
      };
      
      console.log('📤 Enviando al backend:', requestData);
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/crear-preferencia`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Preferencia creada:', data);
      
      // Actualizar pedido con preferenceId
      await firebaseService.updateOrderStatus(order.id, 'pendiente_pago', data.id);
      
      // 🔥 SOLUCIÓN REAL: Usar init_point (link real de Mercado Pago)
      await showCheckoutBricks(data.init_point, clientData);
      
    } catch (error) {
      console.error('❌ Error en el proceso:', error);
      alert('Error al procesar el pedido: ' + (error as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  // SOLUCIÓN DEFINITIVA - Usar init_point real de Mercado Pago
  const showCheckoutBricks = async (initPoint: string, clientData: any) => {
    try {
      console.log('🔥 Iniciando Checkout Pro con init_point real...');
      console.log('📋 Init Point recibido:', initPoint);
      console.log('👤 Cliente:', clientData);
      
      // Validar que el init_point exista
      if (!initPoint) {
        console.error('❌ No hay init_point');
        alert('Error: No se recibió el link de pago de Mercado Pago');
        return;
      }
      
      // Mostrar modal de confirmación breve
      const modal = createPaymentModal(name, formattedPrice, product.image, clientData);
      document.body.appendChild(modal);
      
      // Redirección directa usando init_point (el link REAL de Mercado Pago)
      console.log('🚀 Redirigiendo a Checkout Pro con link REAL...');
      
      setTimeout(() => {
        window.location.href = initPoint; // 🔥 LINK REAL DE MERCADO PAGO
      }, 2000); // 2 segundos para que el usuario vea el resumen

    } catch (error) {
      console.error('Error al redirigir a Checkout Pro:', error);
      alert('Error al cargar el formulario de pago');
    }
  };

  // Crear modal de pago con resumen
  const createPaymentModal = (productName: string, price: string, productImage: string, clientData: any) => {
    const modal = document.createElement('div');
    modal.id = 'payment-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: white;
      border-radius: 16px;
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;

    modalContent.innerHTML = `
      <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; border-radius: 16px 16px 0 0; position: relative;">
        <button onclick="document.body.removeChild(document.getElementById('payment-modal'))" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 20px; font-weight: bold;">✕</button>
        <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
          <img src="${productImage}" alt="${productName}" style="width: 80px; height: 80px; object-fit: contain; background: white; border-radius: 12px; padding: 10px;">
          <div>
            <h3 style="margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">${productName}</h3>
            <div style="font-size: 28px; font-weight: bold;">${price}</div>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 15px;">
          <div style="font-size: 14px; margin-bottom: 8px;">👤 Cliente: ${clientData.fullName}</div>
          <div style="font-size: 14px; margin-bottom: 8px;">📱 WhatsApp: ${clientData.whatsapp}</div>
          <div style="font-size: 14px; margin-bottom: 8px;">📍 ${clientData.city} - ${clientData.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger en tienda'}</div>
        </div>
      </div>
      <div style="padding: 30px;">
        <h4 style="text-align: center; margin-bottom: 20px; font-size: 18px; font-weight: bold; color: #333;">💳 Método de pago</h4>
        <p style="text-align: center; color: #666; margin-bottom: 20px; font-size: 14px;">
          Serás redirigido a Mercado Pago en 2 segundos...
        </p>
        <div style="background: #e8f4fd; border: 2px solid #009ee3; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
            <img src="https://img.icons8.com/color/48/mercadopago.png" alt="Mercado Pago" style="width: 32px; height: 32px;">
            <span style="font-weight: bold; color: #009ee3;">Checkout Pro con Init_Point</span>
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #666;">
            <li style="color: #009ee3; font-weight: bold;">✅ PRECIO REAL GARANTIZADO</li>
            <li>✅ Link oficial init_point de MP</li>
            <li>✅ Lee items[] y unit_price</li>
            <li>✅ Sin $50,000 fantasma</li>
            <li>✅ Interfaz 100% Mercado Pago</li>
          </ul>
        </div>
        <div style="text-align: center;">
          <div style="display: inline-block; padding: 10px 20px; background: #f0f0f0; border-radius: 20px; font-size: 14px; color: #666;">
            ⏳ Redirigiendo...
          </div>
        </div>
      </div>
    `;

    modal.appendChild(modalContent);
    return modal;
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
    <>
      <div className="group relative bg-brand-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-neon-blue flex flex-col h-full hover:-translate-y-2">
        
        {/* Highlight Badge */}
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-brand-primary to-transparent w-16 h-16 opacity-20 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Adjusted Image Height: Mobile h-56, Tablet h-64, Desktop h-72 */}
        <div className="relative overflow-hidden h-56 md:h-60 lg:h-72 bg-gradient-to-b from-[#1a1a1a] to-brand-card p-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full transform scale-50 group-hover:scale-75 transition-transform duration-700"></div>
          
          <img 
            src={product.image} 
            alt={name} 
            loading="lazy"
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
            <p className="line-clamp-2">{product.description}</p>
          </div>
          
          <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6 bg-black/40 p-3 lg:p-4 rounded-2xl border border-white/5 group-hover:border-brand-primary/20 transition-colors">
            {product.type === 'motorcycle' ? (
              <>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Zap size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-bold tracking-wide">{(specs as any).motor}</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Gauge size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-semibold">{(specs as any).maxSpeed}</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Battery size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-semibold">{(specs as any).autonomy}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Zap size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-bold tracking-wide">{(specs as any).processor}</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Gauge size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-semibold">{(specs as any).ram}</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-300">
                  <Battery size={14} className="text-brand-primary lg:w-4 lg:h-4" />
                  <span className="truncate font-semibold">{(specs as any).storage}</span>
                </div>
              </>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
            <div className="flex flex-col">
               <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider mb-1">{t('price_label')}</span>
               <span className="text-xl md:text-xl lg:text-2xl font-black text-white">{formattedPrice}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Botón de Mercado Pago */}
              <button
                onClick={handleMercadoPago}
                disabled={isProcessing}
                className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-110 shadow-lg group disabled:opacity-50"
                title="Comprar ahora"
              >
                <CreditCard size={18} strokeWidth={2} className="lg:w-5 lg:h-5" />
              </button>
              
              {/* Botón de ver detalles */}
              <Link 
                to={`/producto/${product.id}`}
                className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-all hover:scale-110 shadow-lg group-hover:rotate-[-45deg]"
              >
                <ArrowRight size={18} strokeWidth={3} className="lg:w-5 lg:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 🧩 PASO 1: Formulario de Checkout */}
      {showCheckoutForm && (
        <CheckoutForm
          product={product}
          onClose={() => setShowCheckoutForm(false)}
          onContinue={handleCheckoutContinue}
        />
      )}
    </>
  );
};

export default ProductCard;
