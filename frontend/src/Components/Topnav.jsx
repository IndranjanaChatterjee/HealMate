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
      <Link className="register flex flex-row justify-center items-center gap-[3rem]   mx-[3rem] sm:text-[1.5rem] text-[1rem] text-[#ffffff]  " data-link-alt="Login">
        
        <span className="hov sm:text-[1.5rem] text-[1rem] text-[#ffffff]   cursor-pointer transition-all ease-linear " data-link-alt="Login">
          Login
        </span>
      </Link>
    </div>
    <Outlet/>
    </>
  );
}
