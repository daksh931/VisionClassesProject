import React, { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userData } = useSelector((state) => state.auth)

  if (userData == null && token != null) {
    console.log(userData)
    navigate('/logout')
  }
  // console.log(userData)

  const [profileHover, setProfileHover] = useState(true);
  const profileExpand = () => {
    setProfileHover((profileHover) => !profileHover);
  };
  
  const [navNutton, setNavButton] = useState(true);
  const navSet = () => {
    setNavButton((navNutton) => !navNutton);
  };



  return (
    <>
      <div id="mainNav" className=" p-0 m-0 top-0">
        <div className="bg-zinc-800 text-white sm:hidden">
          <button onClick={navSet}>
            <div
              className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "flex" : "hidden p-0"
                }`}
            >
              <FaBars />
            </div>
            <div
              className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "hidden" : "flex z-50"
                }`}
            >
              <FaArrowLeft />
            </div>
          </button>
        </div>

        {/* lower to sm screen  */}
        <div id="LowerMain" className="sm:hidden ">
          <div onClick={navSet}
            className={` z-10 navItems flex flex-col space-y-12 absolute text-3xl pt-4 pb-[100px]  text-start h-[calc(100vh-138px)] w-[85vw]  px-2 py-1 text-white ${navNutton ? "hidden" : "top-15 pt-0 flex "
              } `}
            style={{
              backgroundColor: "rgb(50,51,52)",
              opacity: "0.97",
            }}
          >
            <Link
              to="/"
              className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white"
            >
              Dashboard
            </Link>
            <Link to="/addCourse" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              Add Course
            </Link>
            <Link to="/courses" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              Courses
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              About Us
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* from small to large screen   */}
        <div
          className="navItems hidden sm:flex h-12 w-full justify-start text-white z-10" 
          style={{ backgroundColor: "rgb(50,51,52)" }}
        >
          <div className="flex flex-nowrap text-nowrap ">
            <Link
              to="/"
              className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl">
              Dashboard
            </Link>

            <Link to="/addCourse" className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-800 hover:text-white hover:rounded-xl">
              Add Course
            </Link>

            <Link
              to="/courses"
              className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl">              
              Courses
            </Link>

            <Link className="flex px-5 items-center cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl">  
              About Us
            </Link>

            <Link className="flex px-5 items-center cursor-pointer font-semibold text-justify hover:bg-zinc-800  hover:text-white hover:rounded-xl">  
              Contact Us
            </Link>

           
          </div>

          {/* Sign up login buttons right side Nav */}

          {token == null && <div className="text-center w-[100vw] flex items-center justify-end">
            <Button to={"/signup"}>Sign Up</Button>

            <Button to={"/login"}>Login</Button>

          </div>}
          {token !== null &&
            <div className=" text-center w-[100vw] flex flex-wrap items-center justify-end	">
              <div >

                <h1 className="pr-5 pt-2 py-1 pl-2 text-xl cursor-pointer font-semibold text-center  hover:bg-zinc-800 text-nowrap hover:text-white hover:rounded-xl">
                  Hi, {userData.name}
                </h1>
              </div>
              <button className="p-2 h-full" onMouseEnter={profileExpand} onMouseLeave={profileExpand}>
                <a className="text-xl" > 
                < FaUser />
                </a>
              </button>
                <div onMouseLeave={profileExpand} className={`absolute font-serif top-12 border-t-0 right-12 bg-zinc-200 z-20 text-black text-lg cursor-pointer border-4 border-zinc-400  rounded-b-xl ${profileHover? "hidden" :"flex"}`}>
                  <ul >
                  <Link  to="/profile"> <li className="border-b-slate-800 border-[0.5px] -mx-[0.7px] border-none hover:text-zinc-200 hover:bg-zinc-600">  Profile </li> </Link>
                  <Link to="updateProfile">  <li className="border-b-slate-800 border-[0.5px] px-2 -mx-[0.7px] border-none hover:text-zinc-200 hover:bg-zinc-600">Update Profile</li> </Link>
                    <li className="border-b-slate-800 border-[0.5px] px-2 -mx-[0.7px] border-none hover:text-zinc-200 hover:bg-zinc-600">My Courses</li>
                    <li className="border-b-slate-800 border-[0.5px] px-2 -mx-[0.7px] border-none hover:text-zinc-200 hover:bg-zinc-600">New Courses </li>
                    <li className="border-b-slate-800 border-[0.5px] rounded-b-lg px-2 -mx-[0.7px] border-none hover:text-zinc-200 hover:bg-zinc-600">Logout</li>
                  </ul>
                </div>

              <Link className="text-2xl px-4" to="/logout"> <LuLogOut /></Link>
            </div>
          }

        </div>
      </div>
    </>
  );
}
