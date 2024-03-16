import React,{useState,useEffect} from 'react';
import Videosection from './Videosection';
import Bottomnav from './Bottomnav';
import Topnav from './Topnav';
import Home_about from './Home_about';
import Footer from './Footer';


export default function Home({isLoggedIn, setIsLoggedIn, userEmail,setUserEmail, userPicture, setUserPicture}) {
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log(parsedData)
        setUserEmail(parsedData.email);
        console.log("User email:", userEmail)
        setUserPicture(parsedData.picture);
        console.log(userPicture)
        setIsLoggedIn(true);
      }
  }, []);
  return (
    <section className='min-h-screen relative w-screen home overflow-x-hidden'>
        <div className='absolute top-0 w-full z-[999]'>
        <Topnav LoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail} userPicture={userPicture} setUserPicture={setUserPicture}/>
        </div>
        <Videosection/>
        <div className='homebtn min-h-[110vh]'>
            <div className="grady h-[10vh]"></div>
            <Home_about/>
            <Footer/>
        </div>
        
        <div className="down fixed bottom-[1rem] w-[100%] flex justify-center items-center">
            <Bottomnav/>
        </div>
      
    </section>
  )
}
