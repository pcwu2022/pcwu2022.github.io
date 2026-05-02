import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'
import DisplaySection from '../components/DisplaySection'
import projectsContent from '../content/myProjects.json'

const MyProjects = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto px-2 py-2 md:px-8 lg:px-12'>
        <div className='p-6 md:p-8'>
          <Link
            to="/projects"
            className="block mb-6 px-6 py-3 border-blue-800 border-2 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-200 text-lg text-center"
          >
            View My Creations Online
          </Link>
          <div className='text-2xl font-bold mb-4'>{projectsContent.title}</div>
          {projectsContent.items.map((item) => (
            <DisplaySection key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProjects
