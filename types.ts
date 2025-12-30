export interface ProductSpec {
  motor: string;
  battery: string;
  autonomy: string;
  maxSpeed: string;
  chargingTime: string;
}

export interface ProductComponents {
  brakes: string;
  tires: string;
  display: string;
  lights: string;
  security?: string[];
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
  specs: ProductSpec;
  specs_en?: ProductSpec;
  components: ProductComponents;
  components_en?: ProductComponents;
  isFeatured: boolean;
  isBestSeller?: boolean;
  availableColors?: string[]; // Nuevo campo para colores específicos
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