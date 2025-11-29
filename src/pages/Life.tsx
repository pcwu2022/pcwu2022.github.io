import React from 'react'
import Links from '../components/Links'
import Display from '../components/Display';

const Life  = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto p-4 md:px-8 lg:px-12'>
        <div className='p-8'>
          <div className='text-2xl font-bold mb-4'>Personal Life</div>
          <Display 
            id="acquired"
            title="Acquired Podcast"
            supporting={["A podcast I listen to in my leisure time"]}
            images={[]}
            links={[]}
          >
            <>
              <div className='mb-4'></div>
            </>
          </Display>
        </div>
      </div>
    </div>
  )
}

export default Life