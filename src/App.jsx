import React from 'react';
import Navbar from './Componant/Navbar/Navbar';  // Correct the path if necessary
import Hero from './Componant/Hero/Hero';
import About from './Componant/About/About';
import Servecies from './Componant/Servecies/Servecies';
import Mywork from './Componant/MyWork/Mywork';
import Contact from './Componant/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Servecies/>
      <Mywork/>
      <Contact/>
    </div>
  );
}

export default App;
