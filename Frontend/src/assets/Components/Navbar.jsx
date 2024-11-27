import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();


  // selecting Total Quantity, token from cartSlice
  const { totalQuantity } = useSelector(state => state.cart)
  // console.log(useSelector(state => state.cart))
  // console.log(useSelector(state => state.auth))

  // selecting userData, token from authSlice
  const { token, userData } = useSelector((state) => state.auth)

  if (userData == null && token != null) {
    console.log(userData)
    return navigate('/logout')
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

      <div id="mainNav" className=" p-0 m-0 top-0 w-full" >

        {/* upper space when navbar button mode (small) */}
        <div className=" bg-gray-900 text-white flex justify-between w-full md:hidden">
          <div>
            <button onClick={navSet}>
              <div
                className={` barIcon text-4xl p-4 md:hidden ${navNutton ? "flex" : "hidden p-0"
                  }`}
              >
                <FaBars />
              </div>
              <div
                className={` barIcon text-4xl p-4 md:hidden ${navNutton ? "hidden" : "flex z-50"
                  }`}
              >
                <FaArrowLeft />
              </div>
            </button>

          </div>

          {token == null && <div className="text-center w-[100vw] flex items-center justify-end">

            <Button to={"/signup"}>Sign Up</Button>

            <Button to={"/login"}>Login</Button>

          </div>}
          {token != null &&
            <div className="flex items-center">
              <Link id='cart' className="text-4xl pl-2  hover:text-zinc-400" to="/cart"> <div className="relative flex items-center"> <PiShoppingCartSimpleBold />  <span className="text-2xl font-semibold relative pt-2 -left-1 "> {totalQuantity}</span> </div> </Link>

              <Link className="text-4xl px-4" to="/logout"> <LuLogOut /></Link>

            </div>
          }
        </div>

        {/* lower to md screen  navbar hidden button in vertical view (mobile mode)*/}
        <div id="LowerMain" className="md:hidden ">
          <div onClick={navSet}
            className={` z-10 navItems flex flex-col space-y-5 rounded-b-3xl absolute text-2xl pt-4 pb-[100px]  text-start h-[calc(100vh-138px)] w-[85vw]  px-2 py-1 text-white ${navNutton ? "hidden" : "top-15 pt-0 flex "
              } `}
            style={{
              backgroundColor: "rgb(50,51,52)",
              opacity: "0.97",
            }}
          >
            <Link
              to="/"
              className="py-4 pl-8 cursor-pointer font-semibold  hover:text-white hover:rounded-xl border-b-2 border-white " 
            >
              Dashboard
            </Link>

            {/* { ( token==undefined || (token!==null && userData.role =='user') ) && 
            <Link to="/buyCourse" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              Buy Course
            </Link>
            } */}

            {token !== null && userData.role == 'admin' &&
              <Link to="/addCourse" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-slate-800 hover:text-white hover:rounded-xl border-b-2 border-white">
                Add Course
              </Link>
            }
            <Link to="/courses" className="py-4 pl-8 cursor-pointer font-semibold hover:bg-slate-800 hover:text-white hover:rounded-xl border-b-2 border-white">
              Courses
            </Link>
            <Link to='/about' className="py-4 pl-8 cursor-pointer font-semibold hover:bg-slate-800 hover:text-white hover:rounded-xl border-b-2 border-white">
              About Us
            </Link>
            <Link to='/contact' className="py-4 pl-8 cursor-pointer font-semibold hover:bg-slate-800 hover:text-white hover:rounded-xl border-b-2 border-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* from small to large screen navbar options left side*/}
        <div
          className="navItems hidden md:flex h-12 w-full justify-start text-white hover:text-zinc-600 z-10"
          style={{ backgroundColor: "rgb(0,0,0)" }}
        >
          <div className=" flex flex-nowrap text-nowrap ">
            <Link
              to="/"
              className="flex px-5 items-center  cursor-pointer font-semibold  hover:bg-zinc-900 hover:text-gray-300 hover:rounded-sm">
              Dashboard
            </Link>

            {/* { ( token==undefined || (token!==null && userData.role =='user') ) && 
            <Link to="/buyCourse" className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-800 hover:text-white hover:rounded-xl">
              Buy Course
            </Link>
            } */}

            {token !== null && userData.role == 'admin' &&
              <Link to="/addCourse" className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-900 hover:text-gray-400 hover:rounded-sm">
                Add Course
              </Link>
            }

            <Link
              to="/courses"
              className="flex px-5 items-center  cursor-pointer font-semibold hover:bg-zinc-900 hover:text-gray-400 hover:rounded-sm">
              Courses
            </Link>

            <Link to="/about" className="flex px-5 items-center cursor-pointer font-semibold hover:bg-zinc-900 hover:text-gray-400 hover:rounded-sm">
              About Us
            </Link>

            <Link to="/contact" className="flex px-5 items-center cursor-pointer font-semibold text-justify hover:bg-zinc-900 hover:text-gray-400  hover:rounded-sm">
              Contact Us
            </Link>

          </div>

          {/* Sign up login buttons right side Navbar section without login */}

          {token == null && <div className="text-center w-[100vw] flex items-center justify-end">
            <Button to={"/signup"}>Sign Up</Button>

            <Button to={"/login"}>Login</Button>

          </div>}

          {/* Right side section of Navbar on lg screen with login */}
          
          {token !== null &&
            <div className=" text-center flex flex-wrap items-center justify-end w-full">
              <div className=" hidden lg:block ">

                <h1 className="pr-5 pt-2 py-1 pl-2 text-xl cursor-pointer font-semibold text-center  text-nowrap text-white hover:text-gray-400 hover:rounded-xl">
                  Hi, {userData.name}
                </h1>
              </div>
              <button className="p-2 h-full hover:text-zinc-400" onMouseEnter={profileExpand} onMouseLeave={profileExpand}>
                <a className="text-xl" >
                  < FaUser />
                </a>
              </button>

              {/*  Drop down menu of profile button navbar */}
              <div onMouseLeave={profileExpand} className={`absolute font-sans top-12 border-t-0 right-12 z-20 text-black text-xl cursor-pointer  rounded-b-xl shadow-xl  shadow-slate-400 hover:shadow-slate-600  bg-slate-200 border-[3px] border-zinc-100 
              ${profileHover ? "hidden" : "flex"}`}>
                <ul >
                  <Link to="/profile"> <li className="border-b-slate-800 border-[0.5px] -mx-[0.7px] border-none hover:text-zinc-200 p-2 hover:bg-zinc-600">  Profile </li> </Link>
                  <Link to="updateProfile">  <li className="border-b-slate-800 border-[0.5px] px-4 -mx-[0.7px] border-none hover:text-zinc-200  p-2 hover:bg-zinc-600">Update Profile</li> </Link>
                  <li className="border-b-slate-800 border-[0.5px] px-2 -mx-[0.7px] border-none hover:text-zinc-200  p-2  hover:bg-zinc-600 ">My Courses</li>
                  <li className="border-b-slate-800 border-[0.5px] px-2 -mx-[0.7px] border-none hover:text-zinc-200  p-2  hover:bg-zinc-600 ">New Courses </li>
                  <Link to="/logout"> <li className="border-b-slate-800 border-[0.5px] rounded-b-lg px-2 -mx-[0.7px] border-none hover:text-zinc-200  p-2  hover:bg-zinc-600">Logout</li></Link>
                </ul>
              </div>
                {/*  end of drop down menu of profile button navbar */}


              {/* cart and logout button on lg screen navbar */}
              <Link id='cart' className="text-2xl pl-2  hover:text-zinc-400" to="/cart"> <div className="relative flex items-center"> <PiShoppingCartSimpleBold />  <span className="text-[15px] font-semibold relative pt-2 -left-1 "> {totalQuantity}</span> </div> </Link>
              <Link className="text-2xl px-4 hover:text-zinc-400" to="/logout"> <LuLogOut /></Link>
            </div>
          }

        </div>
      </div>
    </>
  );
}
