import React, { useState, useEffect } from 'react'
import Input from '../ui/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';



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

                    <div className="forgotpassword-container flex flex-col w-full min-h-[120vh] bg-slate-100">
                        <div className="self-center shadow-xl shadow-zinc-200 hover:shadow-zinc-300  rounded-3xl border-[1px] border-gray-400 mt-24 min-h-80 min-w-80  bg-slate-50 p-4 font-semibold ">
                            <h2 className="text-slate-700 text-center font-bold text-2xl my-3 pb-5">
                                Forgot Password
                            </h2>

                            <Input type={'email'} placeholder={"Enter Registered Email"} onChange={(e) => setEmail(e.target.value)} />

                            <div className="flex justify-center w-full pt-16">
                                <button type="submit flex w-full" >
                                <Button to={''} style={"px-5 mt-5 w-full"} > Forgot Password </Button>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}


