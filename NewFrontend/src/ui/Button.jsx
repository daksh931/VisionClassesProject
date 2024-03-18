import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <Link
        to={`${props.to}`}
        class={`align-middle min-h-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2  ${props.style}`}
        type="button"
      >
        {props.children}
      </Link>
    </>
  );
}
