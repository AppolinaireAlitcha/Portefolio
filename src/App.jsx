import React from 'react';
import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import TransitionEffect from './components/TransitionEffect';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
            <AnimatePresence mode='wait'>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/apropos" element={<About />} />
                <Route path="/projets" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
              </Routes>
            </AnimatePresence>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;