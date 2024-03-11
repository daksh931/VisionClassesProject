import Button from "./Button";

export default function Course(props) {
  return (
    <>

      <div className="max-w-72 p-2 flex flex-col justify-between shadow-xl  shadow-slate-400 hover:shadow-slate-600 rounded-md border-4 border-white min-h-72 bg-slate-200">
      <div className="mb-1">
        <img
          className=" pb-2 rounded-md"
          src={"image.png"}
          alt="Course Image "
          ></img>

        <div className="flex flex-col justify-between min-h-24">

        <h2 className="courseName/Title text-xl py-1 text-slate-600 font-semibold leading-none">
          {props.name}
        </h2>
        <p className="description leading-none py-1	text-slate-700">
          {props.description}
        </p>
        <p className="description leading-none py-1	text-slate-700">
          {`Price - ${props.price} ⟨₹⟩`}
        </p>
          </div>    
        </div>

        <div className="flex w-full right-0 bottom-0 justify-around	mt-2 p-2 	">
          <Button style={" mx-2 bg-black "}> Add to Cart</Button>
          <Button> Buy Now</Button>
        </div>
      </div>
    </>
  );
}
