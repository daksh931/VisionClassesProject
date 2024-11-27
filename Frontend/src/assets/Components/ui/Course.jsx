import Button from "./Button";
import { useDispatch ,useSelector} from "react-redux";
import cartSlice from "../../../store/Slices/cartSlice";
import { cartActions } from "../../../store/Slices/cartSlice";

export default function Course(props) {

  // console.log(props)
  const dispatch = useDispatch();

  const { token, userData } = useSelector((state) => state.auth)

  
  const addToCartHandler = () =>{
    if(!token || token ==null || !userData || userData ==null){
      alert("login First")
    }
    const{id, name, description, image, price}= props;
    // console.log(id, name, description, image, price)
    // const item={ id, name, description, image, price}
  
    dispatch(cartActions.addItemToCart({id, name, description, image, price}));
  }

  return (
    <>
      <div className="w-[85vw] max-w-96 sm:max-w-72 p-2 flex flex-col justify-between shadow-xl  shadow-slate-200 hover:shadow-slate-300 rounded-md  min-h-72 bg-slate-50 border-[1px] border-slate-300">
        <div className="mb-1">
          <img
            className=" pb-2 rounded-md object-cover h-56 w-96"
            src={props.image}
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

        <div className="flex w-full right-0 bottom-0 justify-around	mt-2 p-2 ">
        <button onClick={addToCartHandler} >
        <Button to={''} style={"px-5 mt-5 w-full"} > Add to Cart </Button>
        </button>

        <button onClick={addToCartHandler} >
        <Button to={''} style={"px-5 mt-5 w-full"} > Buy Now </Button>
        </button>
        {/* <button type="submit"  className="align-middle min-h-8 mt-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
        Buy Now </button>  */}
        </div>
      </div>
    </>
  );
}
