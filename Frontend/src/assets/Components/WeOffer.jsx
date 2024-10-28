import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useState } from 'react';

const courses = [
  {
    category: 'School Education',
    details: [
      { title: 'Classes 5-8', description: 'Building strong foundations in Mathematics, Science, and Language with interactive learning methods.' },
      { title: 'Classes 9-10', description: 'Focused preparation for board exams with rigorous practice sessions and conceptual clarity.' },
      { title: 'Classes 11-12', description: 'Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.' },
    ],
  },
  {
    category: 'Engineering (B.Tech)',
    details: [
      { title: 'Classes 5-8', description: 'Building strong foundations in Mathematics, Science, and Language with interactive learning methods.' },
      { title: 'Classes 9-10', description: 'Focused preparation for board exams with rigorous practice sessions and conceptual clarity.' },
      { title: 'Classes 11-12', description: 'Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.' },
    ],
  },
  {
    category: 'Government Jobs Preparation',
    details: [
      { title: 'Banking Exams', description: 'Coaching for IBPS, SBI PO/Clerk, RBI exams with a focus on Quantitative Aptitude, Reasoning, English, and General Awareness.' },
      { title: 'Civil Services', description: 'Preparation for UPSC, State PSC exams with specialized modules in General Studies, CSAT, and optional subjects.' },
      { title: 'Railway Exams', description: 'Coaching for RRB NTPC, RRB Group D, and other railway exams with focused training on relevant subjects.' },
      { title: 'SSC Exams', description: 'Training for SSC CGL, SSC CHSL, and other exams with comprehensive coverage of syllabus and extensive practice sessions.' },
    ],
  },
];

const WeOffer = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
    <Box>
        <Typography variant='h5'>
            Vision Classes 
        </Typography>
        <Typography variant='h2'>
        Empowering Students for a Brighter Future
        </Typography>
    </Box>
      {courses.map((course, index) => (
        <Card key={index} className="w-full md:w-96 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <Box className="flex items-center justify-between">
              <Typography variant="h5" className="font-bold text-gray-800">
                {course.category}
              </Typography>
              <IconButton
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded === index}
                aria-label="show more"
              >
              <ExpandMoreIcon />
              </IconButton>
            </Box>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <Box className="mt-4 space-y-4">
                {course.details.map((detail, i) => (
                  <Box key={i} className="border-l-4 pl-4 border-gray-500">
                    <Typography variant="subtitle1" className="font-semibold text-gray-700">
                      {detail.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {detail.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WeOffer;
