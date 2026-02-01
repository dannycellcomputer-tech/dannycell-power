import React, { useState, useEffect } from 'react';
import { X, Eye, RefreshCw, Bell, DollarSign, ShoppingCart } from 'lucide-react';
import { firebaseService, Order } from '../services/firebaseService';

const AdminPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Cargar pedidos al montar
  useEffect(() => {
    loadOrders();
    
    // Solicitar permiso para notificaciones
    firebaseService.requestNotificationPermission();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const allOrders = await firebaseService.getAllOrders();
      setOrders(allOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error('Error al cargar pedidos:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    try {
      await firebaseService.updateOrderStatus(orderId, status);
      await loadOrders(); // Recargar lista
    } catch (error) {
      console.error('Error al actualizar estado:', error);
      alert('Error al actualizar el estado del pedido');
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pendiente_pago': return 'bg-yellow-100 text-yellow-800';
      case 'pagado': return 'bg-green-100 text-green-800';
      case 'rechazado': return 'bg-red-100 text-red-800';
      case 'cancelado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pendiente_pago': return '⏳';
      case 'pagado': return '✅';
      case 'rechazado': return '❌';
      case 'cancelado': return '🚫';
      default: return '❓';
    }
  };

  // Estadísticas
  const stats = {
    total: orders.length,
    pendientes: orders.filter(o => o.status === 'pendiente_pago').length,
    pagados: orders.filter(o => o.status === 'pagado').length,
    ingresos: orders.filter(o => o.status === 'pagado').reduce((sum, o) => sum + o.price, 0)
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart size={24} />
              Panel de Administración - DannyCell
            </h2>
            <p className="text-blue-100 mt-1">Gestiona tus pedidos en tiempo real</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Pedidos</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <ShoppingCart className="text-blue-600" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pendientes</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendientes}</p>
              </div>
              <Bell className="text-yellow-600" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pagados</p>
                <p className="text-2xl font-bold text-green-600">{stats.pagados}</p>
              </div>
              <DollarSign className="text-green-600" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Ingresos</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${stats.ingresos.toLocaleString('es-CO')}
                </p>
              </div>
              <DollarSign className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: '60vh' }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Pedidos Recientes</h3>
            <button
              onClick={loadOrders}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              Actualizar
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2">Cargando pedidos...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No hay pedidos registrados</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)} {order.status.replace('_', ' ')}
                        </span>
                        <span className="text-sm text-gray-500">
                          ID: {order.id}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleString('es-CO')}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="font-semibold text-gray-800">{order.productName}</p>
                          <p className="text-lg font-bold text-blue-600">
                            ${order.price.toLocaleString('es-CO')}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <strong>Cliente:</strong> {order.client.fullName}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>WhatsApp:</strong> {order.client.whatsapp}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Email:</strong> {order.client.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Ciudad:</strong> {order.client.city} - {order.client.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger'}
                          </p>
                        </div>
                      </div>

                      {order.client.address && (
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Dirección:</strong> {order.client.address}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="bg-blue-100 text-blue-700 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                        title="Ver detalles"
                      >
                        <Eye size={16} />
                      </button>
                      
                      {order.status === 'pendiente_pago' && (
                        <>
                          <button
                            onClick={() => updateOrderStatus(order.id, 'pagado')}
                            className="bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
                          >
                            Marcar Pagado
                          </button>
                          <button
                            onClick={() => updateOrderStatus(order.id, 'cancelado')}
                            className="bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal de detalles */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Detalles del Pedido</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Información del Pedido</h4>
                  <p><strong>ID:</strong> {selectedOrder.id}</p>
                  <p><strong>Estado:</strong> <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>{selectedOrder.status}</span></p>
                  <p><strong>Fecha:</strong> {new Date(selectedOrder.createdAt).toLocaleString('es-CO')}</p>
                  <p><strong>Producto:</strong> {selectedOrder.productName}</p>
                  <p><strong>Precio:</strong> ${selectedOrder.price.toLocaleString('es-CO')}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Datos del Cliente</h4>
                  <p><strong>Nombre:</strong> {selectedOrder.client.fullName}</p>
                  <p><strong>WhatsApp:</strong> {selectedOrder.client.whatsapp}</p>
                  <p><strong>Email:</strong> {selectedOrder.client.email}</p>
                  <p><strong>Ciudad:</strong> {selectedOrder.client.city}</p>
                  <p><strong>Tipo de entrega:</strong> {selectedOrder.client.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger en tienda'}</p>
                  {selectedOrder.client.address && (
                    <p><strong>Dirección:</strong> {selectedOrder.client.address}</p>
                  )}
                </div>
                
                {selectedOrder.paymentId && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Información de Pago</h4>
                    <p><strong>ID de Pago:</strong> {selectedOrder.paymentId}</p>
                    <p><strong>ID de Preferencia:</strong> {selectedOrder.preferenceId}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
