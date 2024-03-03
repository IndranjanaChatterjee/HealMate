import React from 'react';
import Videosection from './Videosection';
import Bottomnav from './Bottomnav';
import Topnav from './Topnav';


export default function Home() {
  return (
    <section className='min-h-screen relative w-screen home overflow-x-hidden'>
        <div className='absolute top-0 w-full z-[999]'>
        <Topnav/>
        </div>
        
        <Videosection/>
        <div className='homebtn min-h-screen'></div>
        <div className="down fixed bottom-[3rem] w-[100%] flex justify-center items-center">
            <Bottomnav/>
        </div>
      
    </section>
  )
}
