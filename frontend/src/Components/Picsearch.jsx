import React from 'react';
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Picsearch() {
  return (
    <section className='bg-[yellow] min-h-screen flex justify-center items-center'>
        <div className='bg-[red] relative w-[80%]'>
        <Link to="/">
              <div>
                <img
                  src={logo}
                  className=" absolute top-[0rem] right-[5rem]"
                  alt="Logo"
                />
              </div>
            </Link>
            

            <div className="animate__animated animate__slideInRight md:w-[760px] md:h-[375px] rounded-xl m-7 pt-5 pl-4 bg-sap w-[300px] h-[400px] ">
                <div className="text-light mb-2">
                  Disease based on your image :-
                </div>
                <li className="ml-5 list-disc text-light">Malaria</li>
                <div className="ml-5 mt-6 text-light">
                  List of doctors based on your Location
                </div>
                <ul className="ml-5 list-decimal text-light pl-6">
                  <li className="mt-2">
                    <div>Name:</div> <div>Phone No:</div> <div>Address:</div>
                  </li>
                  <li className="mt-2">
                    <div>Name:</div> <div>Phone No:</div> <div>Address:</div>
                  </li>
                </ul>
              </div>
              </div>

        </section>
      
    
  )
}
