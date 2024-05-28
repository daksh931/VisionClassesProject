import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserData } from "../../store/Slices/authSlice";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {token, userData} = useSelector((state)=> state.auth);
  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log(email,password)
    const logindata = {
      email:email,
      password:password,
    }

    const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/v1/user/login",
    JSON.stringify(logindata),
    {
      headers:{
        "Content-Type": "application/json",
      },
      withCredentials:true,
    }).then((res)=> {
      console.log(res.data.user)

      dispatch(setToken(JSON.stringify(res.data.token)))
      localStorage.setItem("token",JSON.stringify(res.data.token))
      
      dispatch(setUserData(res.data.user))
      localStorage.setItem("user",JSON.stringify(res.data.user))
    
    })
    
    // console.log(res.data.token)
    // console.log(loginData)
    console.log("Success Login")
    return navigate('/')
  }


  return (
    <>
      <form method="post" onSubmit={handleLogin}>

      <div className="login-container flex flex-col w-full min-h-[120vh] bg-slate-300">
        <div className="self-center shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  rounded-md border-4 border-white mt-12 min-h-72 min-w-72  bg-slate-400 p-4 font-semibold">
          <h2 className="text-slate-700 text-center font-bold text-2xl ">
            Login Here
          </h2>

          <Input type={'email'}  placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} />
          <Input  type={'password'} placeholder={"Password"} onChange={(e)=> setPassword(e.target.value)}  />

          <div className="flex justify-center w-full">
            <button type="submit"  className="align-middle min-h-8 mt-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
               Login </button>
            {/* //custom Button component not working */}
            {/* <button type="submit" className={"px-5 mt-5"} > Login </button> */}
          </div>
            <div className="flex justify-center text-md hover:text-white mt-2"> <Link to={'/forgotpassword'}> Forgot Password?</Link> </div>
        </div>
      </div>
      </form>
    </>
  );
}
