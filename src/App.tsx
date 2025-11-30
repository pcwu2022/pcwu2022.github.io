import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Research from './pages/Research';
import MyProjects from './pages/MyProjects';
import StartupLeadership from './pages/StartupLeadership';
import WebProjects from './pages/WebProjects';

function App() {
  // Helper component to scroll to anchor IDs included after the hash
  function ScrollToHash() {
    const location = useLocation();

    const scrollToAnchor = () => {
      const raw = window.location.hash || '' // leading '#'
      if (!raw) return
      const withoutHash = raw.slice(1) // remove first '#', e.g. '/my_projects#makentu2024'
      const parts = withoutHash.split('#')
      const anchor = parts.length > 1 ? parts.slice(1).join('#') : ''
      if (anchor) {
        // small delay to allow routed content to render
        setTimeout(() => {
          const el = document.getElementById(anchor)
          if (el) {
            try {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } catch (e) {
              el.scrollIntoView()
            }
            // focus for accessibility
            try {
              ;(el as HTMLElement).focus({ preventScroll: true })
            } catch (e) {
              ;(el as HTMLElement).focus && (el as HTMLElement).focus()
            }
          }
        }, 50)
      }
    }

    useEffect(() => {
      // run on route change
      scrollToAnchor()
      // also listen for raw hashchange events (e.g., same-route anchor changes)
      window.addEventListener('hashchange', scrollToAnchor)
      return () => window.removeEventListener('hashchange', scrollToAnchor)
    }, [location])

    return null
  }

  return (
    <div className="m-0 p-0 min-h-screen font-sans-serif bg-stone-950 text-white">
      <HashRouter>
        <ScrollToHash />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/research' element={<Research />}></Route>
          <Route path='/my_projects' element={<MyProjects />}></Route>
          <Route path='/startupleadership' element={<StartupLeadership />}></Route>
          <Route path='/projects' element={<WebProjects />}></Route>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
