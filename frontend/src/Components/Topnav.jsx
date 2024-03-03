import React from "react";
import logo from "../assets/Logo.png";
import { Link, useNavigate,Outlet} from "react-router-dom";

export default function Topnav() {
  const navigate = useNavigate();
  return (
    <>
    <div className="text-[#ffffff]  flex flex-row justify-between items-center  pt-[1rem]">
      <div className="logo text-[2rem] text-[#ffffff] px-[1rem]">
        <Link to="/"><img src={logo} alt="logo" className="w-[7rem]"/></Link>
      </div>
      <div className="register flex flex-row justify-center items-center gap-[3rem] px-[1rem]">
        <div className="sign text-[1.5rem] text-[#ffffff]  py-[1rem]  hover:border-b-solid  hover:border-b-[4px]  hover:border-b-[#ffffff] cursor-pointer transition-all ease-linear duration-150">
          Sign Up
        </div>
        <div className="log text-[1.5rem] text-[#ffffff] py-[1rem]  hover:border-b-solid  hover:border-b-[4px]  hover:border-b-[#ffffff] cursor-pointer transition-all ease-linear duration-150">
          Login
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}
