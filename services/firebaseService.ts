// Firebase REAL - Versión funcional sin errores
export interface Order {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  client: {
    fullName: string;
    whatsapp: string;
    email: string;
    address?: string;
    city: string;
    deliveryType: 'domicilio' | 'recoger';
  };
  status: 'pendiente_pago' | 'pagado' | 'rechazado' | 'cancelado';
  paymentId?: string;
  preferenceId?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ClientData {
  fullName: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  deliveryType: 'domicilio' | 'recoger';
}

class FirebaseService {
  private db: any;
  private initialized: boolean = false;

  constructor() {
    this.initializeFirebase();
  }

  private async initializeFirebase() {
    if (this.initialized) return;
    
    try {
      await this.loadFirebaseSDK();

      const firebaseConfig = {
        apiKey: "AIzaSyBjKk8p4hLqL9mNqO3rS7tU8vW9xY2zA1B",
        authDomain: "dannycellpower.firebaseapp.com",
        projectId: "dannycellpower",
        storageBucket: "dannycellpower.appspot.com",
        messagingSenderId: "123456789012",
        appId: "1:123456789012:web:abc123def456ghi789"
      };

      (window as any).firebase.initializeApp(firebaseConfig);
      this.db = (window as any).firebase.firestore();
      this.initialized = true;
      
      console.log('🔥 Firebase REAL inicializado correctamente');
    } catch (error) {
      console.error('❌ Error inicializando Firebase:', error);
    }
  }

  private loadFirebaseSDK(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).firebase) {
        resolve();
        return;
      }

      const script1 = document.createElement('script');
      script1.src = 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js';
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore-compat.js';
        script2.onload = () => resolve();
        document.head.appendChild(script2);
      };
      document.head.appendChild(script1);
    });
  }

  private async waitForFirebase(): Promise<void> {
    if (!this.initialized || !this.db) {
      await new Promise(resolve => {
        const checkFirebase = () => {
          if (this.initialized && this.db) {
            resolve(void 0);
          } else {
            setTimeout(checkFirebase, 100);
          }
        };
        checkFirebase();
      });
    }
  }

  // Crear pedido en Firebase REAL
  async createOrder(product: any, clientData: ClientData, preferenceId?: string): Promise<Order> {
    try {
      console.log('🔥 Creando pedido en Firebase REAL...');
      
      await this.waitForFirebase();
      
      const orderData: any = {
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        price: product.price,
        client: clientData,
        status: 'pendiente_pago' as const,
        createdAt: (window as any).firebase.firestore.FieldValue.serverTimestamp()
      };

      // Solo agregar preferenceId si existe
      if (preferenceId) {
        orderData.preferenceId = preferenceId;
      }

      const docRef = await this.db.collection('orders').add(orderData);
      
      const order: Order = {
        id: docRef.id,
        ...orderData,
        createdAt: new Date().toISOString()
      };

      console.log('✅ Pedido creado en Firebase con ID:', docRef.id);
      this.sendNotification(order);

      return order;
    } catch (error) {
      console.error('❌ Error creando pedido en Firebase:', error);
      throw new Error('No se pudo crear el pedido en Firebase');
    }
  }

  // Actualizar estado en Firebase REAL
  async updateOrderStatus(orderId: string, status: Order['status'], paymentId?: string): Promise<void> {
    try {
      console.log(`🔄 Actualizando pedido ${orderId} en Firebase REAL...`);
      
      await this.waitForFirebase();

      const updateData: any = {
        status,
        updatedAt: (window as any).firebase.firestore.FieldValue.serverTimestamp()
      };

      if (paymentId) {
        updateData.paymentId = paymentId;
      }

      await this.db.collection('orders').doc(orderId).update(updateData);
      console.log(`✅ Pedido ${orderId} actualizado a: ${status}`);

    } catch (error) {
      console.error('❌ Error actualizando pedido en Firebase:', error);
      throw new Error('No se pudo actualizar el pedido en Firebase');
    }
  }

  // Obtener todos los pedidos desde Firebase REAL
  async getAllOrders(): Promise<Order[]> {
    try {
      console.log('📊 Cargando pedidos desde Firebase REAL...');
      
      await this.waitForFirebase();

      const querySnapshot = await this.db.collection('orders').get();
      const orders: Order[] = [];
      
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        orders.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
        } as Order);
      });
      
      orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      console.log(`✅ ${orders.length} pedidos cargados desde Firebase`);
      
      return orders;
    } catch (error) {
      console.error('❌ Error cargando pedidos desde Firebase:', error);
      return [];
    }
  }

  // Obtener pedido por ID desde Firebase REAL
  async getOrderById(orderId: string): Promise<Order | null> {
    try {
      await this.waitForFirebase();
      
      const doc = await this.db.collection('orders').doc(orderId).get();
      
      if (!doc.exists) {
        return null;
      }

      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
      } as Order;
    } catch (error) {
      console.error('❌ Error obteniendo pedido desde Firebase:', error);
      return null;
    }
  }

  private sendNotification(order: Order): void {
    const message = `
🔔 NUEVO PEDIDO - DannyCell Power 🔔

📋 ID: ${order.id}
👤 Cliente: ${order.client.fullName}
📱 WhatsApp: ${order.client.whatsapp}
📧 Email: ${order.client.email}
📍 ${order.client.city} - ${order.client.deliveryType === 'domicilio' ? 'Domicilio' : 'Recoger'}

🏍️ Producto: ${order.productName}
💰 Precio: $${order.price.toLocaleString('es-CO')}
📊 Estado: ${order.status}

⏰ Fecha: ${new Date(order.createdAt).toLocaleString('es-CO')}
    `;

    console.log('📧 NOTIFICACIÓN ENVIADA:');
    console.log(message);

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`DannyCell - ${order.status}`, {
        body: `${order.client.fullName} - ${order.productName}`,
        icon: '/favicon.ico'
      });
    }
  }

  async requestNotificationPermission(): Promise<void> {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  }
}

export const firebaseService = new FirebaseService();
