// Firebase Configuration - Producción Real
const firebaseConfig = {
  apiKey: "AIzaSyBjKk8p4hLqL9mNqO3rS7tU8vW9xY2zA1B",
  authDomain: "dannycellpower.firebaseapp.com",
  projectId: "dannycellpower",
  storageBucket: "dannycellpower.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, serverTimestamp, query, orderBy, where, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Habilitar persistencia para mejor rendimiento
enableIndexedDbPersistence(db).catch(err => {
  console.log('Persistencia ya habilitada o no soportada:', err);
});

// State Management
let orders = [];
let isAdmin = false;
let currentFilter = 'all';

// DOM Elements
const appElement = document.getElementById('app');

// Initialize Admin Panel
async function initAdmin() {
  try {
    // Check admin authentication (simple password for demo)
    const password = prompt('Ingrese contraseña de administrador:');
    if (password !== 'Eltra510@') {
      showError('Acceso denegado');
      return;
    }
    
    isAdmin = true;
    await loadOrders();
    renderAdminPanel();
    setupRealtimeUpdates();
    
  } catch (error) {
    console.error('Error initializing admin:', error);
    showError('Error al inicializar el panel');
  }
}

// Make functions globally available
window.loadOrders = loadOrders;
window.updateOrderStatus = updateOrderStatus;
window.showOrderDetails = showOrderDetails;
window.filterOrders = filterOrders;

// Load Orders from Firebase - REAL DATA
async function loadOrders() {
  try {
    console.log('🔥 Conectando a Firebase REAL...');
    console.log('📊 Proyecto:', firebaseConfig.projectId);
    
    const querySnapshot = await getDocs(collection(db, 'orders'));
    orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    
    // Sort by date (newest first)
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    console.log('✅ Pedidos REALES cargados desde Firebase:', orders.length);
    console.log('📋 Pedidos:', orders);
    
    if (orders.length === 0) {
      console.log('ℹ️ No hay pedidos en Firebase. Ve a la tienda y haz una compra de prueba.');
    }
    
  } catch (error) {
    console.error('❌ Error cargando pedidos REALES:', error);
    console.error('🔍 Detalles del error:', error.code, error.message);
    
    // Mostrar error específico
    if (error.code === 'permission-denied') {
      showError('❌ Error de permisos Firebase. Las reglas de seguridad están bloqueando el acceso.');
    } else if (error.code === 'unavailable') {
      showError('❌ Firebase no disponible. Revisa tu conexión.');
    } else {
      showError(`❌ Error Firebase: ${error.message}`);
    }
    
    console.log('🔄 Modo demo desactivado. Solo se mostrarán datos REALES de Firebase.');
  }
}

// Setup Realtime Updates
function setupRealtimeUpdates() {
  // Poll for updates every 5 seconds
  setInterval(async () => {
    await loadOrders();
    updateOrdersList();
    updateStats();
  }, 5000);
}

// Render Admin Panel
function renderAdminPanel() {
  appElement.innerHTML = `
    <div class="min-h-screen bg-gray-100">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold flex items-center gap-3">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 11-8 0m4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm2-10V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                DannyCell Power - Panel de Administración
              </h1>
              <p class="text-blue-100">Gestiona tus pedidos en tiempo real</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm bg-white/20 px-3 py-1 rounded-full">
                Admin: Activo
              </span>
              <button onclick="loadOrders()" class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Dashboard -->
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6" id="statsContainer">
          <!-- Stats will be rendered here -->
        </div>
      </div>

      <!-- Orders List -->
      <div class="max-w-7xl mx-auto px-4 pb-8">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="p-6 border-b">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-bold text-gray-800">Pedidos Recientes</h2>
              <div class="flex gap-2">
                <select id="filterSelect" onchange="filterOrders(this.value)" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="all">Todos</option>
                  <option value="pendiente_pago">Pendientes</option>
                  <option value="pagado">Pagados</option>
                  <option value="cancelado">Cancelados</option>
                  <option value="rechazado">Rechazados</option>
                </select>
              </div>
            </div>
          </div>
          <div id="ordersList" class="divide-y">
            <!-- Orders will be rendered here -->
          </div>
        </div>
      </div>
    </div>
  `;
  
  updateStats();
  updateOrdersList();
}

// Update Statistics
function updateStats() {
  const stats = calculateStats();
  const statsContainer = document.getElementById('statsContainer');
  
  statsContainer.innerHTML = `
    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Total Pedidos</p>
          <p class="text-3xl font-bold text-gray-800">${stats.total}</p>
        </div>
        <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 11-8 0m4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Pendientes</p>
          <p class="text-3xl font-bold text-yellow-600">${stats.pendientes}</p>
        </div>
        <svg class="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 012-2h6a2 2 0 012 2v6.002M10 15a4 4 0 00-8 0v-1h8v1a4 4 0 00-8 0z" />
        </svg>
      </div>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Pagados</p>
          <p class="text-3xl font-bold text-green-600">${stats.pagados}</p>
        </div>
        <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v8m0-8c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Ingresos</p>
          <p class="text-3xl font-bold text-blue-600">$${stats.ingresos.toLocaleString('es-CO')}</p>
        </div>
        <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v8m0-8c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  `;
}

// Calculate Statistics
function calculateStats() {
  return {
    total: orders.length,
    pendientes: orders.filter(o => o.status === 'pendiente_pago').length,
    pagados: orders.filter(o => o.status === 'pagado').length,
    ingresos: orders.filter(o => o.status === 'pagado').reduce((sum, o) => sum + (o.price || 0), 0)
  };
}

// Update Orders List
function updateOrdersList() {
  const ordersList = document.getElementById('ordersList');
  const filteredOrders = currentFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === currentFilter);
  
  if (filteredOrders.length === 0) {
    ordersList.innerHTML = `
      <div class="p-8 text-center text-gray-500">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 00-.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2z" />
        </svg>
        <p class="text-lg">No hay pedidos registrados</p>
      </div>
    `;
    return;
  }
  
  ordersList.innerHTML = filteredOrders.map(order => `
    <div class="p-6 hover:bg-gray-50 transition-colors">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}">
              ${getStatusIcon(order.status)} ${order.status.replace('_', ' ')}
            </span>
            <span class="text-sm text-gray-500">
              ID: ${order.id}
            </span>
            <span class="text-sm text-gray-500">
              ${new Date(order.createdAt).toLocaleString('es-CO')}
            </span>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p class="font-semibold text-gray-800">${order.productName || 'Producto'}</p>
              <p class="text-lg font-bold text-blue-600">
                $${(order.price || 0).toLocaleString('es-CO')}
              </p>
            </div>
            <div>
              <p class="text-sm text-gray-600">
                <strong>Cliente:</strong> ${order.client?.fullName || 'N/A'}
              </p>
              <p class="text-sm text-gray-600">
                <strong>WhatsApp:</strong> ${order.client?.whatsapp || 'N/A'}
              </p>
              <p class="text-sm text-gray-600">
                <strong>Email:</strong> ${order.client?.email || 'N/A'}
              </p>
              <p class="text-sm text-gray-600">
                <strong>Ciudad:</strong> ${order.client?.city || 'N/A'} - ${order.client?.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger'}
              </p>
            </div>
          </div>

          ${order.client?.address ? `
            <p class="text-sm text-gray-600 mb-3">
              <strong>Dirección:</strong> ${order.client.address}
            </p>
          ` : ''}
        </div>

        <div class="flex gap-2 ml-4">
          <button onclick="showOrderDetails('${order.id}')" class="bg-blue-100 text-blue-700 p-2 rounded-lg hover:bg-blue-200 transition-colors" title="Ver detalles">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          
          ${order.status === 'pendiente_pago' ? `
            <button onclick="updateOrderStatus('${order.id}', 'pagado')" class="bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
              Marcar Pagado
            </button>
            <button onclick="updateOrderStatus('${order.id}', 'cancelado')" class="bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
              Cancelar
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// Show Order Details
function showOrderDetails(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  
  alert(`
📋 DETALLES DEL PEDIDO

ID: ${order.id}
Estado: ${order.status}
Fecha: ${new Date(order.createdAt).toLocaleString('es-CO')}

📦 PRODUCTO:
${order.productName || 'N/A'}
Precio: $${(order.price || 0).toLocaleString('es-CO')}

👤 CLIENTE:
Nombre: ${order.client?.fullName || 'N/A'}
WhatsApp: ${order.client?.whatsapp || 'N/A'}
Email: ${order.client?.email || 'N/A'}
Ciudad: ${order.client?.city || 'N/A'}
Entrega: ${order.client?.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger en tienda'}
${order.client?.address ? `Dirección: ${order.client.address}` : ''}

💳 PAGO:
${order.paymentId ? `ID de Pago: ${order.paymentId}` : 'Pendiente'}
${order.preferenceId ? `ID de Preferencia: ${order.preferenceId}` : 'Pendiente'}
  `);
}

// Update Order Status - REAL FIREBASE
async function updateOrderStatus(orderId, status) {
  try {
    console.log(`🔄 Actualizando pedido REAL ${orderId} a: ${status}`);
    
    // Update in Firebase REAL
    await updateDoc(doc(db, 'orders', orderId), {
      status: status,
      updatedAt: serverTimestamp()
    });
    
    // Update local state
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      orders[orderIndex] = { ...orders[orderIndex], status, updatedAt: new Date().toISOString() };
    }
    
    // Update UI
    updateOrdersList();
    updateStats();
    
    showSuccess(`✅ Pedido REAL ${orderId} actualizado a: ${status}`);
    
  } catch (error) {
    console.error('❌ Error actualizando pedido REAL:', error);
    showError('❌ Error al actualizar el estado del pedido en Firebase');
  }
}

// Filter Orders
function filterOrders(filter) {
  currentFilter = filter;
  updateOrdersList();
}

// Helper Functions
function getStatusColor(status) {
  switch (status) {
    case 'pendiente_pago': return 'bg-yellow-100 text-yellow-800';
    case 'pagado': return 'bg-green-100 text-green-800';
    case 'rechazado': return 'bg-red-100 text-red-800';
    case 'cancelado': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'pendiente_pago': return '⏳';
    case 'pagado': return '✅';
    case 'rechazado': return '❌';
    case 'cancelado': return '🚫';
    default: return '❓';
  }
}

function showSuccess(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

function showError(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

// Initialize on load
initAdmin();
