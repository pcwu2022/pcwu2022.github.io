import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'
import DisplaySection from '../components/DisplaySection'
import projectsContent from '../content/myProjects.json'

const MyProjects = () => {
  return (
    <div className='m-0 p-0 min-h-screen bg-transparent'>
      <Links />
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12'>
        <div className='p-4 md:p-6'>
          {/* <Link
            to="/projects"
            className="block mb-8 px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-650 hover:to-indigo-650 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 text-lg text-center hover:-translate-y-0.5 border border-blue-500/25"
          >
            View My Creations Online
          </Link> */}
          <Link
            to="https://pcwu2022.github.io/projects/"
            className="block mb-8 px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-650 hover:to-indigo-650 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 text-lg text-center hover:-translate-y-0.5 border border-blue-500/25"
          >
            View My Creations Online
          </Link>
          <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-8'>
            {projectsContent.title}
          </h2>
          <div className="space-y-6">
            {projectsContent.items.map((item) => (
              <DisplaySection key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
