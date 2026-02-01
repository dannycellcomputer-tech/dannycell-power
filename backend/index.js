// BACKEND FINAL CORREGIDO - Usa precio dinámico y SDK v2
const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Preference } = require('mercadopago');
const app = express();

app.use(cors());
app.use(express.json());

// Configurar Mercado Pago con tu Access Token de PRODUCCIÓN REAL (SDK v2)
const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-6072209593804393-012714-ffcc7167b695f6d18fafa3b8e18433a7-3119038265'
});

// Endpoint corregido - Extrae el ID correctamente
app.post('/crear-preferencia', async (req, res) => {
  try {
    console.log('📥 Datos recibidos del frontend:', req.body);
    
    const { title, price, image, orderId } = req.body;
    
    if (!title || !price || !orderId) {
      return res.status(400).json({
        error: 'Faltan datos requeridos',
        required: ['title', 'price', 'orderId'],
        received: req.body
      });
    }

    // Usar el precio dinámico del frontend
    const dynamicPrice = Number(price);
    console.log(`💰 PRECIO DINÁMICO RECIBIDO: $${dynamicPrice.toLocaleString('es-CO')}`);
    
    // Crear preferencia REAL en Mercado Pago Producción (SDK v2)
    const preference = new Preference(client);
    
    const preferenceData = {
      items: [
        {
          id: orderId,
          title: title,
          description: `Compra de ${title} - DannyCell Power`,
          picture_url: image,
          category_id: 'vehicles',
          quantity: 1,
          currency_id: 'COP',
          unit_price: dynamicPrice
        }
      ],
      back_urls: {
        success: `https://dannycellpower.web.app/payment/success`,
        failure: `https://dannycellpower.web.app/payment/failure`,
        pending: `https://dannycellpower.web.app/payment/pending`
      },
      auto_return: 'approved',
      external_reference: orderId,
      statement_descriptor: 'DannyCell Power'
    };

    console.log('🔄 Creando preferencia en Mercado Pago...');
    
    const result = await preference.create({ body: preferenceData });
    
    console.log('🔍 RESPUESTA COMPLETA DE MERCADO PAGO:', JSON.stringify(result, null, 2));
    
    // 🔥 EXTRAER EL ID CORRECTAMENTE (SDK v2)
    const preferenceId = result.id;
    const initPoint = result.init_point;
    const sandboxInitPoint = result.sandbox_init_point;
    
    console.log('✅ PREFERENCIA REAL CREADA:', preferenceId);
    console.log('✅ INIT_POINT:', initPoint);
    console.log('✅ SANDBOX_INIT_POINT:', sandboxInitPoint);
    console.log('✅ PRECIO DINÁMICO USADO:', dynamicPrice);
    console.log('✅ MODO: PRODUCCIÓN REAL');
    
    const response = {
      id: preferenceId,
      init_point: initPoint,
      sandbox_init_point: sandboxInitPoint
    };
    
    console.log('📤 RESPUESTA ENVIADA AL FRONTEND:', JSON.stringify(response, null, 2));
    
    res.json(response);

  } catch (error) {
    console.error('❌ Error general:', error);
    res.status(500).json({
      error: 'Error al procesar la solicitud',
      details: error.message
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'Backend FINAL corregido funcionando',
    precios: 'Dinámicos y reales',
    modo: 'PRODUCCIÓN',
    sdk: 'v2',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend FINAL corregido corriendo en puerto ${PORT}`);
  console.log(`💰 Precios dinámicos con Mercado Pago PRODUCCIÓN activados`);
});

module.exports = app;
