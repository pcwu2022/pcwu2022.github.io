import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='w-full bg-blue-900 p-4 text-white'>
      <div className='ml-4 font-bold inline-block'>Po-Chun Wu</div>
      <div className='inline-block ml-10'></div>
      <div className='ml-4 mr-4 inline-block rounded-md p-2 pl-4 pr-4 bg-blue-700 font-semibold cursor-pointer hover:bg-white hover:text-blue-950'><Link to='/'>Home</Link></div>
      <div className='ml-4 mr-4 inline-block rounded-md p-2 pl-4 pr-4 bg-blue-700 font-semibold cursor-pointer hover:bg-white hover:text-blue-950'><Link to='/research'>Research</Link></div>
      <div className='ml-4 mr-4 inline-block rounded-md p-2 pl-4 pr-4 bg-blue-700 font-semibold cursor-pointer hover:bg-white hover:text-blue-950'><Link to='/projects'>Projects</Link></div>
    </div>
  )
}

export default Links
