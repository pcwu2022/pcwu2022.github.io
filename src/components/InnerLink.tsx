import React from 'react'
import { Link } from 'react-router-dom'

const InnerLink = (props: {
    to: string,
    children: JSX.Element | string | null
}) => {
  return (
    <span className='text-blue-200 font-semibold hover:underline'>
      <Link to={props.to}>{props.children}</Link>
    </span>
  )
}

export default InnerLink
