import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    
      <Link
        to={`${props.to}`}
        className={`align-middle min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-zinc-950  text-white hover:text-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px] border-gray-500 hover:border-gray-900 text-nowrap	 mx-2  ${props.style}`}
        type={`${props.type}:"button"`}
      >
        {props.children}
      </Link>
    
  );
}
