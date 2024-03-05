import Button from "./Button";

export default function Course(props) {
  return (
    <>
      <div className="w-72 p-2  shadow-xl  shadow-slate-400 hover:shadow-slate-600 rounded-md border-4 border-white min-h-72 bg-slate-200">
        <img
          className=" rounded-md"
          src={"image.png"}
          alt="Course Image "
        ></img>
        <h2 className="courseName text-xl text-slate-600 font-semibold text-center">
          {props.name}
        </h2>
        <p className="description leading-none	text-slate-700">
          {props.description}
        </p>

        <div className="flex self-center w-full justify-around	 mt-2 p-2 	">
          <Button style={" mx-2 bg-black "}> Add to Cart</Button>
          <Button> Buy Now</Button>
        </div>
      </div>
    </>
  );
}
