export default function Input(props) {

  const textType = ""
  // const textColorr = ""

  return (
    <>
      <div className=" p-2 ">
        <label
          htmlFor={`${props.placeholder} `}
          className={"block text-md font-medium text-gray-900 mb-[1.5px] pl-[1.8px]"}
       
        >
          {props.placeholder}
      
        </label>
        <input
      
          type= { textType ? `${props.type}` : "text"}
          id={`${props.placeholder} `}
          // border-2 border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500  
          // className="block w-full p-1 text-gray-900 border-[1px] focus:ring-zinc-900 focus:bg-zinc-100  pl-2"
          className="block w-full p-1 text-gray-900 border-[1px] border-gray-800 rounded-lg bg-gray-50 focus:border-blue-500 focus:outline-none pl-2"
          
          
          placeholder={`${props.placeholder} `}
          {...props}
          />
      </div>
    
    <>
    </>
    
    </>
  );
}
