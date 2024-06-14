import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Intro3 from './components/Intro3';
import './App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('intro');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="app">
      {currentScreen === 'intro' && <Intro navigateTo={navigateTo} />}
      {currentScreen === 'intro3' && <Intro3 navigateTo={navigateTo} />}
      {currentScreen === 'home' && (
        <>
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
