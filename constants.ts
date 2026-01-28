import { Product, Testimonial, CustomerVideo } from './types';

export const WHATSAPP_NUMBER = '573206338184';
export const LOGO_URL = "https://i.postimg.cc/HLJxf34g/Gemini-Generated-Image-y3h0fjy3h0fjy3h0-Photoroom.png";
export const LOCAL_LOGO_URL = "/logo.png";

export const TRANSLATIONS = {
  es: {
    nav_home: "Inicio",
    nav_catalog: "Catálogo",
    nav_builder: "Personalizar",
    nav_contact: "Contacto",
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    search: "Buscar Producto",
    cart_title: "Tu Carrito",
    cart_empty: "No has seleccionado ningún producto",
    cart_total: "Total Estimado",
    cart_checkout: "Solicitar por WhatsApp",
    add_to_cart: "Reservar Ahora",
    buy_now: "Comprar Ahora",
    specs_tower: "Especificaciones Técnicas",
    specs_peripherals: "Equipamiento Incluido",
    contact_title: "Contáctanos",
    contact_name: "Nombre completo",
    contact_email: "Correo electrónico",
    contact_message: "Mensaje",
    contact_send: "Enviar Consulta",
    welcome: "Bienvenido",
    hero_badge: "Tecnología y Movilidad",
    hero_title: "DannyCell Power",
    hero_subtitle: "El Futuro es Hoy",
    hero_desc: "Distribuidores Oficiales. Motos eléctricas y celulares de última generación con la mejor garantía y respaldo del país.",
    hero_btn_1: "Ver Catálogo",
    hero_btn_2: "Cotizar Producto",
    featured_title: "Productos Destacados",
    featured_subtitle: "Motos eléctricas y celulares de última generación.",
    see_details: "Ver Ficha Técnica",
    feature_1: "Tecnología Avanzada",
    feature_2: "Mejor Precio",
    feature_3: "Envío Nacional",
    feature_4: "Garantía Oficial",
    price_label: "Precio contado",
    final_price: "Precio final",
    catalog_title: "Catálogo DannyCell",
    catalog_subtitle: "Encuentra la moto eléctrica o celular perfecto para ti.",
    no_products: "No hay productos disponibles.",
    back_catalog: "Volver al catálogo",
    warranty: "Garantía de Motor y Batería",
    spec_cpu: "Motor",
    spec_storage: "Autonomía",
    spec_ram: "Batería",
    spec_gpu: "Velocidad Max",
    comp_monitor: "Frenos",
    comp_keyboard: "Llantas",
    comp_mouse: "Display",
    builder_title: "Configurador de Moto",
    builder_subtitle: "Selecciona el estilo, potencia y autonomía que necesitas. Te asesoramos.",
    builder_cpu: "Potencia Motor",
    builder_ram: "Tipo Batería",
    builder_gpu: "Estilo",
    builder_storage: "Autonomía Deseada",
    builder_monitor: "Accesorios",
    builder_cta: "Cotizar Configuración",
    testimonials_title: "Pilotos DannyCell",
    testimonials_subtitle: "Ellos ya se movilizan con energía limpia.",
    shipping_title: "Envíos a todo Colombia",
    shipping_subtitle: "We deliver your bike ready to ride in any city.",
    shipping_carriers_text: "Logística especializada de carga pesada:",
    shipping_packaging: "Tu moto viaja asegurada y protegida al 100%.",
    videos_title: "Galería de Entregas",
    videos_subtitle: "La emoción de estrenar una eléctrica.",
    videos_cta_title: "Got your bike?",
    videos_cta_text: "Send us your riding video to be featured here.",
    videos_cta_btn: "Upload my Video",
    product_video_section: "En la Pista",
    product_video_subtitle: "Mira el rendimiento real de nuestras motos.",
    product_video_upload: "Upload my experience"
  },
  en: {
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_builder: "Customize",
    nav_contact: "Contact",
    login: "Login",
    logout: "Logout",
    search: "Search Model",
    cart_title: "Your Garage",
    cart_empty: "No bikes selected",
    cart_total: "Estimated Total",
    cart_checkout: "Order via WhatsApp",
    add_to_cart: "Reserve Now",
    buy_now: "Buy Now",
    specs_tower: "Technical Specs",
    specs_peripherals: "Included Equipment",
    contact_title: "Contact Us",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_message: "Message",
    contact_send: "Send Inquiry",
    welcome: "Welcome",
    hero_badge: "100% Electric Mobility",
    hero_title: "DannyCell Power",
    hero_subtitle: "The Future is Now",
    hero_desc: "Official Ofero Distributors. Electric Motorcycles, Scooters and Bicycles with the best warranty and support in the country.",
    hero_btn_1: "View Catalog",
    hero_btn_2: "Quote Bike",
    featured_title: "Featured Models",
    featured_subtitle: "Speed, style, and zero emissions.",
    see_details: "View Specs",
    feature_1: "Zero Emissions",
    feature_2: "Total Savings",
    feature_3: "National Shipping",
    feature_4: "Battery Warranty",
    price_label: "Cash Price",
    final_price: "Final Price",
    catalog_title: "Ofero Catalog",
    catalog_subtitle: "Find the perfect electric bike for your lifestyle.",
    no_products: "No bikes available.",
    back_catalog: "Back to Catalog",
    warranty: "Motor & Battery Warranty",
    spec_cpu: "Motor",
    spec_storage: "Range",
    spec_ram: "Battery",
    spec_gpu: "Max Speed",
    comp_monitor: "Brakes",
    comp_keyboard: "Tires",
    comp_mouse: "Display",
    builder_title: "Bike Configurator",
    builder_subtitle: "Select the style, power, and range you need. We advise you.",
    builder_cpu: "Motor Power",
    builder_ram: "Battery Type",
    builder_gpu: "Style",
    builder_storage: "Desired Range",
    builder_monitor: "Accessories",
    builder_cta: "Quote Configuration",
    testimonials_title: "DannyCell Riders",
    testimonials_subtitle: "They already move with clean energy.",
    shipping_title: "Shipping throughout Colombia",
    shipping_subtitle: "We deliver your bike ready to ride in any city.",
    shipping_carriers_text: "Specialized heavy cargo logistics:",
    shipping_packaging: "Your bike travels 100% insured and protected.",
    videos_title: "Delivery Gallery",
    videos_subtitle: "The excitement of getting a new electric bike.",
    videos_cta_title: "Got your bike?",
    videos_cta_text: "Send us your riding video to be featured here.",
    videos_cta_btn: "Upload my Video",
    product_video_section: "On the Track",
    product_video_subtitle: "See the real performance of our bikes.",
    product_video_upload: "Upload my experience"
  }
};

