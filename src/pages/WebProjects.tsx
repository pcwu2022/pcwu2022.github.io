import React from 'react'
import Links from '../components/Links'

const WebProjects = () => {
  return (
    <div className='m-0 p-0 min-h-screen bg-transparent'>
      <Links />
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12'>
        <div className='p-4 md:p-6'>

          <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-8'>
            Creations & Demos
          </h2>

          {/* Mock Browser Frame */}
          <div className='rounded-2xl border border-blue-950/45 bg-slate-900/40 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40'>
            {/* Browser Header Bar */}
            <div className='bg-slate-950/80 border-b border-blue-950/35 px-4 py-3 flex items-center gap-4'>
              {/* Window Controls */}
              <div className='flex gap-1.5'>
                <span className='w-3 h-3 rounded-full bg-[#ef4444] opacity-80'></span>
                <span className='w-3 h-3 rounded-full bg-[#eab308] opacity-80'></span>
                <span className='w-3 h-3 rounded-full bg-[#22c55e] opacity-80'></span>
              </div>

              {/* Mock Address Bar */}
              <div className='flex-grow max-w-md mx-auto rounded-lg bg-slate-900 border border-blue-950/45 px-3 py-1 text-center text-xs text-blue-300/60 font-mono select-none truncate'>
                https://pcwu2022.github.io/projects
              </div>
            </div>

            {/* Embedded Page Content */}
            <iframe
              className="w-full min-h-[75vh] border-none bg-transparent"
              src="https://pcwu2022.github.io/projects"
              style={{ display: 'block' }}
              title="Web Projects"
              allowTransparency={true}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default WebProjects
