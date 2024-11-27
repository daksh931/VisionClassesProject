import React from 'react'
import Input from './ui/Input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { setCourseData } from '../../store/Slices/addCourse'
import axios from 'axios'
import { FaRegFileImage } from "react-icons/fa";
import Loading from './ui/Loading'

const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [mode, setMode] = useState("")
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)
  
  const [uploadFileName, setUploadFileName] = useState("Upload")

  const { addCourse } = useSelector((state) => state.addCourse);
  // console.log(import.meta.env.VITE_BACKEND_URL)
  const handleAddCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(title);

    //courseData
    const cData = {
      title: title,
      description: description,
      price: price,
      mode: mode,
      image: image
    }
    
    // console.log(cData)
    try {
    const response = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/course/postCourse',
      // JSON.stringify(cData),
      cData,
      {
        headers: {
          "Content-Type":  "multipart/form-data",
        },
        withCredentials: true,
      }).then((res)=>{
        // dispatch(setCourseData(res.data.))
        // console.log("worked",res)
        alert("Course Added Successfully!")
      }).finally(()=> {
        setLoading(false)
      })
    } catch (error) {
      console.log(error.response.data.message)
    } 
  }

  if(loading ){
    return(
      <Loading />
    )
  }



  return (
    <div>

      <form method='post' onSubmit={handleAddCourse}>

        <div className='flex flex-col w-full min-h-[140vh] bg-slate-100'>
          
   
          <div id="maindiv" className='py-7 mt-5 px-2 w-80 shadow-xl  shadow-slate-200 border-[0.5px] border-gray-400 hover:shadow-slate-300  bg-slate-200  rounded-md flex flex-col self-center text-white'>
            <a className='text-zinc-900 text-2xl text-center font-bold'>Add New Course</a>
            <Input placeholder={"Course Title"}  onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder={"Course Description"} onChange={(e) => setDescription(e.target.value)} />
            <Input placeholder={"Course price"} onChange={(e) => setPrice(e.target.value)} />
            <Input placeholder={" Mode of course"} onChange={(e) => setMode(e.target.value)} />

            <div className="flex items-center p-2 text-white">
      <label className="flex items-center cursor-pointer bg-zinc-600
           text-white border-gray-700 hover:bg-zinc-700 hover:border-zinc-900  border-2 rounded-md p-1">
        <FaRegFileImage className="w-6 h-6  mr-2" />
        <span className="font-semibold">{uploadFileName} </span>
            <input type='file' style={{display: 'none'}} onChange={ (e) => setUploadFileName(e.target.files[0].name.substring(0, 18)) & setImage(e.target.files[0])} />   
      </label>
    </div>
    <button type="submit"
                className={`align-middle  min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-zinc-950  text-white hover:text-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px] border-gray-500 hover:border-gray-900 text-nowrap	 mx-2 `}
              > Add
              </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddCourse