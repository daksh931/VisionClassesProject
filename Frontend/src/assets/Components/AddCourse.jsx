import React from 'react'
import Input from './ui/Input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { setCourseData } from '../../store/Slices/addCourse'
import axios from 'axios'
import { FaRegFileImage } from "react-icons/fa";



const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [mode, setMode] = useState("")
  const [image, setImage] = useState()
  
  const [uploadFileName, setUploadFileName] = useState("Upload")

  const { addCourse } = useSelector((state) => state.addCourse);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    // console.log(title);

    //courseData
    const cData = {
      title: title,
      description: description,
      price: price,
      mode: mode,
      image: image
    }
    
    console.log(cData)
    const response = await axios.post('http://localhost:4000/api/v1/course/postCourse',
      // JSON.stringify(cData),
      cData,
      {
        headers: {
          "Content-Type":  "multipart/form-data",
        },
        withCredentials: true,
      }).then((res)=>{
        // dispatch(setCourseData(res.data.))
        console.log("worked",res)
      })
  }

  return (
    <div>

      <form method='post' onSubmit={handleAddCourse}>

        <div className='flex flex-col w-full'>
          Add Another Course
   
          <div id="maindiv" className='py-10 mt-5 px-2 w-80 bg-stone-900 rounded-md flex flex-col self-center'>
            <Input placeholder={"Course Title"} labelClass={"text-white"} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder={"Course Description"} onChange={(e) => setDescription(e.target.value)} />
            <Input placeholder={"Course price"} onChange={(e) => setPrice(e.target.value)} />
            <Input placeholder={" Mode of course"} onChange={(e) => setMode(e.target.value)} />

            <div className="flex items-center p-2 text-white">
      <label className="flex items-center cursor-pointer bg-zinc-800 border-zinc-400 border-2 rounded-md p-1">
        <FaRegFileImage className="w-6 h-6  mr-2" />
        <span className="font-semibold">{uploadFileName} Upload</span>
            <input type='file' style={{display: 'none'}} onChange={ (e) => setUploadFileName(e.target.files[0].name) & setImage(e.target.files[0])} />   
      </label>
    </div>
            <button type="submit" className="align-middle w-36 min-h-8 select-none font-sans font-bold text-center
         uppercase  disabled:pointer-events-none
          text-xs py-2 px-3 rounded-lg bg-zinc-800
           text-white  border-2 border-gray-400 hover:border-white text-nowrap mx-2">
              Add </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddCourse