import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
    {/* <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />

    </Routes> */}

    <Home/>
    <About/>
    <Skills />
    <Projects />
    {/* <About /> */}
    <Contact />
      
    </div>
  );
}

export default App;
