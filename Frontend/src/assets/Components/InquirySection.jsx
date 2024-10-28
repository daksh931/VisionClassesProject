import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box className="flex flex-col md:flex-row bg-gray-100 p-6">
      {/* Image Section */}
      <Box
        className="md:w-1/2 h-64 md:h-auto overflow-hidden relative transition-transform duration-500 transform hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3183169/pexels-photo-3183169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className="absolute inset-0 bg-black opacity-30" />
      </Box>

      {/* Inquiry Form Section */}
      <Box className="md:w-1/2 flex flex-col justify-center p-6">
        <Typography variant="h4" className="font-bold mb-4 text-gray-800 flex justify-center pb-8">
          Inquiry Form
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            className="w-full"
          />
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            className="w-full"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default InquirySection;
