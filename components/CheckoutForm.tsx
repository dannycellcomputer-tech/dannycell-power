import React, { useState } from 'react';
import { X, MapPin, User, Package, Truck, Store } from 'lucide-react';
import { Product } from '../types';

interface CheckoutFormProps {
  product: Product;
  onClose: () => void;
  onContinue: (clientData: ClientData) => void;
}

interface ClientData {
  fullName: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  deliveryType: 'domicilio' | 'recoger';
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, onClose, onContinue }) => {
  const [formData, setFormData] = useState<ClientData>({
    fullName: '',
    whatsapp: '',
    email: '',
    address: '',
    city: '',
    deliveryType: 'domicilio'
  });

  const [errors, setErrors] = useState<Partial<ClientData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const name = product.name;
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(product.price);

  const validateForm = (): boolean => {
    const newErrors: Partial<ClientData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Nombre completo requerido';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (formData.deliveryType === 'domicilio' && !formData.address.trim()) newErrors.address = 'Dirección requerida';
    if (!formData.city.trim()) newErrors.city = 'Ciudad requerida';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await onContinue(formData);
    } catch (error) {
      console.error('Error al procesar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ClientData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <img 
              src={product.image} 
              alt={name}
              className="w-20 h-20 object-contain bg-white rounded-lg p-2"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <div className="text-3xl font-bold">{formattedPrice}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User size={20} className="text-blue-600" />
            Datos del Cliente
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                  errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                }`}
                placeholder="Juan Pérez"
                autoComplete="name"
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                  errors.whatsapp ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                }`}
                placeholder="+57 300 123 4567"
                autoComplete="tel"
                required
              />
              {errors.whatsapp && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                }`}
                placeholder="correo@ejemplo.com"
                autoComplete="email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                  errors.city ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                }`}
                placeholder="Bogotá"
                autoComplete="address-level2"
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Tipo de entrega */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tipo de entrega *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleChange('deliveryType', 'domicilio')}
                className={`p-4 border-2 rounded-lg transition-all flex flex-col items-center ${
                  formData.deliveryType === 'domicilio'
                    ? 'border-blue-500 bg-blue-100 text-blue-700 shadow-md'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Truck className="mb-2" size={24} />
                <span className="font-medium">Domicilio</span>
              </button>
              <button
                type="button"
                onClick={() => handleChange('deliveryType', 'recoger')}
                className={`p-4 border-2 rounded-lg transition-all flex flex-col items-center ${
                  formData.deliveryType === 'recoger'
                    ? 'border-blue-500 bg-blue-100 text-blue-700 shadow-md'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Store className="mb-2" size={24} />
                <span className="font-medium">Recoger en tienda</span>
              </button>
            </div>
          </div>

          {/* Dirección (solo para domicilio) */}
          {formData.deliveryType === 'domicilio' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline mr-1" size={16} />
                Dirección de entrega *
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                  errors.address ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                }`}
                rows={3}
                placeholder="Calle 123 #45-67, Apartamento 802"
                autoComplete="street-address"
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.address}</p>
              )}
            </div>
          )}

          {/* Resumen */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Package size={16} />
              Resumen del pedido
            </h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Producto:</span>
                <span className="font-medium">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Entrega:</span>
                <span className="font-medium">
                  {formData.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger en tienda'}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total:</span>
                <span className="text-blue-600">{formattedPrice}</span>
              </div>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Procesando...
              </>
            ) : (
              <>
                Continuar al pago
                <Package size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
