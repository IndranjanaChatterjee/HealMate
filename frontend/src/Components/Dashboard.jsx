import React,{useState,useEffect} from 'react';
import { useNavigate,Outlet,useLocation } from 'react-router-dom';
import axios from 'axios';
export default function Dashboard({isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BASE_URL;
    const [image,setImage] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const handleLogout = async()=>{
        await axios.post(`${baseURL}/logout`)
        .then((res)=>{
            setIsLoggedIn(false);
            localStorage.removeItem('userData');
            navigate('/');
        })
      } 
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setName(parsedData.name);
            setImage(parsedData.picture);
            setEmail(parsedData.email);
          }
      }, []);
  return (
    <div className='imgbtn w-screen min-h-screen flex justify-center items-center'>
        <div className=' w-4/5 flex flex-col md:flex-row gap-[1rem] justify-between items-center'>
            <img src={image} alt="User Image" className='w-[25rem] rounded-full mx-[2rem]' />
            <div className='w-full mx-[2rem] md:w-1/2 h-full flex flex-col gap-8'>
                <div className='flex gap-[0.5rem]'>
                    <p className='text-white text-[1.1rem] sm:text-[1.7rem]'>Name :</p>
                    <span className='text-[1.1rem] sm:text-[1.7rem] text-sap2'>{name}</span>
                </div>
                <div className='flex gap-[0.5rem]'>
                    <p className='text-white text-[1.1rem] sm:text-[1.7rem]'>Email:</p>
                    <span className='text-[1.1rem] sm:text-[1.7rem] text-sap2 break-all'>{email}</span>
                </div>
                <button onClick={handleLogout} className='bg-sap2 text-[1.5rem] rounded-lg hover:bg-sap cursor-pointer'>Sign Out</button>
            </div>
        </div>
    </div>
  )
}
