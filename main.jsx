import React from 'react';
import { createRoot } from 'react-dom/client';
import './colors_and_type.css';
import './marketing.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import Quote from './Quote.jsx';
import Pricing from './Pricing.jsx';
import CTA from './CTA.jsx';
import Footer from './Footer.jsx';

function MarketingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Quote />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarketingPage />
  </React.StrictMode>
);
