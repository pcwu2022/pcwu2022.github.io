import React from 'react'
import { Link } from 'react-router-dom'

const Highlights = (props: {
  title: string,
  image: string,
  link: string
}) => {
  return (
    <div className='inline-block text-center relative align-top bg-blue-900 mr-8 mb-8 h-64 w-80'
      style={{
        backgroundImage: `url("${props.image}")`,
        backgroundSize: "100%"
      }}
    >
      <Link to={props.link}>
        <div className='w-full h-full opacity-40 hover:opacity-80 cursor-pointer bg-blue-950 text-center'>
          <div className='pt-28 text-lg font-bold'>{props.title}</div>
        </div>
      </Link>
    </div>
  )
}

export default Highlights
