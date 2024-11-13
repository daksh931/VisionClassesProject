import Course from "./ui/Course";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Courses() {

const [courseData, setCourseData]= useState([]);

useEffect(()=>{
   function fetchData(){
     axios.get(import.meta.env.VITE_BACKEND_URL+'/api/v1/course/getcourses').then((response)=>{
              // console.log(response.data.courses[0]._id)
              setCourseData(response.data.courses)
            });

    // await fetch('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
    //         response.json().then((data)=>{
    //           console.log(data)
    //           setCourseData(data.courses)
    //         })
    //       })
}

fetchData();
},[])

// await fetch('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
//       response.json().then((data)=>{
//         // console.log(data)
//         setCourseData(data.courses)
//       })
//     }) fetch we get response -> response.json() -> data ->
//  but in axios it is straight forward and axios is better to handle req and data ... 


  return (
    <>
    <div className="w-full min-h-[100vh] bg-slate-100">
      <div className=" flex  flex-wrap px-10 pb-3 pt-5 sm:pt-1  justify-center  w-full">
        {/* {console.log("courseData  " + courseData)} */}
            {courseData.map((item,index) =>
          <div className="flex basis-1/4 my-3 mx-2"  key={index}>
            <Course
              key={item._id}
              id={item._id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </div>
        )}
      </div>
      
    </div>
  </>
  );
}
