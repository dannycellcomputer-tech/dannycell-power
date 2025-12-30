import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Language, Product, User } from '../types';
import { TRANSLATIONS } from '../constants';

interface StoreContextType {
  // Language
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof TRANSLATIONS.es) => string;
  
  // Auth
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isLoginModalOpen: boolean;
  setLoginModalOpen: (isOpen: boolean) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
  cartCount: number;

  // Search
  isSearchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;

  // Compare (VS Mode)
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isCompareOpen: boolean;
  setCompareOpen: (isOpen: boolean) => void;

  // Quiz
  isQuizOpen: boolean;
  setQuizOpen: (isOpen: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  
  // Compare Logic
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareOpen, setCompareOpen] = useState(false);

  // Quiz Logic
  const [isQuizOpen, setQuizOpen] = useState(false);

  // Language Logic
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: keyof typeof TRANSLATIONS.es) => {
    return TRANSLATIONS[language][key] || key;
  };

  // Auth Logic
  const login = (email: string) => {
    const name = email.split('@')[0];
    setUser({ name: name.charAt(0).toUpperCase() + name.slice(1), email });
    setLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  // Cart Logic
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // Compare Logic
  const toggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 3) return prev; // Max 3 items
        return [...prev, product];
      }
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StoreContext.Provider value={{
      language, toggleLanguage, t,
      user, login, logout, isLoginModalOpen, setLoginModalOpen,
      cart, addToCart, removeFromCart, isCartOpen, setCartOpen, cartTotal, cartCount,
      isSearchOpen, setSearchOpen,
      compareList, toggleCompare, isCompareOpen, setCompareOpen,
      isQuizOpen, setQuizOpen
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};