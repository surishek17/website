import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackToTopButton from './components/backtotop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;

