import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Research from './pages/Research';
import Projects from './pages/Projects';
import StartupLeadership from './pages/StartupLeadership';

function App() {
  return (
    <div className="m-0 p-0 min-h-screen font-sans-serif bg-stone-950 text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/research' element={<Research />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/startupleadership' element={<StartupLeadership />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
