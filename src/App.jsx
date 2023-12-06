import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="works" element={<Works />} />
    </Routes>
<Footer />
  </BrowserRouter>

  );
}

export default App;