export const PRODUCTS: Product[] = [
  {
    id: "nmotor-sport",
    name: "NMOTOR Sport 72V",
    name_en: "NMOTOR Sport 72V",
    description: "La máxima potencia de Ofero. Una moto eléctrica tipo Maxi-Scooter diseñada para dominar la carretera. Autonomía superior para viajes largos.",
    description_en: "Ofero's maximum power. A Maxi-Scooter style electric motorcycle designed to dominate the road. Superior range for long trips.",
    price: 12000000,
    isFeatured: true,
    isBestSeller: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/4NZhj3v6/Whats-App-Image-2025-12-27-at-5-04-14-PM-(4)-upscayl-5x-upscayl-standard-4x-Photoroom.png",
    images: [
      "https://i.postimg.cc/4NZhj3v6/Whats-App-Image-2025-12-27-at-5-04-14-PM-(4)-upscayl-5x-upscayl-standard-4x-Photoroom.png",
      "https://i.postimg.cc/B6s3qym3/Captura-de-pantalla-2025-12-28-160223-upscayl-3x-upscayl-standard-4x.png", 
      "https://i.postimg.cc/ZY7GgCtH/Captura-de-pantalla-2025-12-28-160243-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/W1vcmxPT/Captura-de-pantalla-2025-12-28-160308.png",
      "https://i.postimg.cc/kMKjNGMb/Captura-de-pantalla-2025-12-28-160315-upscayl-4x-upscayl-standard-4x.png"
    ],
    availableColors: ["Blanco Lujo", "Negro Clásico", "Rojo"],
    specs: {
      motor: "72V 5500W (Max 8600W)",
      battery: "Litio 72V 55Ah (4kWh)",
      autonomy: "Hasta 100KM",
      maxSpeed: "100 - 110 km/h",
      chargingTime: "8 horas"
    },
    specs_en: {
      motor: "72V 5500W (Max 8600W)",
      battery: "Lithium 72V 55Ah (4kWh)",
      autonomy: "Up to 100KM",
      maxSpeed: "100 - 110 km/h",
      chargingTime: "8 hours"
    },
    components: {
      brakes: "Disco / Disco",
      tires: "110/70-13\"",
      display: "Digital LCD",
      lights: "Full LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Disc / Disc",
      tires: "110/70-13\"",
      display: "Digital LCD",
      lights: "Full LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "picassio-retro",
    name: "Ofero Picassio",
    name_en: "Ofero Picassio",
    description: "Estilo retro italiano con corazón tecnológico. Elegancia clásica con motor potente de 1800W. Perfecta para la ciudad con clase.",
    description_en: "Italian retro style with a technological heart. Classic elegance with powerful 1800W motor. Perfect for the city with class.",
    price: 7250000,
    isFeatured: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/fbxVHn3c/Picassio-2-Photoroom.png",
    images: [
      "https://i.postimg.cc/fbxVHn3c/Picassio-2-Photoroom.png",
      "https://i.postimg.cc/CKrCYThz/Captura-de-pantalla-2025-12-28-155548-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/B68TnYbY/Captura-de-pantalla-2025-12-28-155621-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/zvCRy9rz/Captura-de-pantalla-2025-12-28-155634-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/52x8CNj4/Captura-de-pantalla-2025-12-28-155701-upscayl-3x-upscayl-standard-4x.png"
    ],
    availableColors: ["Blanco Lujo", "Negro Clásico", "Naranja Energético"],
    specs: {
      motor: "72V 1800W",
      battery: "Litio 72V 24Ah (1728Wh)",
      autonomy: "Hasta 100KM (Eco)",
      maxSpeed: "70 - 80 km/h",
      chargingTime: "6 horas"
    },
    specs_en: {
      motor: "72V 1800W",
      battery: "Lithium 72V 24Ah (1728Wh)",
      autonomy: "Up to 100KM (Eco)",
      maxSpeed: "70 - 80 km/h",
      chargingTime: "6 hours"
    },
    components: {
      brakes: "Disco / Disco",
      tires: "110/70-12\"",
      display: "Digital Retro",
      lights: "LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Disc / Disc",
      tires: "110/70-12\"",
      display: "Digital Retro",
      lights: "LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "stareer-3",
    name: "Stareer 3",
    name_en: "Stareer 3",
    description: "Diseño robusto y cuadrado para mayor presencia. Ideal para quienes buscan un equilibrio entre potencia y comodidad.",
    description_en: "Robust and square design for greater presence. Ideal for those looking for a balance between power and comfort.",
    price: 5500000,
    isFeatured: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/28pnw79j/Captura-de-pantalla-2025-12-28-163107-upscayl-5x-upscayl-lite-4x-Photoroom.png",
    images: [
      "https://i.postimg.cc/28pnw79j/Captura-de-pantalla-2025-12-28-163107-upscayl-5x-upscayl-lite-4x-Photoroom.png",
      "https://i.postimg.cc/vHtgLdVC/9-upscayl-3x-upscayl-standard-4x-Photoroom.png",
      "https://i.postimg.cc/HsYsm8rt/5-upscayl-5x-upscayl-standard-4x-Photoroom.png",
      "https://i.postimg.cc/QdPXc60R/2-upscayl-5x-upscayl-standard-4x-Photoroom.png",
      "https://i.postimg.cc/26drRCmt/34-upscayl-5x-upscayl-standard-4x-Photoroom.png"
    ],
    availableColors: ["Amarillo", "Plateado", "Rojo"],
    specs: {
      motor: "48V 1000W",
      battery: "Litio 48V 24Ah (1152Wh)",
      autonomy: "Hasta 70KM (Eco)",
      maxSpeed: "46 - 53 km/h",
      chargingTime: "6-8 horas"
    },
    specs_en: {
      motor: "48V 1000W",
      battery: "Lithium 48V 24Ah (1152Wh)",
      autonomy: "Up to 70KM (Eco)",
      maxSpeed: "46 - 53 km/h",
      chargingTime: "6-8 hours"
    },
    components: {
      brakes: "Disco / Disco",
      tires: "3.0-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Disc / Disc",
      tires: "3.0-10\"",
      display: "Digital",
      lights: "LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "stareer-2",
    name: "Stareer 2",
    name_en: "Stareer 2",
    description: "Eficiencia y estilo utilitario. La Stareer 2 ofrece una autonomía excelente para el día a día.",
    description_en: "Efficiency and utilitarian style. The Stareer 2 offers excellent range for everyday use.",
    price: 4500000,
    isFeatured: false,
    type: 'motorcycle',
    image: "https://i.postimg.cc/sDh4CD06/Stareer-2-1-removebg-preview-upscayl-6x-upscayl-lite-4x.png",
    images: [
      "https://i.postimg.cc/sDh4CD06/Stareer-2-1-removebg-preview-upscayl-6x-upscayl-lite-4x.png",
      "https://i.postimg.cc/L4Qz1MLq/Captura-de-pantalla-2025-12-28-162735-upscayl-5x-upscayl-lite-4x.png",
      "https://i.postimg.cc/jq3z7rP3/Captura-de-pantalla-2025-12-28-162739-upscayl-5x-upscayl-lite-4x.png",
      "https://i.postimg.cc/PrL1bFQF/Captura-de-pantalla-2025-12-28-162743-upscayl-5x-upscayl-lite-4x.png",
      "https://i.postimg.cc/wTtD5bQS/Captura-de-pantalla-2025-12-28-162747-upscayl-5x-upscayl-lite-4x.png"
    ],
    availableColors: ["Negro Mateo", "Rojo Llama", "Blanco Crema", "Gris"],
    specs: {
      motor: "48V 800W",
      battery: "Litio 48V 20Ah (960Wh)",
      autonomy: "Hasta 60KM (Eco)",
      maxSpeed: "46 - 53 km/h",
      chargingTime: "4-6 horas"
    },
    specs_en: {
      motor: "48V 800W",
      battery: "Lithium 48V 20Ah (960Wh)",
      autonomy: "Up to 60KM (Eco)",
      maxSpeed: "46 - 53 km/h",
      chargingTime: "4-6 hours"
    },
    components: {
      brakes: "Tambor / Tambor",
      tires: "3.0-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Drum / Drum",
      tires: "3.0-10\"",
      display: "Digital",
      lights: "LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "magical-3",
    name: "Magical 3",
    name_en: "Magical 3",
    description: "Diseño encantador con colores pastel. Ligera, fácil de manejar y perfecta para trayectos urbanos.",
    description_en: "Charming design with pastel colors. Lightweight, easy to handle, and perfect for urban trips.",
    price: 4200000,
    isFeatured: false,
    type: 'motorcycle',
    image: "https://i.postimg.cc/JhJpPn5R/bici-moto-electrica-ofero-magical-3-con-removebg-preview.png",
    images: [
      "https://i.postimg.cc/dt2nTVm7/bici-moto-electrica-ofero-magical-3-con-removebg-preview-upscayl-16x-upscayl-lite-4x.png",
      "https://i.postimg.cc/4dC6nvc4/Captura-de-pantalla-2025-12-28-161145-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/DyfqWwSG/Captura-de-pantalla-2025-12-28-161219-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/XJ05nVRD/Captura-de-pantalla-2025-12-28-161226-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/wTbs7c8p/Captura-de-pantalla-2025-12-28-161237-upscayl-2x-upscayl-standard-4x.png"
    ],
    availableColors: ["Durazno Pastel", "Verde Menta", "Rosado Pastel"],
    specs: {
      motor: "48V 600W",
      battery: "Litio 48V 20Ah (960Wh)",
      autonomy: "Hasta 60KM (Eco)",
      maxSpeed: "37 - 42 km/h",
      chargingTime: "4-6 horas"
    },
    specs_en: {
      motor: "48V 600W",
      battery: "Lithium 48V 20Ah (960Wh)",
      autonomy: "Up to 60KM (Eco)",
      maxSpeed: "37 - 42 km/h",
      chargingTime: "4-6 hours"
    },
    components: {
      brakes: "Tambor / Tambor",
      tires: "2.75-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Drum / Drum",
      tires: "2.75-10\"",
      display: "Digital",
      lights: "LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "galaxy-3",
    name: "Galaxy 3",
    name_en: "Galaxy 3",
    description: "Bicicleta eléctrica versátil. Compacta pero potente, con batería de litio.",
    description_en: "Versatile electric bicycle. Compact yet powerful, with lithium battery.",
    price: 2900000,
    isFeatured: true,
    isBestSeller: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/x826bSwF/bicicleta-electrica-ofero-rojo-galaxy-3-1-removebg-preview.png",
    images: [
      "https://i.postimg.cc/x826bSwF/bicicleta-electrica-ofero-rojo-galaxy-3-1-removebg-preview.png",
      "https://i.postimg.cc/DwrFtncm/Captura-de-pantalla-2025-12-28-161635-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/bJCq3gR8/Captura-de-pantalla-2025-12-28-161700-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/d09sTwkw/Captura-de-pantalla-2025-12-28-161625-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/QCzxxmB4/Captura-de-pantalla-2025-12-28-161605-upscayl-2x-upscayl-standard-4x.png"
    ],
    availableColors: ["Negro", "Azul", "Perla", "Rojo"],
    specs: {
      motor: "48V 500W",
      battery: "Litio 48V 12Ah (576Wh)",
      autonomy: "Hasta 45KM (Eco)",
      maxSpeed: "34 - 40 km/h",
      chargingTime: "4-6 horas"
    },
    specs_en: {
      motor: "48V 500W",
      battery: "Lithium 48V 12Ah (576Wh)",
      autonomy: "Up to 45KM (Eco)",
      maxSpeed: "34 - 40 km/h",
      chargingTime: "4-6 hours"
    },
    components: {
      brakes: "Tambor / Tambor",
      tires: "2.75-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Desbloqueo NFC", "IPX7"]
    },
    components_en: {
      brakes: "Drum / Drum",
      tires: "2.75-10\"",
      display: "Digital",
      lights: "LED",
      security: ["NFC Unlock", "IPX7"]
    }
  },
  {
    id: "ledo-3",
    name: "Ledo 3",
    name_en: "Ledo 3",
    description: "Tu entrada al mundo eléctrico. Económica, ligera y fiable.",
    description_en: "Your entry into the electric world. Economical, lightweight, and reliable.",
    price: 2500000,
    isFeatured: true,
    isBestSeller: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/c4QNjx1r/L3-1336-removebg-preview.png",
    images: [
      "https://i.postimg.cc/c4QNjx1r/L3-1336-removebg-preview.png",
      "https://i.postimg.cc/9MRcgT8s/Captura-de-pantalla-2025-12-28-162030-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/Gh1bz4kN/Captura-de-pantalla-2025-12-28-162043-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/0yyRHDrB/Captura-de-pantalla-2025-12-28-162059-upscayl-2x-upscayl-lite-4x.png",
      "https://i.postimg.cc/ry5kdqBV/Captura-de-pantalla-2025-12-28-162053-upscayl-2x-upscayl-standard-4x.png"
    ],
    availableColors: ["Rosado", "Verde", "Negro"],
    specs: {
      motor: "48V 500W",
      battery: "Litio 48V 12Ah (576Wh)",
      autonomy: "Hasta 45KM (Eco)",
      maxSpeed: "34 - 40 km/h",
      chargingTime: "4-6 horas"
    },
    specs_en: {
      motor: "48V 500W",
      battery: "Lithium 48V 12Ah (576Wh)",
      autonomy: "Up to 45KM (Eco)",
      maxSpeed: "34 - 40 km/h",
      chargingTime: "4-6 horas"
    },
    components: {
      brakes: "Tambor / Tambor",
      tires: "2.5-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Alarma", "IPX5"]
    },
    components_en: {
      brakes: "Drum / Drum",
      tires: "2.5-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Alarm", "IPX5"]
    }
  },
  {
    id: "ledo-2",
    name: "Ledo 2",
    name_en: "Ledo 2",
    description: "La opción más accesible. Batería de ácido plomo probada y duradera.",
    description_en: "The most accessible option. Tested and durable lead-acid battery.",
    price: 2100000,
    isFeatured: false,
    type: 'motorcycle',
    image: "https://i.postimg.cc/C5Tj6HJY/e33350cd8a6a6c2e993847880f66b6b7.webp",
    images: [
      "https://i.postimg.cc/C5Tj6HJY/e33350cd8a6a6c2e993847880f66b6b7.webp",
      "https://i.postimg.cc/sxTKBQyH/Captura-de-pantalla-2025-12-28-162340-upscayl-2x-upscayl-lite-4x.png",
      "https://i.postimg.cc/ryjfZbWV/Captura-de-pantalla-2025-12-28-162451-upscayl-3x-upscayl-lite-4x.png",
      "https://i.postimg.cc/QNmfYP5p/Captura-de-pantalla-2025-12-28-162457-upscayl-3x-upscayl-lite-4x.png",
      "https://i.postimg.cc/BQvMrgch/Captura-de-pantalla-2025-12-28-162501-upscayl-5x-upscayl-lite-4x.png"
    ],
    availableColors: ["Blanco", "Negro", "Rosado"],
    specs: {
      motor: "48V 500W",
      battery: "Ácido Plomo 48V 12Ah",
      autonomy: "Hasta 35KM (Eco)",
      maxSpeed: "31 - 37 km/h",
      chargingTime: "8 horas"
    },
    specs_en: {
      motor: "48V 500W",
      battery: "Lead Acid 48V 12Ah",
      autonomy: "Up to 35KM (Eco)",
      maxSpeed: "31 - 37 km/h",
      chargingTime: "8 horas"
    },
    components: {
      brakes: "Tambor / Tambor",
      tires: "60/100-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Alarma", "IPX5"]
    },
    components_en: {
      brakes: "Drum / Drum",
      tires: "60/100-10\"",
      display: "Digital",
      lights: "LED",
      security: ["Alarm", "IPX5"]
    }
  },
  {
    id: "trailx-t3",
    name: "TRAILX T3",
    name_en: "TRAILX T3",
    description: "Scooter todoterreno con doble suspensión y autonomía extendida. Potencia para cualquier camino.",
    description_en: "All-terrain scooter with dual suspension and extended range. Power for any path.",
    price: 2100000,
    isFeatured: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/MpR28vPy/imagen-2025-12-28-135802509-Photoroom.png",
    images: [
      "https://i.postimg.cc/MpR28vPy/imagen-2025-12-28-135802509-Photoroom.png",
      "https://i.postimg.cc/x8cHkrhg/Captura-de-pantalla-2025-12-28-141100-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/v8NfJBx0/Captura-de-pantalla-2025-12-28-141039-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/8CTSBLDk/Captura-de-pantalla-2025-12-28-142811-upscayl-2x-upscayl-standard-4x.png"
    ],
    availableColors: ["Negro Mate", "Verde Militar"],
    specs: {
      motor: "500W",
      battery: "Litio 48V 10.4Ah",
      autonomy: "Hasta 45KM (Eco)",
      maxSpeed: "40 km/h",
      chargingTime: "5.5 horas"
    },
    specs_en: {
      motor: "500W",
      battery: "Lithium 48V 10.4Ah",
      autonomy: "Up to 45KM (Eco)",
      maxSpeed: "40 km/h",
      chargingTime: "5.5 hours"
    },
    components: {
      brakes: "Tambor / Electrónico",
      tires: "10x2.75\" Off-road",
      display: "Digital",
      lights: "Doble Faro LED",
      security: ["IPX5", "Doble Suspensión"]
    },
    components_en: {
      brakes: "Drum / Electronic",
      tires: "10x2.75\" Off-road",
      display: "Digital",
      lights: "Dual LED",
      security: ["IPX5", "Dual Suspension"]
    }
  },
  {
    id: "flex-f3",
    name: "FLEX F3",
    name_en: "FLEX F3",
    description: "Scooter eléctrica ligera y plegable. Autonomía hasta 30KM. Ideal para la ciudad.",
    description_en: "Lightweight and foldable electric scooter. Range up to 30KM. Ideal for the city.",
    price: 1200000,
    isFeatured: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/HWXyVCZD/imagen-2025-12-28-142107831-Photoroom.png",
    images: [
      "https://i.postimg.cc/HWXyVCZD/imagen-2025-12-28-142107831-Photoroom.png",
      "https://i.postimg.cc/pTyHhxYf/Captura-de-pantalla-2025-12-28-154856.png",
      "https://i.postimg.cc/s2Tzg1S3/imagen-2025-12-28-154918085.png"
    ],
    availableColors: ["Gris Oscuro", "Negro"],
    specs: {
      motor: "350W",
      battery: "Litio 36V 7.8Ah",
      autonomy: "Hasta 30KM (Eco)",
      maxSpeed: "25 km/h",
      chargingTime: "5 horas"
    },
    specs_en: {
      motor: "350W",
      battery: "Lithium 36V 7.8Ah",
      autonomy: "Up to 30KM (Eco)",
      maxSpeed: "25 km/h",
      chargingTime: "5 hours"
    },
    components: {
      brakes: "Tambor / Electrónico",
      tires: "8.5x2.125\"",
      display: "Digital",
      lights: "Delantera + Trasera",
      security: ["IPX5", "Plegable"]
    },
    components_en: {
      brakes: "Drum / Electronic",
      tires: "8.5x2.125\"",
      display: "Digital",
      lights: "Front + Rear",
      security: ["IPX5", "Foldable"]
    }
  },
  {
    id: "a6l-kick",
    name: "A6L Kickscooter",
    name_en: "A6L Kickscooter",
    description: "Patineta eléctrica ágil y plegable. La compañera perfecta para la 'última milla'.",
    description_en: "Agile and foldable electric kickscooter. The perfect companion for the 'last mile'.",
    price: 1200000,
    isFeatured: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/SKwndQND/Whats-App-Image-2025-12-27-at-5-04-15-PM-upscayl-5x-upscayl-standard-4x-Photoroom.png",
    images: [
      "https://i.postimg.cc/SKwndQND/Whats-App-Image-2025-12-27-at-5-04-15-PM-upscayl-5x-upscayl-standard-4x-Photoroom.png",
      "https://i.postimg.cc/ZnyV2D4T/Captura-de-pantalla-2025-12-28-153534-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/rpKn5p3K/Captura-de-pantalla-2025-12-28-153602-upscayl-3x-upscayl-standard-4x.png",
      "https://i.postimg.cc/RhrDSzPC/Captura-de-pantalla-2025-12-28-153609-upscayl-2x-upscayl-standard-4x.png",
      "https://i.postimg.cc/Fzcw3KfK/Captura-de-pantalla-2025-12-28-153616-upscayl-2x-upscayl-standard-4x.png"
    ],
    availableColors: ["Negro", "Gris Espacial"],
    specs: {
      motor: "250W",
      battery: "Litio 36V 7.8Ah",
      autonomy: "Hasta 25KM (Eco)",
      maxSpeed: "25 km/h",
      chargingTime: "5 horas"
    },
    specs_en: {
      motor: "250W",
      battery: "Lithium 36V 7.8Ah",
      autonomy: "Up to 25KM (Eco)",
      maxSpeed: "25 km/h",
      chargingTime: "5 hours"
    },
    components: {
      brakes: "Tambor / Electrónico",
      tires: "9x2.15\"",
      display: "Digital",
      lights: "Front + Rear",
      security: ["IPX4"]
    },
    components_en: {
      brakes: "Drum / Electronic",
      tires: "9x2.15\"",
      display: "Digital",
      lights: "Front + Rear",
      security: ["IPX4"]
    }
  },
  {
    id: "galaxy-5-lite",
    name: "Galaxy 5 Lite",
    name_en: "Galaxy 5 Lite",
    description: "La Galaxy 5 Lite es la versión más ligera de nuestra gama. Ideal para uso urbano diario.",
    description_en: "The Galaxy 5 Lite is the lightest model in our range. Perfect for daily urban use",
    price: 3200000,
    isFeatured: true,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/ncYgRMXg/Foto-tarjeta-Photoroom-upscayl-3x-upscayl-lite-4x.png",
    images: [
      "https://i.postimg.cc/ncYgRMXg/Foto-tarjeta-Photoroom-upscayl-3x-upscayl-lite-4x.png",
      "https://i.postimg.cc/TwgCKHmC/Feauture-1.jpg",
      "https://i.postimg.cc/m28V19zc/Feauture-2.jpg",
      "https://i.postimg.cc/7hqMfPqN/Feauture-4-1.jpg"
    ],
    availableColors: ["Negro", "Blanco", "Lila"],
    specs: {
      motor: "500W",
      battery: "Litio de 48V 12Ah",
      autonomy: "Hasta 45KM",
      maxSpeed: "39 km/h",
      chargingTime: "4-6 horas"
    },
    specs_en: {
      motor: "500W",
      battery: "Lithium 48V 12Ah",
      autonomy: "Up to 45KM",
      maxSpeed: "39 km/h",
      chargingTime: "4-6 hours"
    },
    components: {
      brakes: "Frenos de Tambor de 110 mm",
      tires: "2.75-10 pulgadas",
      display: "Digital LCD",
      lights: "Full LED",
      security: ["NFC", "IPX5"]
    },
    components_en: {
      brakes: "Drum Brakes 110 mm",
      tires: "2.75-10 inches",
      display: "Digital LCD",
      lights: "Full LED",
      security: ["NFC", "IPX5"]
    }
  },
  {
    id: "Katana eb-2b",
    name: "Katana EB-2B",
    name_en: "Katana EB-2B",
    description: "La Katana EB-2B es una moto eléctrica robusta con batería de plomo ácido, ideal para trabajo diario.",
    description_en: "The Katana EB-2B is a robust electric motorcycle with lead-acid battery, ideal for daily work.",
    price: 2860000,
    isFeatured: true,
    isBestSeller: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/P593Qf06/Mobulaa-EB-2B-Photoroom.png",
    images: [
      "https://i.postimg.cc/ZnwjBJrb/Mobulaa-EB-2B-01.jpg",
      "https://i.postimg.cc/cLph898v/Mobulaa-EB-2B-02.jpg",
      "https://i.postimg.cc/tCgB0Vjn/Mobulaa-EB-2B.jpg"
    ],
    availableColors: ["Rojo", "Negro"],
    specs: {
      motor: "350W",
      battery: "Plomo ácido 48V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "55 Kgs",
      maxLoad: "120 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma", "IPX4"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm", "IPX4"]
    }
  },
  {
    id: "halcon",
    name: "Halcon EB-4",
    name_en: "Halcon EB-4",
    description: "La Halcon es una moto eléctrica robusta con batería de plomo ácido, ideal para trabajo diario.",
    description_en: "The Halcon is a robust electric motorcycle with lead-acid battery, ideal for daily work.",
    price: 4299000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/bJNtGkLt/Frame321-Photoroom.png",
    images: [
      "https://i.postimg.cc/rFvxhdFy/Frame325.webp",
      "https://i.postimg.cc/wMMLrLsn/Frame321.webp",
      "https://i.postimg.cc/FFCjLWMm/Frame324.webp"
    ],
    availableColors: ["Rojo", "Negro"],
    specs: {
      motor: "350W",
      battery: "Plomo ácido 60V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "56 Kgs",
      maxLoad: "130 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma", "IPX4"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm", "IPX4"]
    }
  },
  {
    id: "kawaii-eb3",
    name: "Kawaii EB-3",
    name_en: "Kawaii EB-3",
    description: "La Kawaii EB-3 es una moto eléctrica elegante con batería de litio, perfecta para uso urbano.",
    description_en: "The Kawaii EB-3 is an elegant electric motorcycle with lithium battery, perfect for urban use.",
    price: 2519000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/jdrJNp80/Mobulaa-EB3B-01-Photoroom.png",
    images: [
      "https://i.postimg.cc/kgTV0B7C/Mobulaa-EB3B-01.webp",
      "https://i.postimg.cc/8kxmYXZV/Mobulaa-EB3B.jpg",
      "https://i.postimg.cc/hG4LmktJ/Bicimoto-Electrica-Mobulaa-EB-3B-2.webp"
    ],
    availableColors: ["Rosado", "Azul", "Blanco"],
    specs: {
      motor: "350W",
      battery: "Litio 48V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "55 Kgs",
      maxLoad: "120 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma", "IPX4"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm", "IPX4"]
    }
  },
  {
    id: "sparta-eb10",
    name: "Sparta EB-10",
    name_en: "Sparta EB-10",
    description: "Inspírate en la leyenda guerrera. La Sparta EB-10 combina fuerza griega con tecnología moderna. Con su diseño imponente y batería de plomo ácido reforzada, está construida para conquistar cualquier terreno urbano. La elección de los verdaderos guerreros de la movilidad eléctrica.",
    description_en: "Inspired by warrior legend. The Sparta EB-10 combines Greek strength with modern technology. With its imposing design and reinforced lead-acid battery, it's built to conquer any urban terrain. The choice of true electric mobility warriors.",
    price: 4059000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/R0302dsm/Frame265-1-Photoroom.png",
    images: [
      "https://i.postimg.cc/zDwfmVjm/Frame266-2.webp",
      "https://i.postimg.cc/jdsSRtgn/Frame267-1.webp",
      "https://i.postimg.cc/hjTttjRr/Frame265-1.webp"
    ],
    availableColors: ["Negro", "Gris", "Azul"],
    specs: {
      motor: "350W",
      battery: "Plomo Acido 48V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "55 Kgs",
      maxLoad: "120 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm"]
    }
  },
  {
    id: "girl-3",
    name: "Girl 3",
    name_en: "Girl 3",
    description: "Diseñada para la mujer moderna que busca estilo y potencia. La Girl 3 combina elegancia femenina con tecnología de vanguardia. Su batería de 60V te da libertad para conquistar la ciudad con confianza y belleza. La compañera perfecta para la mujer que no teme destacar.",
    description_en: "Designed for the modern woman seeking style and power. The Girl 3 combines feminine elegance with cutting-edge technology. Its 60V battery gives you freedom to conquer the city with confidence and beauty. The perfect companion for the woman who's not afraid to stand out.",
    price: 3939000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: true,
    image: "https://i.postimg.cc/rFB0cv46/Mobulaa-Girl3-Photoroom.png",
    images: [
      "https://i.postimg.cc/yNhG64r6/Mobulaa-Girl302.webp",
      "https://i.postimg.cc/pXGRx8nP/Girl-3-1.webp",
      "https://i.postimg.cc/KzNCfSP2/Mobulaa-Girl3.webp"
    ],
    availableColors: ["Rosado", "Azul", "Blanco"],
    specs: {
      motor: "350W",
      battery: "Plomo Acido 60V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "55 Kgs",
      maxLoad: "130 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm"]
    }
  },
  {
    id: "girl-4",
    name: "Girl 4",
    name_en: "Girl 4",
    description: "La evolución del estilo y la potencia. La Girl 4 redefine la elegancia femenina con un diseño más audaz y un rendimiento superior. Con su batería de 60V, te impulsa a conquistar nuevos horizontes urbanos con una sofisticación inigualable. Para la mujer que lidera el camino.",
    description_en: "The evolution of style and power. The Girl 4 redefines feminine elegance with a bolder design and superior performance. With its 60V battery, it propels you to conquer new urban horizons with unparalleled sophistication. For the woman who leads the way.",
    price: 4179000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/Ls4Ws0KK/Mobulaa-GIRL401-Photoroom.png",
    images: [
      "https://i.postimg.cc/Ls0x893f/Mobulaa-GIRL4.webp",
      "https://i.postimg.cc/59QRjCrh/QN1A8781-Photoroom.jpg",
      "https://i.postimg.cc/KcT0myk4/QN1A8779-Photoroom.jpg"
    ],
    availableColors: ["Rosado", "Azul", "Blanco"],
    specs: {
      motor: "350W",
      battery: "Plomo Acido 60V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "55 Kgs",
      maxLoad: "120 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm"]
    }
  },
  {
    id: "family-1",
    name: "Family-1 M1",
    name_en: "Family-1 M1",
    description: "La Family-1, también conocida como M1, es la trimoto eléctrica ideal para la familia moderna. Con su diseño robusto y capacidad de carga superior, es perfecta para transportar a tus seres queridos o hacer tus compras con facilidad. Disfruta de la estabilidad y seguridad de tres ruedas, impulsada por un potente motor de 500W y batería de 48V. Requiere Licencia, SOAT y Matrícula.",
    description_en: "The Family-1, also known as M1, is the ideal electric trike for the modern family. With its robust design and superior load capacity, it's perfect for transporting your loved ones or doing your shopping with ease. Enjoy the stability and safety of three wheels, powered by a powerful 500W motor and 48V battery. Requires License, SOAT, and Registration.",
    price: 4299000,
    isFeatured: true,
    isBestSeller: true,
    type: 'motorcycle',
    image: "https://i.postimg.cc/5NxLDcwM/Frame266-1-Photoroom.png",
    images: [
      "https://i.postimg.cc/6ppV4s3B/Frame266-1.webp",
      "https://i.postimg.cc/prvz244T/Frame267.webp",
      "https://i.postimg.cc/YS4181QH/Frame-265.webp"
    ],
    availableColors: ["Rojo", "Azul", "Gris"],
    specs: {
      motor: "500W",
      battery: "Plomo Acido 48V/20A",
      autonomy: "50-60 Kms",
      maxSpeed: "25-30 Km/h",
      chargingTime: "6-8 Horas",
      weight: "120 Kgs",
      maxLoad: "150 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10\"",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma"],
      legalRequirements: "Licencia, SOAT, Matrícula"
    },
    components_en: {
      brakes: "Drum",
      tires: "10\"",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm"],
      legalRequirements: "License, SOAT, Registration"
    }
  },
  {
    id: "t1-scooter",
    name: "T1",
    name_en: "T1",
    description: "La T1 es la patineta eléctrica perfecta para moverte ágilmente por la ciudad. Ultra ligera y plegable, te ofrece libertad total en tus desplazamientos diarios. Ideal para estudiantes y profesionales que buscan eficiencia y estilo.",
    description_en: "The T1 is the perfect electric scooter for agile city mobility. Ultra-lightweight and foldable, it offers total freedom in your daily commutes. Ideal for students and professionals seeking efficiency and style.",
    price: 1299000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/7LxLZDYs/Scooter-T1-Photoroom.png",
    images: [
      "https://i.postimg.cc/PqZCPKmy/Scooter-T101.webp",
      "https://i.postimg.cc/KvqkV1Gj/Scooter-T102.webp",
      "https://i.postimg.cc/7hqJv7J9/Scooter-T1.webp"
    ],
    availableColors: ["Negro", "Blanco", "Azul"],
    specs: {
      motor: "350W",
      battery: "Litio 36V 7.8Ah",
      autonomy: "25-30 Kms",
      maxSpeed: "25 km/h",
      chargingTime: "4-5 Horas",
      weight: "12 Kgs",
      maxLoad: "100 Kgs",
      frame: "Aluminio",
      incline: "15°"
    },
    components: {
      brakes: "Tambor / Electrónico",
      tires: "8.5 pulgadas",
      display: "LED Digital",
      lights: "Frontal y Trasera",
      security: ["IPX4", "Plegable"]
    },
    components_en: {
      brakes: "Drum / Electronic",
      tires: "8.5 inches",
      display: "LED Digital",
      lights: "Front and Rear",
      security: ["IPX4", "Foldable"]
    }
  },
  {
    id: "caballero-eb8",
    name: "Caballero EB-8",
    name_en: "Caballero EB-8",
    description: "El noble corredor urbano. La Caballero EB-8 combina elegancia caballeresca con potencia moderna. Su motor de 350W y batería de 60V te otorgan la fuerza de un verdadero caballero de la movilidad eléctrica. Con su marco de acero forjado y diseño imponente, domina cada calle con honor y estilo. La elección de los verdaderos nobles del asfalto.",
    description_en: "The noble urban rider. The Caballero EB-8 combines chivalrous elegance with modern power. Its 350W motor and 60V battery give you the strength of a true knight of electric mobility. With its forged steel frame and imposing design, it dominates every street with honor and style. The choice of true nobles of the asphalt.",
    price: 4299000,
    isFeatured: false,
    type: 'motorcycle',
    isBestSeller: false,
    image: "https://i.postimg.cc/fbhwgs90/Mobulaa-GIRL410-Photoroom.png",
    images: [
      "https://i.postimg.cc/cCVqg77S/Mobulaa-EB8-Caballero-Gris-1.webp",
      "https://i.postimg.cc/mDBgh4ZL/Mobulaa-GIRL410.webp",
      "https://i.postimg.cc/g0v0YjWt/Bicicleta-Electrica-EB-8CABALLERO.webp"
    ],
    availableColors: ["Negro", "Rojo", "Azul"],
    specs: {
      motor: "350W",
      battery: "Plomo Acido 60V/20A",
      autonomy: "40-50 Kms",
      maxSpeed: "25-35 Km/h",
      chargingTime: "6-8 Horas",
      weight: "60 Kgs",
      maxLoad: "120 Kgs",
      frame: "Acero Alloy",
      incline: "15°"
    },
    components: {
      brakes: "Tambor",
      tires: "10 pulgadas",
      display: "Digital",
      lights: "Frontal y Trasera",
      security: ["Alarma"]
    },
    components_en: {
      brakes: "Drum",
      tires: "10 inches",
      display: "Digital",
      lights: "Front and Rear",
      security: ["Alarm"]
    }
  },
  // CELULARES
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    name_en: "iPhone 15 Pro",
    description: "El iPhone más avanzado con titanio, chip A17 Pro y sistema de cámaras profesional. Diseñado para el máximo rendimiento.",
    description_en: "The most advanced iPhone with titanium, A17 Pro chip and professional camera system. Designed for maximum performance.",
    price: 5200000,
    isFeatured: true,
    isBestSeller: true,
    type: 'phone',
    image: "https://i.postimg.cc/6QyT3G2K/iphone-15-pro.png",
    images: [
      "https://i.postimg.cc/6QyT3G2K/iphone-15-pro.png",
      "https://i.postimg.cc/6QyT3G2K/iphone-15-pro-back.png"
    ],
    availableColors: ["Negro Titán", "Blanco Titán", "Azul Titán", "Natural Titán"],
    specs: {
      processor: "Chip A17 Pro",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Principal + 12MP Ultra Gran Angular + 12MP Teleobjetivo",
      battery: "Hasta 23 horas reproducción video",
      screen: "6.1\" Super Retina XDR OLED",
      os: "iOS 17"
    },
    specs_en: {
      processor: "A17 Pro chip",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      screen: "6.1\" Super Retina XDR OLED",
      os: "iOS 17"
    },
    components: {
      camera: "Sistema Pro de 3 cámaras",
      screen: "Pantalla Super Retina XDR con ProMotion",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      security: ["Face ID", "Secure Enclave"],
      accessories: ["Carga rápida 20W", "MagSafe", "USB-C"]
    },
    components_en: {
      camera: "Pro 3-camera system",
      screen: "Super Retina XDR display with ProMotion",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      security: ["Face ID", "Secure Enclave"],
      accessories: ["20W fast charging", "MagSafe", "USB-C"]
    }
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    name_en: "Samsung Galaxy S24 Ultra",
    description: "El flagship definitivo con S Pen integrado, cámara de 200MP y pantalla Dynamic AMOLED 2X de 6.8 pulgadas.",
    description_en: "The ultimate flagship with integrated S Pen, 200MP camera and 6.8\" Dynamic AMOLED 2X display.",
    price: 4800000,
    isFeatured: true,
    isBestSeller: true,
    type: 'phone',
    image: "https://i.postimg.cc/6QyT3G2K/samsung-s24-ultra.png",
    images: [
      "https://i.postimg.cc/6QyT3G2K/samsung-s24-ultra.png",
      "https://i.postimg.cc/6QyT3G2K/samsung-s24-ultra-back.png"
    ],
    availableColors: ["Negro Titán", "Gris Titán", "Violeta Titán", "Arena Amarilla"],
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP Principal + 50MP Periscopio + 12MP Ultra Gran Angular + 10MP Teleobjetivo 3x",
      battery: "5000mAh con carga rápida 45W",
      screen: "6.8\" Dynamic AMOLED 2X 120Hz",
      os: "Android 14 con One UI 6.1"
    },
    specs_en: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP 3x Telephoto",
      battery: "5000mAh with 45W fast charging",
      screen: "6.8\" Dynamic AMOLED 2X 120Hz",
      os: "Android 14 with One UI 6.1"
    },
    components: {
      camera: "Sistema de 4 cámaras con zoom óptico 10x",
      screen: "Pantalla Dynamic AMOLED 2X con S Pen",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "Ultra Wideband"],
      security: ["Huella dactilar ultrasónica", "Face Recognition", "Samsung Knox"],
      accessories: ["S Pen", "Carga rápida 45W", "Carga inalámbrica 15W", "Samsung DeX"]
    },
    components_en: {
      camera: "4-camera system with 10x optical zoom",
      screen: "Dynamic AMOLED 2X display with S Pen",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "Ultra Wideband"],
      security: ["Ultrasonic fingerprint", "Face Recognition", "Samsung Knox"],
      accessories: ["S Pen", "45W fast charging", "15W wireless charging", "Samsung DeX"]
    }
  },
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    name_en: "Xiaomi 14 Pro",
    description: "Potencia profesional con Leica. Cámaras certificadas Leica, Snapdragon 8 Gen 3 y pantalla Hyper-OLED de 6.73 pulgadas.",
    description_en: "Professional power with Leica. Leica-certified cameras, Snapdragon 8 Gen 3 and 6.73\" Hyper-OLED display.",
    price: 3500000,
    isFeatured: true,
    type: 'phone',
    image: "https://i.postimg.cc/6QyT3G2K/xiaomi-14-pro.png",
    images: [
      "https://i.postimg.cc/6QyT3G2K/xiaomi-14-pro.png",
      "https://i.postimg.cc/6QyT3G2K/xiaomi-14-pro-back.png"
    ],
    availableColors: ["Negro", "Blanco", "Verde"],
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Principal Leica + 50MP Teleobjetivo + 50MP Ultra Gran Angular",
      battery: "4880mAh con carga rápida 120W",
      screen: "6.73\" Hyper-OLED 120Hz 2K",
      os: "Android 14 con HyperOS"
    },
    specs_en: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Leica Main + 50MP Telephoto + 50MP Ultra Wide",
      battery: "4880mAh with 120W fast charging",
      screen: "6.73\" Hyper-OLED 120Hz 2K",
      os: "Android 14 with HyperOS"
    },
    components: {
      camera: "Sistema Leica Summilux de 3 cámaras",
      screen: "Pantalla Hyper-OLED con CrystalShield",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "Infrarrojo"],
      security: ["Huella dactilar bajo pantalla", "Face Recognition"],
      accessories: ["Carga rápida 120W", "Carga inalámbrica 50W", "Carga inversa 10W"]
    },
    components_en: {
      camera: "Leica Summilux 3-camera system",
      screen: "Hyper-OLED display with CrystalShield",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "Infrared"],
      security: ["Under-display fingerprint", "Face Recognition"],
      accessories: ["120W fast charging", "50W wireless charging", "10W reverse charging"]
    }
  },
  {
    id: "redmi-note-13-pro",
    name: "Redmi Note 13 Pro",
    name_en: "Redmi Note 13 Pro",
    description: "El rey del rendimiento medio. Cámara de 200MP, Snapdragon 7s Gen 2 y carga rápida 67K. Excelente relación calidad-precio.",
    description_en: "The mid-range performance king. 200MP camera, Snapdragon 7s Gen 2 and 67W fast charging. Excellent value for money.",
    price: 1800000,
    isFeatured: false,
    isBestSeller: true,
    type: 'phone',
    image: "https://i.postimg.cc/6QyT3G2K/redmi-note-13-pro.png",
    images: [
      "https://i.postimg.cc/6QyT3G2K/redmi-note-13-pro.png",
      "https://i.postimg.cc/6QyT3G2K/redmi-note-13-pro-back.png"
    ],
    availableColors: ["Negro", "Blanco", "Verde", "Azul"],
    specs: {
      processor: "Snapdragon 7s Gen 2",
      ram: "8GB",
      storage: "128GB",
      camera: "200MP Principal + 8MP Ultra Gran Angular + 2MP Macro",
      battery: "5100mAh con carga rápida 67W",
      screen: "6.67\" AMOLED 120Hz FHD+",
      os: "Android 13 con MIUI 14"
    },
    specs_en: {
      processor: "Snapdragon 7s Gen 2",
      ram: "8GB",
      storage: "128GB",
      camera: "200MP Main + 8MP Ultra Wide + 2MP Macro",
      battery: "5100mAh with 67W fast charging",
      screen: "6.67\" AMOLED 120Hz FHD+",
      os: "Android 13 with MIUI 14"
    },
    components: {
      camera: "Cámara principal de 200MP con OIS",
      screen: "Pantalla AMOLED Flow con Gorilla Glass 5",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "Infrarrojo", "Jack 3.5mm"],
      security: ["Huella dactilar lateral", "Face Recognition"],
      accessories: ["Carga rápida 67W", "Altavoces duales JBL", "NFC"]
    },
    components_en: {
      camera: "200MP main camera with OIS",
      screen: "AMOLED Flow display with Gorilla Glass 5",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "Infrared", "3.5mm jack"],
      security: ["Side fingerprint", "Face Recognition"],
      accessories: ["67W fast charging", "Dual JBL speakers", "NFC"]
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Méndez",
    location: "Bogotá, DC",
    text: "Compré la Stareer 3 para ir al trabajo. Me ahorro $300.000 mensuales en gasolina. La moto sube patios sin problema.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "2",
    name: "Laura Gómez",
    location: "Medellín, ANT",
    text: "La Magical 3 es hermosa. La cargo en mi apartamento y no pesa nada. DannyCell me asesoró súper bien.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    name: "Felipe Torres",
    location: "Cali, VAC",
    text: "Potencia brutal la de la NMotor. La salida es instantánea. Llegó a Cali en 3 días súper bien empacada en guacal.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export const CUSTOMER_VIDEOS: CustomerVideo[] = [
  {
    id: "v1",
    title: "¡Estrenando Nave! ⚡",
    customerName: "Juan P.",
    city: "Bogotá",
    videoUrl: "", 
    comment: "El silencio al rodar es increíble. ¡Gracias DannyCell Power!"
  },
  {
    id: "v2",
    title: "Unboxing de mi Scooter 📦",
    customerName: "Camila R.",
    city: "Medellín",
    videoUrl: "", 
    comment: "Llegó en guacal de madera, impecable. ¡Lista para rodar!"
  }
];