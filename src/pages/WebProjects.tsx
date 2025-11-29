import React from 'react'
import Links from '../components/Links'

const WebProjects = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
    <iframe
      className="w-full min-h-[80vh] border-none bg-transparent"
      src="https://pcwu2022.github.io/projects"
      style={{ display: 'block' }}
      title="Web Projects"
      allowTransparency={true}
    />
      {/* <div className='w-full max-w-7xl mx-auto p-4 md:px-8 lg:px-12'>
        <div className='p-8'></div>
          
      </div> */}
    </div>
  )
}

export default WebProjects
