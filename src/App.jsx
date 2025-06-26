import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import About from './pages/About';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setPopupMessage(`${product.name} added to cart`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 relative flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
          <Navbar cartCount={cartItems.length} />
        </div>
        {showPopup && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
            {popupMessage}
          </div>
        )}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductsPage onAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;