import React from "react";

function About() {
  return (
    <div className="py-16 bg-slate-100 min-h-[100vh] ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            {/* <img src={about} alt="image" /> */}
            <img src="https://images.unsplash.com/photo-1482059387495-939d52279925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />

          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Vision Classes 
            </h2>
            <p className="mt-6 text-gray-600">
            Vision Classes  is a premier educational institution located in Ludhiana, India. Founded with the mission to bridge the gap between classroom learning and individual student needs, we offer tailored tutoring sessions that cater to students from primary to higher secondary levels. Our goal is to inspire, motivate, and guide students toward academic success and holistic development.


            </p>
            <p className="mt-4 text-gray-600">
            Our students' success is a testament to our commitment to excellence. Over the years, our students have consistently achieved top ranks in board exams and excelled in competitive exams. Read some of our inspiring success stories and testimonials from students and parents.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
