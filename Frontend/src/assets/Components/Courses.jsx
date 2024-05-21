import Course from "./ui/Course";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Courses() {

const [courseData, setCourseData]= useState([]);

useEffect(()=>{
   function fetchData(){
     axios.get('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
              console.log(response.data)
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
    <div className="w-full min-h-[100vh] bg-slate-300">
      <div className=" flex  flex-wrap px-10 pt-5 pb-3 sm:pt-1  justify-center  w-full">
        {/* {console.log("courseData  " + courseData)} */}
            {courseData.map((item,index) =>
          <div className="flex basis-1/4 my-3 mx-2"  key={index}>
            <Course
              key={item.id}
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
