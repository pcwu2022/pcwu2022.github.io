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
            <div key={index} className='text-sm font-semibold mb-2 text-blue-100 hover:underline text-center md:text-left'><a href={el[0]}>{el[1]}</a></div>
          ))}
          <br />
      </div>
      
      {/* Images section - appears second on mobile, right on md+ */}
      <div className='w-full md:w-1/3 xl:w-2/12 align-top order-2 md:order-2 mt-4 md:mt-0'>
        {props.images.map((el) => (
          <div key={el[0]} className="mb-4">
            <img
              src={el[0]}
              alt={el[1]}
              className='w-full max-w-xs mx-auto md:mx-0 cursor-pointer'
              onClick={() => openPreview(el[0], el[1])}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPreview(el[0], el[1])
              }}
            />
            <div className="text-center md:text-left mt-2">▲&nbsp;{el[1]}</div>
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
