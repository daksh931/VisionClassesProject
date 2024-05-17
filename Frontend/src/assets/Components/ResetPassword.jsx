import axios from 'axios';
import React from 'react'
import Input from './ui/Input';

const ResetPassword = () => {

    const handleResetPassword = async (e)=>{
        e.preventDefault();
        // const response = await axios.put('http://localhost:4000/api/v1/user/password/reset/:userid/:token')
    }

  return (
    <>
     <form method="post" onSubmit={handleResetPassword}  >

<div id="Signup-container" className="flex flex-col w-full min-h-[120vh] bg-slate-300">
  <div className="self-center mt-12 shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  rounded-md border-4 border-white  min-h-72 min-w-72  bg-slate-400 p-4 font-semibold">
    <h2 className="text-slate-700 text-center font-bold text-2xl ">
      Reset Password
    </h2>

  
    <Input type={'password'} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} classname="mt-5" />
    <Input type={'password'} placeholder={"Confirm Password"} onChange={(e) => setPassword(e.target.value)} classname="mt-5" />

 

    <div className="flex justify-center w-full">
      {/* <Button to={'/'} style={"px-5 mt-5"} > Signup </Button> */}
      {/* //custom Button component not working */}

      <button type="submit" className="align-middle min-h-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
        Reset </button>
    </div>
  </div>
</div>
</form>
    </>
  )
}

export default ResetPassword;
