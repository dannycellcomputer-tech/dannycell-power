const functions = require("firebase-functions");
const { MercadoPagoConfig, Preference } = require("mercadopago");

const client = new MercadoPagoConfig({
  accessToken: "APP_USR-7832617115312453-012714-50bedc2d5e309f3b5f20bda68a11f326-3163530426"
});

exports.crearPreferencia = functions.https.onRequest(async (req, res) => {
  try {
    const { titulo, precio } = req.body;

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            title: titulo,
            quantity: 1,
            currency_id: "COP",
            unit_price: Number(precio)
          }
        ],
        back_urls: {
          success: "https://dannycellpower.com/gracias",
          failure: "https://dannycellpower.com/error",
          pending: "https://dannycellpower.com/pendiente"
        },
        auto_return: "approved"
      }
    });

    res.json({
      id: response.id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creando preferencia" });
  }
});
