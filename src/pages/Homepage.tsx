import React from 'react'
import Links from '../components/Links'
import Highlights from '../components/Highlights'
import RichText from '../components/RichText'
import homepageContent from '../content/homepage.json'

const Homepage = () => {
  const { profile, about, highlights, highlightsTitle } = homepageContent

  return (
    <div className='m-0 p-0 min-h-screen bg-transparent'>
      <Links />
      <div className='w-full max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          
          {/* Left Column - Profile Sidebar */}
          <div className='lg:col-span-4 lg:sticky lg:top-24 bg-slate-900/40 backdrop-blur-md border border-blue-950/45 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/25 text-center lg:text-left flex flex-col items-center lg:items-start'>
            
            {/* Glowing Profile Photo */}
            <div className='relative w-36 h-36 md:w-40 md:h-40 mb-6 group'>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[3px] shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.45)] transition-all duration-300">
                <img 
                  src={profile.photo.src} 
                  alt={profile.photo.alt} 
                  className="w-full h-full object-cover rounded-full bg-slate-950"
                />
              </div>
            </div>
            
            <h1 className='text-3xl font-display font-bold text-white mb-6 tracking-wide'>
              {profile.name}
            </h1>
            
            {/* Affiliations Timeline */}
            <div className='w-full text-left border-t border-blue-950/40 pt-6 space-y-6'>
              {profile.affiliations.map((affiliation) => (
                <div key={affiliation.name} className='relative'>
                  <h4 className='font-display font-bold text-sm text-gray-200 mb-2.5 tracking-wide flex items-center gap-2'>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                    {affiliation.name}
                  </h4>
                  <div className='space-y-2.5 pl-3 border-l border-blue-950/60 ml-[3px]'>
                    {affiliation.programs.map((program) => (
                      <div key={`${affiliation.name}-${program.title}`} className='rounded-lg border border-blue-950/50 bg-blue-950/15 px-3 py-2 shadow-sm'>
                        <div className='text-xs font-bold text-blue-200/90'>{program.title}</div>
                        {program.subtitle && (
                          <div className='text-[10px] text-gray-400 font-medium mt-0.5'>{program.subtitle}</div>
                        )}
                        <div className='text-[10px] text-blue-300/60 font-semibold mt-0.5'>{program.dates}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Personal Tags */}
            <div className='w-full flex flex-wrap justify-center lg:justify-start gap-2 border-t border-blue-950/40 pt-6 mt-6'>
              {profile.tags.map((tag) => (
                <a 
                  key={tag.to} 
                  href={tag.to} 
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-950/20 border border-blue-900/35 text-blue-300 hover:text-white hover:bg-blue-600/80 hover:border-blue-500/80 transition-all duration-200"
                >
                  {tag.label}
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className='w-full flex justify-center lg:justify-start gap-3 border-t border-blue-950/40 pt-6 mt-6'>
              {profile.socialLinks.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950/40 border border-blue-950/50 hover:border-blue-500/40 hover:bg-blue-950/25 shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <img 
                    width="20" 
                    height="20" 
                    src={item.icon} 
                    alt={item.alt} 
                    className="filter grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200 rounded-sm"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - About Content */}
          <div className='lg:col-span-8 flex flex-col gap-6 w-full'>
            <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-2'>
              {about.title}
            </h2>
            
            <div className='space-y-6'>
              {about.sections.map((section) => (
                <div 
                  className='bg-slate-900/20 border border-blue-950/35 rounded-2xl p-6 md:p-8 hover:border-blue-900/25 transition-all duration-300 shadow-md shadow-black/10 scroll-mt-24' 
                  id={section.id} 
                  key={section.id}
                >
                  <RichText paragraphs={section.body} paragraphClassName="text-gray-300 leading-[1.6] text-sm md:text-base space-y-4 text-left" />
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Full-width Highlights Section */}
        <div className='mt-16 border-t border-blue-950/30 pt-12'>
          <h2 className='text-3.5xl md:text-4xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent text-left mb-8'>
            {highlightsTitle}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {highlights.map((item) => (
              <Highlights key={item.link} title={item.title} image={item.image} link={item.link} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Homepage
