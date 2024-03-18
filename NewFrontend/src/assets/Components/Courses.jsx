import Course from "./ui/Course";
import Navbar from "./Navbar";
import coursesData from "../../public/data/Sampledata";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Courses() {

const [courseData1, setCourseData]= useState([]);

// useEffect(()=>{
//   async function fetchData(){
//     await axios.get('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
//               console.log(response.data)
//               setCourseData(response.data)
//             })
//     // await fetch('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
//     //         response.json().then((data)=>{
//     //           console.log(data)
//     //           setCourseData(data.courses)
//   //   //         })
  
// }

// fetchData()
// },[])

// await fetch('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
//       response.json().then((data)=>{
//         // console.log(data)
//         setCourseData(data.courses)
//       })
//     }) fetch we get response -> response.json() -> data ->
//  but in axios it is straight forward and axios is better to handle req and data ... 


  return (
    <>
      <Navbar />
      
      <div className="w-full min-h-[100vh] bg-slate-300">
        



        <Course
        name={"Course name"}
        description={
          "desc of course desc of course desc of course desc of course desc of course desc of course desc of course desc of course desc "
        } 
        />
      </div>
    </>
  );
}
