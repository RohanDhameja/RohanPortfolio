import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AutismAwareness from './components/AutismAwareness';
import Music from './components/Music';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AutismAwareness />
        <Music />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;