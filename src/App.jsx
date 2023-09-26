import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Work from './pages/Work';
import Services from './pages/Services';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Work />
          <Services />
          <Process />
          <About />
          <Contact />
          <ScrollToTopButton />
        </>} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
