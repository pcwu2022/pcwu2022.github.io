import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Research from './pages/Research';
import MyProjects from './pages/MyProjects';
import StartupLeadership from './pages/StartupLeadership';
import WebProjects from './pages/WebProjects';

function App() {
  return (
    <div className="m-0 p-0 min-h-screen font-sans-serif bg-stone-950 text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/research' element={<Research />}></Route>
          <Route path='/my_projects' element={<MyProjects />}></Route>
          <Route path='/startupleadership' element={<StartupLeadership />}></Route>
          <Route path='/web_projects' element={<WebProjects />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
