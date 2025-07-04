import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import SocialResponsibility from './components/SocialResponsibility';
import Product from './components/Product';
import Recipes from './components/Recipes';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <SocialResponsibility />
      <Product />
      <Recipes />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;