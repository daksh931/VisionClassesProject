import React from 'react'
import {useSelector } from "react-redux";


export default function Profile() {

    const { token, userData } = useSelector((state) => state.auth)
    var purchasedCourse = "You have not purchased any course yet."

    if( userData.purchasedCourses.length != 0 || userData.purchasedCourses != 0 ){
        purchasedCourse = userData.purchasedCourses ;
    }
    return (
        
        <div className='flex justify-center'>
            <div className=' mt-12 border-8 flex flex-col space-y-6 border-zinc-200 py-2 font-medium text-xl bg-zinc-300 rounded-md px-5 '>
            <a > Name - {userData.name} </a>
            <a> Email - {userData.email}</a> 
            <a> Phone number - {userData.phone}</a> 
            <a> Role - {userData.role}</a> 
            <a> Purachased Courses - {purchasedCourse}</a> 
        </div>
        </div>
    )
}

