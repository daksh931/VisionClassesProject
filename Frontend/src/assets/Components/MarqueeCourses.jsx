import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";


const courses = [
  { id: 1, name: " Competitive Exams" },
  { id: 2, name: "Banking Exams" },
  { id: 3, name: "Interview Prepration" },
  { id: 4, name: "Data Science" },
  { id: 5, name: "Machine Learning" },
  { id: 6, name: "AI and Robotics" },
  { id: 7, name: "Cybersecurity" },
  { id: 8, name: "Cloud Computing" },
  { id: 9, name: "Cloud Computing" },
  // Add more courses as needed
];

const MarqueeCourses = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <Box className="overflow-hidden relative bg-gray-900 py-2">
      <Box
        className="flex whitespace-nowrap animate-scroll text-gray-300 text-lg"
        sx={{
          animationPlayState: isHovered !== null ? "paused" : "running",
        }}
      >
        {courses.map((course, index) => (
          <Box
            key={course.id}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            className={`px-4 py-2 mx-2 cursor-pointer transition-transform duration-300 ${
              isHovered === index
                ? "text-white scale-105 bg-gray-700 rounded-lg shadow-lg"
                : ""
            }`}
          >
            <Typography variant="h6" className="font-semibold">
              {course.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default MarqueeCourses;
