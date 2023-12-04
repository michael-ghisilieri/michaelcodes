import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error/Error';
import Professional from './components/Professional/Professional';

import './App.css';

const createRoutes = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <div className="body-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default createRoutes;
