import React from 'react'
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/Slices/cartSlice";


export default function CItem(props) {
    // console.log(props)

    const dispatch = useDispatch();
    // console.log(finalTotalPrice)


    const addToCartHandler = () => {
        const { id, name, description, image, price, quantity, totalPrice } = props;
        // console.log(id, name, description, image, price)
        // const item={ id, name, description, image, price}

        dispatch(cartActions.addItemToCart({ id, name, description, image, price, quantity, totalPrice }));
    }
    const removeCartHandler = () => {
        const { id, name, description, image, price, quantity, totalPrice } = props;
        // console.log(id, name, description, image, price)
        // const item={ id, name, description, image, price}

        dispatch(cartActions.removeItemCart({ id, name, description, image, price, quantity, totalPrice }));
    }


    // console.log(props)

    return (
        <>
            {/* one Item in cart display main div  */}
                <div className=' w-full p-1  bg-zinc-100 '>

            <div className='flex flex-col sm:flex-row border-2 justify-between border-zinc-200 w-full p-2 rounded-md '>


                {/* div-1 image title price per item  */}
                <div className='flex '>
                    <div id='Course photo' className=' mr-2'>
                        <img
                            className=" pb-2 rounded-md object-cover h-28 w-24 md:h-36 md:w-32"
                            src={props.image}
                            alt="Course Image ">
                        </img>
                    </div>

                    <div id='Course name' className='flex flex-col text-start font-sans font-semibold'>
                        <a className='text-xl font-semibold text-start '> {props.name} </a>
                        <a > Price - {props.price} </a>
                    </div>
                </div>

                {/* div-2  Quantity add+ subs- buttons total price   */}
                <div className='flex flex-col justify-end mt-5 md:mt-0'>

                    <div id='buttons' className='flex  pr-5'>
                    <button onClick={removeCartHandler} className="border-2 border-gray-500 px-2 h-8 rounded-md hover:bg-zinc-700 hover:text-white">
                            <FaMinus /> </button>
                        
           
                        <span className='pt-[4px] px-1 min-w-8 text-center'>{props.quantity}</span>

                        <button onClick={addToCartHandler} className="border-2 border-gray-500 px-2 h-8 rounded-md hover:bg-zinc-700 hover:text-white font-extrabold text-xl">
                            < IoMdAdd /> </button>
                    </div>
                    <div id='totalprice per cartItem' className='flex  font-semibold tracking-tighter min-w-40 pt-3'>
                        <span> Total Price - ₹ {props.totalPrice} </span>
                    </div>

                </div>

            </div>

            </div>
          

        </>
    )
}
