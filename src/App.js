
import React from 'react';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Featured />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
