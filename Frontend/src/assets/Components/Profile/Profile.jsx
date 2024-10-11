import React from 'react'
import {useSelector } from "react-redux";


export default function Profile() {

    const { token, userData } = useSelector((state) => state.auth)
    var purchasedCourse = "You have not purchased any course yet."

    if( userData.purchasedCourses.length != 0 || userData.purchasedCourses != 0 ){
        purchasedCourse = userData.purchasedCourses ;
    }
    return (
        <div className='min-h-[90vh]'>

        <div className='flex justify-center'>
            <div className=' mt-12 shadow-zinc-400 shadow-lg hover:shadow-zinc-400  hover:shadow-xl sm:w-2/6 flex flex-col space-y-6 border-zinc-700 py-2  
            font-medium text-lg bg-zinc-300 rounded-md p-5 px-5 '>
            <h1 className='text-2xl text-center'> Personal Information </h1>
            <a >Your Name - {userData.name} </a>
            <a>Your Email - {userData.email}</a> 
            <a>Your Phone number - {userData.phone}</a> 
            <a>Your Role - {userData.role}</a> 
            <a>Your Purachased Courses - {purchasedCourse}</a> 
        </div>
        </div>
        </div>
    )
}

