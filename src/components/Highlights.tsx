import React from 'react'
import { Link } from 'react-router-dom'

const Highlights = (props: {
  title: string,
  image: string,
  link: string
}) => {
  return (
    <div className='relative overflow-hidden rounded-2xl border border-blue-900/30 bg-slate-900 h-64 w-full shadow-lg shadow-black/30 group hover:border-blue-500/40 hover:shadow-blue-500/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
      <div 
        className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
        style={{
          backgroundImage: `url("${props.image}")`
        }}
      />
      <Link to={props.link} className="absolute inset-0 flex flex-col justify-end">
        {/* Modern dark gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300' />
        
        {/* Title container */}
        <div className='relative z-10 p-5 text-left'>
          <div className='text-[10px] font-semibold text-blue-400 tracking-wider uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            View Highlight
          </div>
          <div className='text-lg font-display font-bold text-white group-hover:text-blue-300 transition-colors duration-200 line-clamp-2 leading-tight'>
            {props.title}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Highlights
