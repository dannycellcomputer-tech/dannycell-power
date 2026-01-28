export interface ProductSpec {
  motor: string;
  battery: string;
  autonomy: string;
  maxSpeed: string;
  chargingTime: string;
  weight?: string;
  maxLoad?: string;
  frame?: string;
  incline?: string;
}

export interface PhoneSpec {
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  screen: string;
  os: string;
  connectivity?: string | string[];
}

export interface ProductComponents {
  brakes: string;
  tires: string;
  display: string;
  lights: string;
  security?: string[];
  legalRequirements?: string;
}

export interface PhoneComponents {
  os?: string;
  connectivity: string | string[];
  camera?: string;
  screen?: string;
  accessories?: string[];
}

export interface Product {
  id: string;
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  price: number;
  image: string;
  images?: string[];
  starterImage?: string;
  availableColors: string[];
  specs: ProductSpec | PhoneSpec;
  specs_en?: ProductSpec | PhoneSpec;
  components: ProductComponents | PhoneComponents;
  components_en?: ProductComponents | PhoneComponents;
  isFeatured: boolean;
  isBestSeller?: boolean;
  type: 'motorcycle' | 'phone';
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string; // Guardar color seleccionado en carrito
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type Language = 'es' | 'en';

export interface User {
  name: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface CustomerVideo {
  id: string;
  title: string;
  customerName: string;
  city: string;
  videoUrl: string;
  thumbnail?: string;
  comment: string;
}