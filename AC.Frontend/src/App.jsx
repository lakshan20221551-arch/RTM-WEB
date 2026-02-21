import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
    return (
        <div className="ac-theme">
            <Header />
            <main style={{ minHeight: '60vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/legal" element={<Legal />} />
                </Routes>
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default App;
