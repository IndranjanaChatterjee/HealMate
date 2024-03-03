import React from 'react'
import Topnav from './Topnav'
import Bottomnav from './Bottomnav'

export default function Diseases_search() {
  return (
    <div className='relative'>
      <div className='absolute top-0 w-full z-[999]'>
        <Topnav/>
        </div>
        
      diseases
      <div className="down fixed bottom-[3rem] w-[100%] flex justify-center items-center">
            <Bottomnav/>
        </div>
        
      
    </div>
  )
}
