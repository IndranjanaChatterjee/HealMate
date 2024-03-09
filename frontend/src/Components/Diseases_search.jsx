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
import symptoms from "../assets/symptoms.png";

const Diseases_search = () => {
  const [showLeftSection, setShowLeftSection] = useState(false);

  const toggleLeftSection = () => {
    setShowLeftSection(!showLeftSection);
  };

  return (
    <section className="relative min-h-[120vh] xl:min-h-screen flex justify-start md:justify-center items-center w-screen bg-dark">
      <div className="burger md:hidden block">
        <Sidebar/>
      </div>
      <div className="flex justify-center py-[0.7rem] items-center md:justify-center  w-screen h-screen bg-dark  overflow-x-hidden  z-0 ">
                 <div className="  bg-sap2 left-0    w-[20rem] text-[10px]   h-full rounded-tr-[2rem] rounded-br-[2rem]  flex-col justify-center items-center relative z-20 hidden md:block">
           <div className="w-full grid place-items-center">
            <img
              src={avatar}
              className="w-[80px] h-[80px]  mt-[50px] mb-[35px]"
              alt="Avatar"
            />

           </div>
           <div className="w-full grid place-items-center">
            <div className="text-light mb-2 text-[1.5rem]">Previous Searches</div>
            <ul className="list-disc text-light text-[1rem]">
              <li>Rickets</li>
              <li>Osteoporosis</li>
              <li>Rickets</li>
              <li>Osteoporosis</li>
            </ul>
            </div>
          </div>
        
        <Link to="/" className=" w-fit absolute  top-[0rem] right-[0rem] flex justify-end items-end">
              
              <img
                src={logo}
                className=" mx-6 mt-4 md:w-[50%] w-[30%]"
                alt="Logo"
              />
            
          </Link>
        <div className="flex flex-col justify-center items-center  relative w-screen ">
          
            
            <div className="flex flex-col justify-center items-center mx-auto lg:mx-0 mt-10 md:mt-0  w-full">
            
              <div className="relative animate__animated animate__slideInRight  rounded-xl m-7 py-[4rem] pl-4 bg-sap2 lg:w-[50%]  md:w-[70%] w-[90%]">
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
                <button
                  id="submit"
                  className="md:w-[50px] w-[40px] self-center rounded-full bg-sap2  hover:bg-sap absolute bottom-[0.5rem] right-[1rem] b-shadow"
                >
                  <img src={generate} alt="Generate" />
                </button>
              </div>
              <div className=" lg:w-[50%]  md:w-[70%] w-[90%] flex justify-center  gap-[1rem] items-center    animate__animated animate__slideInLeft  ">
                <label
                  htmlFor="upload"
                  className="md:w-[10rem] w-[8rem] md:h-11 h-8 sm:h-10 bg-sap2 rounded-xl px-3 flex justify-start items-center  hover:bg-sap "
                >
                  <input type="file" id="upload" style={{ display: "none" }} />
                  <img src={symptoms} alt="Browse" className="w-[1.8rem] sm:w-[2rem] md:w-[2.5rem]"/>
                  <p className="text-light  text-[0.7rem] xl:text-[1.2rem] md:text-[0.9rem]">Symptoms</p>
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
                    className="md:w-[10rem] w-[8rem]    md:h-12 h-8 sm:h-10 bg-sap2 rounded-xl px-3 pl-10 md:pb-2 placeholder-light text-light  hover:bg-sap text-[10px]  md:text-[16px] "
                  />
                </div>
                
              </div>
            </div>
          
        </div>
      </div>
      <div className="down fixed bottom-[1rem] w-[100%] flex justify-center items-center ">
        <Bottomnav />
      </div>
      
    </section>
  );
};

export default Diseases_search;
