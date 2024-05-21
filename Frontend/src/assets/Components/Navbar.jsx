import React, { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";

import { setToken } from "../../store/Slices/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userData } = useSelector((state) => state.auth)

  if (userData == null && token != null) {
    console.log(userData)
    navigate('/logout')
  }
  // console.log(userData)

  const [navNutton, setNavButton] = useState(true);
  const navSet = () => {
    setNavButton((navNutton) => !navNutton);
  };

  return (
    <>
      <div id="mainNav" className=" p-0 m-0 top-0">
        <div className=" sm:hidden">
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
          <div
            className={` z-10 navItems  flex-col absolute text-xl pt-4 pb-[100px]  text-start h-[100vh] w-[85vw]  px-2 py-1 text-white ${navNutton ? "hidden" : "top-15 pt-0 flex "
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
              {" "}
              Dashboard
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              {" "}
              Our Speciality
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              {" "}
              Enterprise
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              {" "}
              About Us
            </Link>
            <Link className="py-4 pl-8 cursor-pointer font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl border-b-2 border-white">
              {" "}
              Contact Us
            </Link>
          </div>
        </div>

        {/* from small to large screen   */}
        <div
          className="navItems hidden sm:flex h-12 w-full justify-start text-white"
          style={{ backgroundColor: "rgb(50,51,52)" }}
        >
          <div className="flex flex-nowrap text-nowrap ">
            <Link
              to="/"
              className="pr-5 pt-2 py-1 pl-3 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"
            >
              {" "}
              Dashboard
            </Link>
            <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800 hover:text-white hover:rounded-xl">
              {" "}
              Our Speciality
            </Link>
            <Link
              to="/courses"
              className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl"
            >
              {" "}
              Courses
            </Link>
            <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl">
              {" "}
              About Us
            </Link>
            <Link className="pr-5 pt-2 py-1 pl-2 cursor-pointer font- text-center semibold hover:bg-zinc-800  hover:text-white hover:rounded-xl">
              {" "}
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

                <h1 className="pr-5 pt-2 py-1 pl-2 text-xl cursor-pointer font- text-center semibold hover:bg-zinc-800 text-nowrap hover:text-white hover:rounded-xl">
                  Hi, {userData.name}
                </h1>
              </div>
              <div> <a>Profile</a></div>

              <Button to={"/logout"}>Logout</Button>
            </div>
          }

        </div>
      </div>
    </>
  );
}
