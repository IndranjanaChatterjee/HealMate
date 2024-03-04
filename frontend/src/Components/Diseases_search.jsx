import React from "react";
import Bottomnav from "./Bottomnav";
import avatar from "../assets/avatar.png";
import loc from "../assets/loc-removebg-preview.png";
import symptoms from "../assets/symptoms.png";
import generate from "../assets/arrow-removebg-preview.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Diseases_search = () => {
  return (
    <div>
      <div className="flex w-screen h-screen bg-dark">
        <div className=" bg-sap w-1/4 h-[615px] m-2 rounded-tr-lg rounded-bl-lg flex flex-col items-center ">
          <img
            src={avatar}
            className="w-[160px] h-[160px] mt-[50px] mb-[35px]"
            alt="Avatar"
          />
          <div className="text-light mb-2">Previous Searches</div>
          <ul className="list-disc text-light">
            <li>Rickets</li>
            <li>Osteoporosis</li>
            <li>Rickets</li>
            <li>Osteoporosis</li>
          </ul>
        </div>
        <div className="w-3/4">
          <div className="flex">
            <Link to="/">
              <div>
                <img src={logo} className="w-[130px] mx-6 mt-4" alt="Logo" />
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[760px] h-[375px] rounded-xl m-7 pt-5 pl-4 bg-sap ">
                <div className="text-light mb-2">
                  Disease based on your symptoms :-
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
              <div className="flex ml-10 mt-2">
                <div className="relative mr-5">
                  <img
                    src={loc}
                    alt="Location"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "2px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-[150px] ml-1 h-12 bg-sap2 rounded-xl px-3 pl-10 placeholder-light text-light hover:bg-sap hover:text-dark"
                  />
                </div>
                <div className="relative mr-5">
                  <img
                    src={symptoms}
                    alt="Location"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "2px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Symptoms..."
                    className="w-[250px] ml-1 h-12 bg-sap2 rounded-xl px-3 pl-10 placeholder-light text-light hover:bg-sap hover:text-dark"
                  />
                </div>
                <button
                  id="submit"
                  className="w-[50px] rounded-full bg-sap2 hover:bg-sap"
                >
                  <img src={generate} alt="Generate" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down fixed bottom-[3rem] w-[100%] flex justify-center items-center">
        <Bottomnav />
      </div>
    </div>
  );
};

export default Diseases_search;
