import React from 'react';
import Header from './Components/Landingpage/Header';
import Footer from './Components/Landingpage/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="services">
          <ServicesPage />
        </div>
        <div id="testimonials">
          <TestimonialsPage />
        </div>
        <div id="clients">
          <ClientsPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;