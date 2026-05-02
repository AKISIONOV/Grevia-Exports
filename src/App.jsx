import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-charcoal bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
