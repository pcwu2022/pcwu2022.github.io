import React from 'react'

const Display = (props: {
  id: string,
  title: string,
  supporting: Array<string>,
  images: Array<[string, string]>,
  links: Array<[string, string]>,
  children: JSX.Element | string | null
}) => {
  return (
    <div className="flex flex-col md:flex-row" id={props.id}>
      {/* Content section - appears first on mobile */}
      <div className='w-full md:w-2/3 xl:w-10/12 md:pl-8 align-top order-1 md:order-2 mb-6 md:mb-0'>
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
      
      {/* Images section - appears second on mobile */}
      <div className='w-full md:w-1/3 xl:w-2/12 align-top order-2 md:order-1 mt-4 md:mt-0'>
        {props.images.map((el) => <div key={el[0]} className="mb-4">
          <img src={el[0]} alt={el[1]} className='w-full max-w-xs mx-auto md:mx-0'/>
          <div className="text-center md:text-left mt-2">▲&nbsp;{el[1]}</div>
        </div>)}
      </div>
    </div>
  )
}

export default Display
