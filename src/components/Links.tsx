import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='w-full bg-blue-950 p-4 text-white'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <div className='font-bold text-xl cursor-pointer hover:text-blue-100'><Link to='/'>Po-Chun Wu</Link></div>
        </div>
        <div className='flex flex-wrap justify-center md:justify-end gap-2'>
          <div className='font-semibold md:mr-4 cursor-pointer hover:text-blue-100'><Link to='/research'>Research</Link></div>
          <div className='font-semibold md:mr-4 cursor-pointer hover:text-blue-100'><Link to='/projects'>Projects</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Links
