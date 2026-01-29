import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware para logging de requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

// CORS abierto para desarrollo
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// JSON parser con logging
app.use(express.json({ limit: '10mb' }));

// Middleware para logging del body
app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log('📦 Body recibido:', JSON.stringify(req.body, null, 2));
  }
  next();
});

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN || "APP_USR-6072209593804393-012714-ffcc7167b695f6d18fafa3b8e18433a7-3119038265"
});

app.post("/crear-preferencia", async (req, res) => {
  try {
    console.log('🔍 req.body completo:', req.body);
    
    const { title, price, image } = req.body;
    
    console.log('✅ Datos extraídos:', { title, price, image });
    
    // Si no hay datos, usar valores por defecto para debugging
    const finalTitle = title || "Producto DannyCell";
    const finalPrice = price ? Number(price) : 50000;
    const finalImage = image || "";
    
    console.log('🎯 Datos finales:', { finalTitle, finalPrice, finalImage });
    
    const preferenceData = {
      items: [
        {
          title: String(finalTitle),
          unit_price: finalPrice,
          quantity: 1,
          currency_id: "COP",
          picture_url: String(finalImage)
        }
      ],
      back_urls: {
        success: "https://dannycellpower.web.app/gracias",
        failure: "https://dannycellpower.web.app/error",
        pending: "https://dannycellpower.web.app/pendiente"
      },
      auto_return: "approved"
    };
    
    console.log('📤 Enviando a Mercado Pago:', JSON.stringify(preferenceData, null, 2));
    
    const preference = await mercadopago.preferences.create(preferenceData);

    console.log('✅ Preferencia creada:', preference.body.id);
    console.log('📋 Items en respuesta:', JSON.stringify(preference.body.items, null, 2));
    
    res.json({ id: preference.body.id });
  } catch (error) {
    console.error('❌ Error creando preferencia:', error);
    res.status(500).json({ error: "Error creando preferencia" });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Backend DannyCell - Mercado Pago API" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend MP corriendo en puerto ${PORT}`));
