import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS abierto para desarrollo
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN || "APP_USR-6072209593804393-012714-ffcc7167b695f6d18fafa3b8e18433a7-3119038265"
});

app.post("/crear-preferencia", async (req, res) => {
  try {
    const { title, price, image } = req.body;
    
    const preference = await mercadopago.preferences.create({
      items: [
        {
          title: title || "Producto DannyCell",
          quantity: 1,
          unit_price: Number(price) || 50000,
          picture_url: image || ""
        }
      ],
      back_urls: {
        success: "https://dannycellpower.com/gracias",
        failure: "https://dannycellpower.com/error",
        pending: "https://dannycellpower.com/pendiente"
      },
      auto_return: "approved"
    });

    res.json({ id: preference.body.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creando preferencia" });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Backend DannyCell - Mercado Pago API" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend MP corriendo en puerto ${PORT}`));
