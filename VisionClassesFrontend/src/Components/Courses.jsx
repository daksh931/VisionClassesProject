import Course from "./ui/Course";
import Navbar from "./Navbar";
import coursesData from "../../public/data/Sampledata";

export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[100vh] bg-slate-300">
        <div className=" flex  flex-wrap px-10 pt-5 pb-3 sm:pt-1  justify-center  w-full">
          {coursesData.map((item) => (
            <div className="flex basis-1/4 my-3 mx-2">
              <Course
                key={item.id}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>
        {/* <Course
        name={"Course name"}
        description={
          "desc of course desc of course desc of course desc of course desc of course desc of course desc of course desc of course desc "
        } 
        /> */}
      </div>
    </>
  );
}
