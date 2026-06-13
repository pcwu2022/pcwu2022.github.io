import React from 'react'
import Links from '../components/Links'
import DisplaySection from '../components/DisplaySection'
import leadershipContent from '../content/startupLeadership.json'

const StartupLeadership  = () => {
  return (
    <div className='m-0 p-0 min-h-screen bg-transparent'>
      <Links />
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12'>
        <div className='p-4 md:p-6'>
          <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-8'>
            {leadershipContent.title}
          </h2>
          <div className="space-y-6">
            {leadershipContent.items.map((item) => (
              <DisplaySection key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartupLeadership