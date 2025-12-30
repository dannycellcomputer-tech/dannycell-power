import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Builder from './pages/Builder';
import WhatsAppWidget from './components/WhatsAppWidget';
import LoginModal from './components/LoginModal';
import CartSidebar from './components/CartSidebar';
import SearchOverlay from './components/SearchOverlay';
import CompareModal from './components/CompareModal';
import FindMyBikeQuiz from './components/FindMyBikeQuiz';
import { StoreProvider } from './context/StoreContext';

// Componente para reiniciar el scroll al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzar el scroll al inicio de la página inmediatamente
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/personalizar" element={<Builder />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppWidget />
          <LoginModal />
          <CartSidebar />
          <SearchOverlay />
          <CompareModal />
          <FindMyBikeQuiz />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;