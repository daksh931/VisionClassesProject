import Navbar from "./Navbar";
import InformationCard from "./InformationCard";
export default function HomePage() {
  return (
    <div>

      {/* <Navbar /> */}

      <div className="bg-slate-100  min-h-[120vh] pb-36">


        <div className="flex flex-col w-full justify-between	">
          <h1 className="font-mono text-2xl font-bold sm:ml-10	p-4">
            Vision Classes
            <div className="flex justify-center text-4xl py-5 sm:w-7/12">
              Empowering Students for a Brighter Future
            </div>
          </h1>

          <div className="text-xl text-zinc-700 font-normal mx-10 px-5 my-12  sm:w-2/5 bg-white  p-4 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-700 drop-shadow-md duration-300 ">

            At Vision Classes Tuition Center, we are dedicated to providing high-quality education and personalized tutoring to help students achieve academic excellence. Our experienced educators and comprehensive curriculum ensure that every student reaches their full potential.

            <div className="flex justify-center">

              <button className="align-middle min-h-8 select-none font-sans font-bold text-center
         uppercase  disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-zinc-600 duration-300
         text-white  border-2 border-gray-700 hover:bg-zinc-700 hover:border-zinc-900 text-nowrap mx-2 mt-4">Register Today</button>
            </div>
          </div>

          </div>

          {/* mid section  */}
          <div id="enquiry govt jobs card" className="flex flex-col sm:flex-row-reverse mt-10 sm:mt-24">

            <div id="getibtouch text and form">

              <div className="text-center text-4xl font-extrabold font-serif pr-10 flex justify-center sm:justify-end mt-5 sm:mr-20">Get in touch:</div>
              <div className="flex justify-center sm:justify-end mt-5 sm:mr-20" >
                <div>
                  <InformationCard />
                </div>
              </div>
            </div>

            <div id="govt jobs" className="flex flex-col justify-center items-center w-full p-5 text-zinc-700 mt-10 sm:mt-2">
              <h1 className="text-2xl  font-bold sm:w-3/5">
                We offer a wide range of courses to meet the diverse needs of our students:
              </h1>

              <div className="sm:w-3/5 mt-12  hover:shadow-neutral-500 hover:shadow-xl duration-300 rounded-2xl p-5">

                <h2 className="text-xl font-bold font-mono">School Education</h2>
                <ul>
                  <li>Classes 5-8: Building strong foundations in Mathematics, Science, and Language with interactive learning methods.</li>
                  <li>Classes 9-10: Focused preparation for board exams with rigorous practice sessions and conceptual clarity.</li>
                  <li>Classes 11-12: Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.</li>
                </ul>


                <h2 className="text-xl font-bold font-mono pt-10">Engineering (B.Tech)</h2>
                <ul>
                  <li>Classes 5-8: Building strong foundations in Mathematics, Science, and Language with interactive learning methods.</li>
                  <li>Classes 9-10: Focused preparation for board exams with rigorous practice sessions and conceptual clarity.</li>
                  <li>Classes 11-12: Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.</li>
                </ul>

                <h2 className="text-xl font-bold font-mono pt-10">Government Jobs Preparation</h2>
                <ul>
                  <li>Banking Exams: Coaching for IBPS, SBI PO/Clerk, RBI exams with a focus on Quantitative Aptitude, Reasoning, English, and General Awareness.</li>
                  <li>Civil Services: Preparation for UPSC, State PSC exams with specialized modules in General Studies, CSAT, and optional subjects.</li>
                  <li>Coaching for RRB NTPC, RRB Group D, and other railway exams with focused training on relevant subjects.</li>
                  <li>SSC Exams: Training for SSC CGL, SSC CHSL, and other exams with comprehensive coverage of syllabus and extensive practice sessions.</li>
                </ul>


              </div>

            </div>
          </div>

        {/* Lower Section why choose us  */}
        <div id="why choose us ">

        </div>
      </div>

    </div>
  );
}
