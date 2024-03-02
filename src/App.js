import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  const [selectedSection, setSelectedSection] = useState('Home');


  return (
    <div className="App">
      <Navbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <div className="content">
        {selectedSection === 'Home' && <Home />}
        {selectedSection === 'About' && <About />}
        {selectedSection === 'Portfolio' && <Portfolio />}
        {selectedSection === 'Skills' && <Skills />}
        {selectedSection === 'Contact' && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
