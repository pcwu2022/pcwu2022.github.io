import React from 'react'
import Links from '../components/Links'
import DisplaySection from '../components/DisplaySection'
import leadershipContent from '../content/startupLeadership.json'

const StartupLeadership  = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto px-2 py-2 md:px-8 lg:px-12'>
        <div className='p-6 md:p-8'>
          <div className='text-2xl font-bold mb-4'>{leadershipContent.title}</div>
          {leadershipContent.items.map((item) => (
            <DisplaySection key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StartupLeadership