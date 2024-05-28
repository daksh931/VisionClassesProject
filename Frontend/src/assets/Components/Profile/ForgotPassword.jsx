import React, { useState, useEffect } from 'react'
import Input from '../ui/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const handleForgotPassword = async (e) => {
        e.preventDefault();

        const data = {
            email:email,
          }
        try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/user/password/forgot',
            JSON.stringify(data), 
            {
            headers: {
                "Content-Type": "application/json",
                },
            withCredentials:true,
            }).
            then((res) => {
                alert(res.data.message)
            })
        } catch (error) {
            console.log(error.response.data.message)
            alert(error.response.data.message)
        }
        // console.log("Reset password link sent sucessfully on mail")
        setEmail("")
        
    }

    return (
        <div>
            <>
                <form method="post" onSubmit={handleForgotPassword}>

                    <div className="forgotpassword-container flex flex-col w-full min-h-[120vh] bg-slate-300">
                        <div className="self-center shadow-xl shadow-zinc-400 hover:shadow-zinc-500  rounded-3xl border-[1px] border-white mt-24 min-h-56 min-w-76  bg-slate-400 p-4 font-semibold">
                            <h2 className="text-slate-700 text-center font-bold text-2xl my-3 pb-5">
                                Forgot Password
                            </h2>

                            <Input type={'email'} placeholder={"Enter Registered Email"} onChange={(e) => setEmail(e.target.value)} />

                            <div className="flex justify-center w-full">
                                <button type="submit" className="align-middle min-h-8 mt-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
                                    Continue </button>
                                {/* //custom Button component not working */}
                                {/* <button type="submit" className={"px-5 mt-5"} > Login </button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}


