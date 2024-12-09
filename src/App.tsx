import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import About from './components/About';
import Approach from './components/Approach';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <About />
        <Approach />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;