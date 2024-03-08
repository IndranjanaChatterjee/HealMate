import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Import hamburger icon
import Bottomnav from "./Bottomnav";
import avatar from "../assets/avatar.png";
import loc from "../assets/loc-removebg-preview.png";
import browse from "../assets/browse-removebg-preview.png";
import cap from "../assets/capture-removebg-preview.png";
import generate from "../assets/arrow-removebg-preview.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Picturesearch() {
  const [showLeftSection, setShowLeftSection] = useState(false);

  const toggleLeftSection = () => {
    setShowLeftSection(!showLeftSection);
  };

  return (
    <section className="min-h-screen flex justify-start md:justify-center items-center w-screen ">
      <div className="burger md:hidden block">
        <Sidebar/>
      </div>
      <div className="flex justify-center py-[0.7rem] items-center md:justify-center  w-screen h-screen bg-dark  overflow-x-hidden relative z-0 ">
                 <div className="  bg-sap left-0    w-[20rem] text-[10px]  text-[16px] h-full rounded-tr-[2rem] rounded-br-[2rem] flex flex-col justify-center items-center relative z-20 hidden md:block">
           <div className="w-full grid place-items-center">
            <img
              src={avatar}
              className="w-[80px] h-[80px]  mt-[50px] mb-[35px]"
              alt="Avatar"
            />

           </div>
           <div className="w-full grid place-items-center">
            <div className="text-light mb-2">Previous Searches</div>
            <ul className="list-disc text-light">
              <li>Rickets</li>
              <li>Osteoporosis</li>
              <li>Rickets</li>
              <li>Osteoporosis</li>
            </ul>
            </div>
          </div>
        
        <Link to="/" className="absolute lg:top-[0rem] md:right-[0rem] top-[-1rem] right-[-2rem] flex justify-center items-center m-[0.5rem]">
              
              <img
                src={logo}
                className=" mx-6 mt-4 w-[50%]"
                alt="Logo"
              />
            
          </Link>
        <div className="flex flex-col justify-center items-center  relative w-screen">
          
            
            <div className="flex flex-col justify-center items-center mx-auto lg:mx-0 mt-10 md:mt-0  w-full">
            
              <div className="animate__animated animate__slideInRight  rounded-xl m-7 py-[4rem] pl-4 bg-sap lg:w-[50%]  md:w-[70%] w-[90%]">
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
              <div className=" lg:w-[50%]  md:w-[70%] w-[90%] flex justify-between  gap-[1rem] items-center    animate__animated animate__slideInLeft  flex-wrap">
                <label
                  htmlFor="upload"
                  className="w-[10rem]    bg-sap2 rounded-xl px-3 flex justify-center items-center  hover:bg-sap "
                >
                  <input type="file" id="upload" style={{ display: "none" }} />
                  <img src={browse} alt="Browse" className="w-[3rem]"/>
                  <p className="text-light  ">Browse</p>
                </label>
                <label
                  htmlFor="capture"
                  className="w-[10rem]      bg-sap2 rounded-xl px-3 flex  hover:bg-sap "
                >
                  <input
                    type="file"
                    id="capture"
                    accept="image/*"
                    capture="user"
                    style={{ display: "none" }}

                  />
                  <img src={cap} alt="Capture" className="w-[3rem]"/>
                  <p className="text-light mt-2 mx-2 ">
                    Capture
                  </p>
                </label>
                <div className="relative ">
                  <img
                    src={loc}
                    alt="Location"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 "
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "2px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Location.."
                    className="w-[10rem]      md:h-12 h-10 bg-sap2 rounded-xl px-3 pl-10 md:pb-2 placeholder-light text-light  hover:bg-sap text-[10px]  md:text-[16px] "
                  />
                </div>
                <button
                  id="submit"
                  className="md:w-[50px] w-[40px] rounded-full bg-sap2 hover:bg-sap "
                >
                  <img src={generate} alt="Generate" />
                </button>
              </div>
            </div>
          
        </div>
      </div>
      <div className="down fixed bottom-[1rem] w-[100%] flex justify-center items-center hidden">
        <Bottomnav />
      </div>
      
    </section>
  );
}
