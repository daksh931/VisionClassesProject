import React, { useState } from 'react'
import Input from './ui/Input'

export default function UpdateProfile() {
  
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");

    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        if(password !== confirmPassword){
            alert("password mismtach")
            return;
        }
        
        console.log(name, email, phone, password, confirmPassword)

        const updateData = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword
        }
        
    }

    return (
      <form method="post" onSubmit={handleSubmit}  >

    <div className='flex flex-col items-center '>
        <div className='font-extrabold mt-5 text-center text-2xl text-zinc-700 '>  <a> Update Your Profile</a> </div>
        <div id="updateProfile" className='mb-16 min-w-80 rounded-md  bg-zinc-300 border-2 border-zinc-700 mt-8 px-2 flex-col space-y-2'>
            < Input placeholder="Name" onChange={(e)=> setName(e.target.value) }/> 
            < Input placeholder="Email" onChange={(e)=> setEmail(e.target.value) }/> 
            < Input placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value) }/> 
            < Input type='password' placeholder="Password" onChange={(e)=> setPassword(e.target.value) }/> 
            < Input type='password' placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value) }/> 
        
        <div className='flex justify-center '>  <button  type='submit' className='py-[2px] bg-zinc-700 text-white px-4 mb-2 shadow-xl rounded-md border-black border-2 hover:bg-zinc-900 hover:text-zinc-200 font-medium text-[17px]' > 
        Update </button> </div>
        </div>
    </div>
        </form>
  )
}


