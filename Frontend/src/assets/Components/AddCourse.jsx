import React from 'react'
import Input from './ui/Input'

const AddCourse = () => {

    const handleAddCourse = async (e) =>{
        e.preventDefault();
    }


  return (
    <div>

    <form method='post' onSubmit={handleAddCourse}>

    <div className='flex flex-col w-full'>
      Add Another Course

        <div id="maindiv" className='py-10 mt-5 px-2 w-80 bg-stone-900 rounded-md flex flex-col self-center'>
        <Input placeholder={"Course Title"} labelClass={"text-white"}  onChange={(e) => setName(e.target.value)} />
        <Input placeholder={"Course Description"} onChange={(e) => setName(e.target.value)}  />
        <Input placeholder={"Course price"} onChange={(e) => setName(e.target.value)}  />
        <Input placeholder={" Mode of course"} onChange={(e) => setName(e.target.value)}  />


        <button type="submit" className="align-middle min-h-8 select-none font-sans font-bold text-center
         uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
          text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700
           text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 
           active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap mx-2">
                Add </button>
        </div>

    </div>
    </form>
    </div>
  )
}

export default AddCourse
