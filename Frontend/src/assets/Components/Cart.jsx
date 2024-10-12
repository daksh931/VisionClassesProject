import React from 'react'
import CItem from './ui/CItem'
import { useSelector } from 'react-redux'


export default function Cart() {
    const items = useSelector((state) => state.cart.items)
    const { finalTotalPrice } = useSelector(state => state.cart);
    const { totalQuantity } = useSelector(state => state.cart)
    // console.log(items[0])
    return (
        <>
            <div className='bg-slate-300 w-full min-h-[100vh] p-5'>

                <div className='flex  justify-center pt-8 '>

                    {finalTotalPrice === 0 &&
                        <div className='flex justify-center items-center border-4 border-zinc-600 hover:border-zinc-900 w-10/12 sm:w-5/12 min-h-28 rounded-xl shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  bg-zinc-200 '>
                            <a className='text-center text-2xl hover:text-zinc-600 font-semibold'> Your Cart is Empty! </a>
                        </div>

                    }

                    {finalTotalPrice !== 0 &&
                        <div className='flex flex-col md:flex-row md:space-x-7 space-y-12 md:space-y-0 w-full p-4 '>

                            <div className=' min-w-[70%] min-h-28'>

                                {
                                    items.map((item, index) =>
                                        <div key={index} className='  '>
                                            <CItem
                                                key={item._id}
                                                id={item.ItemId}
                                                name={item.name}
                                                description={item.description}
                                                price={item.price}
                                                image={item.image}
                                                quantity={item.quantity}
                                                totalPrice={item.totalPrice}
                                            />
                                        </div>

                                    )
                                }


                            </div>

                            {/*  Final amount to be paid div payment cart sum right side */}

                            <div className=' min-w-[28%] h-72 p-2 pl-3 flex flex-col justify-evenly
                                 rounded-sm shadow-sm shadow-zinc-100 hover:shadow-zinc-500 
                                 bg-zinc-100  pr-2'>
                                <span className='text-md font-bold text-zinc-500'> PRICE DETAILS </span> <br />
                                <hr />

                                <div className=' flex flex-col m-5 space-y-3 mt-2 text-md text-gray-800 '>


                                    <span className='flex  justify-between w-full'>
                                        <span>   Total Items  </span>
                                        <span>    {totalQuantity} </span>
                                    </span>

                                    <span className='flex  justify-between w-full'>
                                        <span>   Sub Total  </span>
                                        <span>   ₹ {finalTotalPrice}</span>
                                    </span>

                                    <span className='flex  justify-between w-full'>
                                        <span>   GST Amount  </span>
                                        <span>   ₹ {Math.round((finalTotalPrice / 100) * 18)}</span>
                                    </span>

                                    <span className='flex  justify-between w-full'>
                                        <span>   Final Amount  </span>
                                        <span>   ₹ {Math.round(finalTotalPrice + (finalTotalPrice / 100) * 18)}</span>
                                    </span>

                                    <button className="flex self-center bg-green-800 hover:bg-green-900 text-white font-bold py-1 
                                    px-3 rounded-lg shadow-md transition duration-300 ease-in-out max-w-28">
                                        Pay Now
                                    </button>
                                </div>



                            </div>

                        </div>

                    }


                </div>
            </div>

        </>
    )
}


