import React, { useState, useEffect } from 'react'

const Display = (props: {
  id: string,
  title: string,
  supporting: Array<string>,
  images: Array<[string, string]>,
  links: Array<[string, string]>,
  children: JSX.Element | string | null
}) => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null)

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
    <div className="flex flex-col md:flex-row" id={props.id}>
      {/* Content section - appears first on mobile, left on md+ */}
      <div className='w-full md:w-2/3 xl:w-10/12 md:pr-8 align-top order-1 md:order-1 mb-6 md:mb-0'>
          <div className='text-2xl font-bold mb-4 text-center md:text-left'>{props.title}</div>
          {props.supporting.map((el, index) => (
            <div key={index} className='text-sm font-semibold mb-2 text-blue-100 text-center md:text-left'>{el}</div>
          ))}
          <br />
          <div className="text-left">{props.children}</div>
          {props.links.map((el, index) => (
            <div key={index} className='mb-2 text-center md:text-left'>
              <a
                href={el[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-0.5 text-sm text-blue-100 font-semibold rounded-md border border-blue-800 hover:bg-blue-900/20 transition-colors duration-150"
                aria-label={`Open link: ${el[1]}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="truncate max-w-[24rem]">{el[1]}</span>
              </a>
            </div>
          ))}
          <br />
      </div>
      
      {/* Images section - appears second on mobile, right on md+ */}
      <div className='w-full md:w-1/3 xl:w-2/12 align-top order-2 md:order-2 mt-2 md:mt-0'>
        {props.images.map((el) => (
          <div key={el[0]} className="mb-4">
            <img
              src={el[0]}
              alt={el[1]}
              className='w-full md:max-w-xs mx-0 cursor-pointer'
              onClick={() => openPreview(el[0], el[1])}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPreview(el[0], el[1])
              }}
            />
            <div className="text-left md:text-left mt-2">▲&nbsp;{el[1]}</div>
          </div>
        ))}
      </div>

      {/* Image preview modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={closePreview}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="max-w-[90vw] max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={preview.src}
              alt={preview.alt}
              className="block max-h-[80vh] max-w-full mx-auto object-contain rounded"
            />
            {preview.alt && (
              <div className="mt-2 text-center text-sm text-white/90">{preview.alt}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Display
