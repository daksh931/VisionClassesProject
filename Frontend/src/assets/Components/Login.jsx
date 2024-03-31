import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    
    console.log(email,password)
    const response = await axios.post("http://localhost:4000/api/v1/user/login",
    JSON.stringify({
      email:email,
      password:password
    }),
    {
      headers:{
        "Content-Type": "application/json",
      }
    }).then((res)=> {console.log(res.data)})
    
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

          <Input type={'email'}  placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} classname="mt-5" />
          <Input  type={'password'} placeholder={"Password"} onChange={(e)=> setPassword(e.target.value)} classname="mt-5" />

          <div className="flex justify-center w-full">
            <button type="submit"  className="align-middle min-h-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
               Login </button>
            {/* //custom Button not working */}
            {/* <button type="submit" className={"px-5 mt-5"} > Login </button> */}

          </div>
        </div>
      </div>
      </form>
    </>
  );
}
