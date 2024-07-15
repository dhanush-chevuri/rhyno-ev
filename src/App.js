import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Rentals from './components/Rentals';
import Compare from './components/compare';
import Product from './components/product';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import WebsitePolicy from './components/WebsitePolicy';
import CheckoutForm from './components/CheckoutForm'; // Import the CheckoutForm component
import "C:/Users/DELL/rhyno-ev/src/styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/pre-book" element={<CheckoutForm />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/website-policy" element={<WebsitePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
