import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Research from './pages/Research';


function App() {
  return (
    <div className="m-0 p-0 min-h-screen font-sans-serif bg-blue-950 text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/research' element={<Research />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
