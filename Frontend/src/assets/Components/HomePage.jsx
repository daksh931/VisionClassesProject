import Navbar from "./Navbar";
import InformationCard from "./InformationCard";
export default function HomePage() {
  return (
    <div>

      {/* <Navbar /> */}

      <div className="bg-slate-100  min-h-[120vh] pb-36">


        <div className="flex flex-col w-full justify-between	">
          <h1 className="font-mono text-2xl font-bold 	p-4">
            Vision Classes 
          <div className="flex justify-center text-4xl py-5 w-7/12">
            Empowering Students for a Brighter Future
          </div>
          </h1>
          
          <div className="text-xl text-zinc-700 font-normal mx-10 px-5 my-12  sm:w-2/5 bg-white  p-4 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-700 drop-shadow-md duration-300 ">
            
          At Vision Classes Tuition Center, we are dedicated to providing high-quality education and personalized tutoring to help students achieve academic excellence. Our experienced educators and comprehensive curriculum ensure that every student reaches their full potential.

          <div className="flex justify-center"> 

          <button className="align-middle min-h-8 select-none font-sans font-bold text-center
         uppercase  disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-zinc-600 duration-300
         text-white  border-2 border-gray-700 hover:bg-zinc-700 hover:border-zinc-900 text-nowrap mx-2">Register Today</button>
         </div>
          </div>


        <div>
          <div>
            
          </div>
        </div>


            <div className="text-center text-4xl font-extrabold font-serif pr-10">Get in touch:</div>
          <div className="flex justify-center mt-5 sm:mr-10 " >
            <div>
            <InformationCard />
            </div>
          </div>


        </div>
      </div>
    
    </div>
  );
}
