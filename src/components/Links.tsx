import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Links = () => {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navLinkClass = (path: string) => {
    const base = "text-sm font-semibold transition-all duration-200 relative py-1 px-2 rounded-lg"
    if (isActive(path)) {
      return `${base} text-blue-400 bg-blue-950/40 shadow-[0_0_15px_rgba(59,130,246,0.15)] border border-blue-500/20`
    }
    return `${base} text-gray-300 hover:text-blue-400 hover:bg-slate-900/60`
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-blue-950/30 shadow-lg shadow-black/40'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-3.5 gap-4'>
        <div className='text-center sm:text-left'>
          <Link to='/' className='font-display font-bold text-xl text-gray-100 hover:text-blue-400 transition-colors duration-200 tracking-wide'>
            Po-Chun Wu
          </Link>
        </div>
        <nav className='flex flex-wrap justify-center sm:justify-end items-center gap-1.5 sm:gap-3'>
          <Link to='/' className={navLinkClass('/')}>About</Link>
          <Link to='/my_projects' className={navLinkClass('/my_projects')}>Projects</Link>
          <Link to='/research' className={navLinkClass('/research')}>Research</Link>
          <Link to='/startupleadership' className={navLinkClass('/startupleadership')}>Startup Leadership</Link>
          <a 
            href='/documents/resume.pdf' 
            target='_blank' 
            rel='noopener noreferrer' 
            className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200 py-1 px-2"
          >
            Resume
          </a>
          <Link 
            to='/markdown' 
            className={`text-xs font-semibold px-2 py-1 rounded-md transition-all duration-200 ${
              isActive('/markdown') 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]' 
                : 'text-cyan-400 border border-cyan-500/30 bg-cyan-950/10 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/40'
            }`}
          >
            AI Feed
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Links
