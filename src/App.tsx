import React, { useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Research from './pages/Research';
import MyProjects from './pages/MyProjects';
import StartupLeadership from './pages/StartupLeadership';
import WebProjects from './pages/WebProjects';
import MarkdownFeed from './pages/MarkdownFeed';

function App() {
  // Helper component to scroll to anchor IDs included after the hash
  function ScrollToHash() {
    const location = useLocation();

    const scrollToAnchor = () => {
      const rawHash = window.location.hash || '' // leading '#'
      // Try to find the anchor in multiple places:
      // 1. ?id=... or ?section=... in window.location.search (normal query)
      // 2. ?id=... or ?section=... inside the hash (e.g. '#/page?id=id')
      // 3. fragment after an additional '#' inside the hash (existing behavior)
      let anchor = ''
      let anchorSource: 'search' | 'hash-query' | 'hash-fragment' | '' = ''

      // 1. check real search params first
      try {
        const searchParams = new URLSearchParams(window.location.search)
        if (searchParams.has('id')) {
          anchor = searchParams.get('id') || ''
          anchorSource = 'search'
        } else if (searchParams.has('section')) {
          anchor = searchParams.get('section') || ''
          anchorSource = 'search'
        }
      } catch (e) {
        // ignore
      }

      // If not found, inspect the hash string (without leading '#') for '?id=', '?section=', or a secondary '#'
      if (!anchor && rawHash) {
        const withoutHash = rawHash.slice(1) // remove leading '#'
        // If hash contains a '?', parse its query portion
        const qIndex = withoutHash.indexOf('?')
        if (qIndex !== -1) {
          const queryPartAndMaybeHash = withoutHash.slice(qIndex + 1)
          const qp = queryPartAndMaybeHash.split('#')[0]
          try {
            const params = new URLSearchParams(qp)
            if (params.has('id')) {
              anchor = params.get('id') || ''
              anchorSource = 'hash-query'
            } else if (params.has('section')) {
              anchor = params.get('section') || ''
              anchorSource = 'hash-query'
            }
          } catch (e) {
            // ignore
          }
        }

        // Fallback: existing behavior — treat trailing '#id' inside the hash
        if (!anchor) {
          const parts = withoutHash.split('#')
          anchor = parts.length > 1 ? parts.slice(1).join('#') : ''
          anchorSource = anchor ? 'hash-fragment' : ''
        }
      }

      if (anchor) {
        if (anchorSource === 'search') {
          const url = new URL(window.location.href)
          url.searchParams.delete('id')
          url.searchParams.delete('section')
          url.hash = url.hash ? `${url.hash}#${anchor}` : `#${anchor}`
          window.history.replaceState(null, '', url.toString())
        } else if (anchorSource === 'hash-query') {
          const withoutHash = rawHash.slice(1)
          const qIndex = withoutHash.indexOf('?')
          const routePart = qIndex === -1 ? withoutHash : withoutHash.slice(0, qIndex)
          const qp = qIndex === -1 ? '' : withoutHash.slice(qIndex + 1).split('#')[0]
          const params = new URLSearchParams(qp)
          params.delete('id')
          params.delete('section')
          const normalizedQuery = params.toString()
          const normalizedHash = `${routePart}${normalizedQuery ? `?${normalizedQuery}` : ''}#${anchor}`
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${normalizedHash}`)
        }

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
    <div className="m-0 p-0 min-h-screen font-sans bg-transparent text-gray-100">
      <HashRouter>
        <ScrollToHash />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/research' element={<Research />}></Route>
          <Route path='/my_projects' element={<MyProjects />}></Route>
          <Route path='/startupleadership' element={<StartupLeadership />}></Route>
          <Route path='/projects' element={<WebProjects />}></Route>
          <Route path='/markdown' element={<MarkdownFeed />}></Route>
          <Route path='/markdown/raw' element={<MarkdownFeed />}></Route>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
