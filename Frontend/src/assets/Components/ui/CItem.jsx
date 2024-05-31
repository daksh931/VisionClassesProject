import React from 'react'
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

            <div className='flex w-full my-5 px-5 justify-between '>

                <div className='flex'>
                    <div id='Course photo' className=' mr-2'>
                        <img
                            className=" pb-2 rounded-md object-cover h-16 w-20"
                            src={props.image}
                            alt="Course Image ">
                        </img>
                    </div>

                    <div id='Course name' className='flex flex-col text-start font-sans font-semibold'>
                        <a className='text-xl font-semibold text-start '> {props.name} </a>
                        <a > Price - {props.price} </a>
                    </div>
                </div>

                <div className='flex flex-col '>

                    <div id='buttoms' className='flex'>
                        <button onClick={removeCartHandler} className="align-middle  font-normal text-center uppercase  text-xl px-3 py-0 rounded-md bg-zinc-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.95] border-[1px]
        border-white hover:border-zinc-900 text-nowrap">
                            - </button>
                        <a className='pt-[4px] px-1 min-w-8 text-center'>{props.quantity}</a>

                        <button onClick={addToCartHandler} className="align-middle  font-normal  text-center uppercase  text-xl px-3 py-0 rounded-md bg-zinc-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px]
        border-white hover:border-zinc-900 text-nowrap">
                            + </button>
                    </div>
                    <div id='totalprice per cartItem' className='flex  font-mono font-bold tracking-tighter min-w-40'>
                        <a> Total Price - {props.totalPrice} </a>
                    </div>

                </div>

            </div>

          

        </>
    )
}
