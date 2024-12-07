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
    <div>
      <div className='inline-block w-1/3 xl:w-2/12 align-top' id={props.id}>
        {props.images.map((el) => <div key={el[0]}>
          <img src={el[0]} alt={el[1]} className='w-full'/>
          <div>▲&nbsp;{el[1]}</div>
        </div>)}
      </div>
      <div className='inline-block w-2/3 xl:w-10/12 pl-8 align-top' id='analog'>
          <div className='text-2xl font-bold mb-2'>{props.title}</div>
          {props.supporting.map((el) => <>
            <div key={el[0]} className='text-sm font-semibold mb-2 text-blue-100'>{el}</div>
          </>)}
          <br />
          {props.children}
          {props.links.map((el) => <>
            <div key={el[0]} className='text-sm font-semibold mb-2 text-blue-100 hover:underline'><a href={el[0]}>{el[1]}</a></div>
          </>)}
          <br />
      </div>
    </div>
  )
}

export default Display
