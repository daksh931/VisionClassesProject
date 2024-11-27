import Course from "./ui/Course";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./ui/Loading";


export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const[loading,setLoading] = useState(true);
  const itemsPerPage = 3;
  
  useEffect(() => {
    // console.log("worked")
    function fetchData(page) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/course/getcourses`, {
          params: { page, limit: itemsPerPage },
        })
        .then((response) => {
          setCourseData(response.data.courses);
          setTotalPages(response.data.totalPages); // Update based on backend response
        })
        .catch((error) => console.error("Error fetching data:", error))
        .finally( ()=>
          {
            setLoading(false)
    });
    }

    fetchData(currentPage);
  }, [currentPage]);

  
  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }


  if(loading){
    return(
    <Loading />)
  }

  return (
    <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col justify-evenly">
      <div className="flex flex-wrap px-10 pb-3  sm:pt-1 justify-center w-full  ">
        {courseData.map((item, index) => (
          <div className="flex basis-1/4 my-3 mx-2" key={item._id}>
            <Course
              id={item._id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center place-content-end mt-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}



// import Course from "./ui/Course";
// import { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Courses() {

// const [courseData, setCourseData]= useState([]);

// useEffect(()=>{
//    function fetchData(){
//      axios.get(import.meta.env.VITE_BACKEND_URL+'/api/v1/course/getcourses').then((response)=>{
//               // console.log(response.data.courses[0]._id)
//               setCourseData(response.data.courses)
//             });


// }

// fetchData();
// },[])

// // await fetch('http://localhost:4000/api/v1/course/getcourses').then((response)=>{
// //       response.json().then((data)=>{
// //         // console.log(data)
// //         setCourseData(data.courses)
// //       })
// //     }) fetch we get response -> response.json() -> data ->
// //  but in axios it is straight forward and axios is better to handle req and data ... 


//   return (
//     <>
//     <div className="w-full min-h-[100vh] bg-slate-100">
//       <div className=" flex  flex-wrap px-10 pb-3 pt-5 sm:pt-1  justify-center  w-full">
//         {/* {console.log("courseData  " + courseData)} */}
//             {courseData.map((item,index) =>
//           <div className="flex basis-1/4 my-3 mx-2"  key={index}>
//             <Course
//               key={item._id}
//               id={item._id}
//               name={item.title}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//             />
//           </div>
//         )}
//       </div>
      
//     </div>
//   </>
//   );
// }
