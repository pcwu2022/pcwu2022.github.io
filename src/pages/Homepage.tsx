import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'
import Highlights from '../components/Highlights'
import RichText from '../components/RichText'
import homepageContent from '../content/homepage.json'

const Homepage = () => {
  const { profile, about, highlights, highlightsTitle } = homepageContent

  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto px-2 py-2 md:px-8 lg:px-12'>
        <div className='md:inline-block align-top w-full md:w-1/3 p-4 md:p-8'>
          <div className='w-full mb-8 max-w-xs mx-auto md:mx-0'>
            <img src={profile.photo.src} alt={profile.photo.alt} className="w-3/4 sm:w-4/5 md:w-full mx-auto block" style={{
              borderRadius: "50%"
            }}/>
          </div>
          <div className='text-2xl font-bold mb-4 text-center md:text-left'>{profile.name}</div>
          <div className='mt-2 space-y-6 text-left'>
            {profile.affiliations.map((affiliation) => (
              <div key={affiliation.name} className='relative'>
                <div className='flex items-start gap-2 justify-start'>
                  <div className='font-semibold'>{affiliation.name}</div>
                </div>
                <div className='mt-3 ml-[4px]'>
                  <div className='space-y-2 pl-2'>
                    {affiliation.programs.map((program) => (
                      <div key={`${affiliation.name}-${program.title}`} className='relative'>
                        <div className='rounded-md border border-blue-900/60 bg-blue-950/40 px-3 py-2'>
                          <div className='text-sm font-semibold text-blue-100'>{program.title}</div>
                          {program.subtitle && (
                            <div className='text-xs text-blue-200'>{program.subtitle}</div>
                          )}
                          <div className='text-xs text-blue-200'>{program.dates}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-blue-200 mt-2 flex flex-row justify-center md:justify-start flex-wrap'>
            {profile.tags.map((tag) => (
              <div key={tag.to} className="mr-2"><Link to={tag.to}>{tag.label}</Link></div>
            ))}
          </div>
          <br />
          <div className='flex justify-center md:justify-start'>
            {profile.socialLinks.map((item) => (
              <div key={item.href} className='inline-block mr-4 rounded-lg align-top'>
                <Link to={item.href}>
                  <img width="30" height="30" src={item.icon} alt={item.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='md:inline-block align-top w-full md:w-2/3 p-4 md:p-8'>
          <div className='text-2xl font-bold mb-4 text-center md:text-left'>{about.title}</div>
          {about.sections.map((section) => (
            <div className='mb-4' id={section.id} key={section.id}>
              <RichText paragraphs={section.body} paragraphClassName="mb-0" />
            </div>
          ))}
        </div>
        <div className='text-2xl font-bold mb-4 p-4 md:p-8 pb-2 md:pb-4 text-center md:text-left'>{highlightsTitle}</div>
        <div className='w-full p-4 md:p-8 pt-0 flex flex-wrap justify-center md:justify-start'>
          {highlights.map((item) => (
            <Highlights key={item.link} title={item.title} image={item.image} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
