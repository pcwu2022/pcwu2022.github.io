import React, { useState, useEffect } from 'react'

type DisplayImage = {
  src: string
  alt: string
}

type DisplayLink = {
  href: string
  label: string
}

const Display = (props: {
  id: string
  title: string
  supporting?: string[]
  images?: DisplayImage[]
  links?: DisplayLink[]
  children?: React.ReactNode
}) => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null)
  const supporting = props.supporting ?? []
  const images = props.images ?? []
  const links = props.links ?? []

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setPreview(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openPreview = (src: string, alt: string) => setPreview({ src, alt })
  const closePreview = () => setPreview(null)

  return (
    <div 
      className="bg-slate-900/40 backdrop-blur-md border border-blue-950/45 rounded-2xl p-6 md:p-8 mb-8 shadow-xl shadow-black/25 hover:border-blue-500/35 hover:shadow-blue-500/5 transition-all duration-300 scroll-mt-24" 
      id={props.id}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Content section - appears first on mobile, left on md+ */}
        <div className='w-full md:w-2/3 xl:w-9/12 align-top order-1 md:order-1 flex flex-col justify-between'>
          <div>
            <h3 className='text-2xl font-display font-bold mb-3 text-white text-center md:text-left tracking-wide'>
              {props.title}
            </h3>
            
            {supporting.length > 0 && (
              <div className='flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 mb-4 text-xs md:text-sm text-gray-400 font-medium'>
                {supporting.map((el, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span className="hidden md:inline text-blue-900/60">•</span>}
                    <div className='text-blue-300/90'>{el}</div>
                  </React.Fragment>
                ))}
              </div>
            )}
            
            <div className="text-gray-300 text-left leading-[1.6] text-sm md:text-base space-y-4">
              {props.children}
            </div>
          </div>

          {links.length > 0 && (
            <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-6'>
              {links.map((el, index) => (
                <a
                  key={index}
                  href={el.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-blue-300 font-semibold bg-blue-950/20 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-800/60 hover:border-blue-500 transition-all duration-200"
                  aria-label={`Open link: ${el.label}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span className="truncate max-w-[16rem]">{el.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Images section - appears second on mobile, right on md+ */}
        {images.length > 0 && (
          <div className='w-full md:w-1/3 xl:w-3/12 flex flex-col gap-4 mt-2 md:mt-0 order-2 md:order-2'>
            {images.map((el) => (
              <div key={`${el.src}-${el.alt}`} className="group/img relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/50 shadow-md">
                <img
                  src={el.src}
                  alt={el.alt}
                  className='w-full h-auto object-cover cursor-pointer transition-transform duration-300 group-hover/img:scale-105'
                  onClick={() => openPreview(el.src, el.alt)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openPreview(el.src, el.alt)
                  }}
                />
                <div className="p-2 text-xs text-gray-400 text-left border-t border-slate-900 bg-slate-950/40 flex items-center gap-1.5">
                  <span className="text-blue-500 font-bold">▲</span>
                  <span className="line-clamp-1">{el.alt}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image preview modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4"
          onClick={closePreview}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-[90vw] max-h-[95vh] p-1 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white bg-slate-900/80 border border-slate-800 rounded-full p-2 hover:bg-slate-800 transition-colors duration-150 shadow-lg"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={preview.src}
              alt={preview.alt}
              className="block max-h-[80vh] max-w-full mx-auto object-contain rounded-xl border border-slate-800 shadow-2xl"
            />
            {preview.alt && (
              <div className="mt-3 text-center text-sm font-semibold text-gray-300 px-4 py-1.5 bg-slate-900/60 rounded-full border border-slate-800/40">
                {preview.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Display
