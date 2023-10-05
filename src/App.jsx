import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Home />
          <ScrollToTopButton />
        </>} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
