import { Product, Testimonial, CustomerVideo } from './types';

export const WHATSAPP_NUMBER = "573005016723";
export const LOGO_URL = "https://i.postimg.cc/HLJxf34g/Gemini-Generated-Image-y3h0fjy3h0fjy3h0-Photoroom.png";

export const TRANSLATIONS = {
  es: {
    nav_home: "Inicio",
    nav_catalog: "Catálogo",
    nav_builder: "Personalizar",
    nav_contact: "Contacto",
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    search: "Buscar Modelo",
    cart_title: "Tu Garaje",
    cart_empty: "No has seleccionado ninguna moto",
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
    hero_badge: "Movilidad 100% Eléctrica",
    hero_title: "DannyCell Power",
    hero_subtitle: "El Futuro es Hoy",
    hero_desc: "Distribuidores Oficiales Ofero. Motos, Scooters y Bicicletas eléctricas con la mejor garantía y respaldo del país.",
    hero_btn_1: "Ver Catálogo",
    hero_btn_2: "Cotizar Moto",
    featured_title: "Modelos Destacados",
    featured_subtitle: "Velocidad, estilo y cero emisiones.",
    see_details: "Ver Ficha Técnica",
    feature_1: "Cero Emisiones",
    feature_2: "Ahorro Total",
    feature_3: "Envío Nacional",
    feature_4: "Garantía Batería",
    price_label: "Precio contado",
    final_price: "Precio final",
    catalog_title: "Catálogo Ofero",
    catalog_subtitle: "Encuentra la moto eléctrica perfecta para tu estilo de vida.",
    no_products: "No hay motos disponibles.",
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