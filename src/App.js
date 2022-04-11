import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie_detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App