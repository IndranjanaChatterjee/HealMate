import React from 'react'
import { Link } from 'react-router-dom';

export default function Bottomnav() {
  return (
    <section className='bg-[#00FF29] w-[25rem] h-[3rem] flex justify-center items-center rounded-[2rem] py-[1.7rem] px-[1rem]'>
      <nav className='flex flex-row justify-between items-center gap-[3rem] relative '>
        
        <Link to='/pics' className='refer bg-[#000000] text-[#00FF29] hover:border-solid hover:border-[2.3px] hover:border-[#000000] hover:bg-[#00FF29] hover:text-[#000000] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]'>Field A</Link>
        <Link to='/disease' className='refer bg-[#000000] text-[#00FF29] hover:border-solid hover:border-[2.3px] hover:border-[#000000] hover:bg-[#00FF29] hover:text-[#000000] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]'>Field B</Link>
        <Link to='/teams' className='refer bg-[#000000] text-[#00FF29] hover:border-solid hover:border-[2.3px] hover:border-[#000000] hover:bg-[#00FF29] hover:text-[#000000] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]'>Teams</Link>
        <div className='animation start-home absolute h-[10rem] bg-blue-300 top-0 width-[150px] z-[999] left-0'></div>

      </nav>
    </section>
  )
}
