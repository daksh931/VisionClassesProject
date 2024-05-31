import React from 'react'
import CItem from './ui/CItem'
import { useSelector } from 'react-redux'


export default function Cart() {
    const items = useSelector((state) => state.cart.items)
    const { finalTotalPrice } = useSelector(state => state.cart);

    // console.log(items[0])
    return (
        <>
            <div className='bg-slate-300 w-full min-h-[100vh]'>

                <div className='flex justify-center pt-16 '>
                
                {finalTotalPrice===0 && 
                <div className='flex justify-center items-center border-4 border-zinc-600 hover:border-zinc-900 w-5/12 min-h-28 rounded-xl shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  bg-zinc-200 '>
                        <a className='text-center text-2xl hover:text-zinc-600 font-semibold'> Sorry, Your Cart is Empty! </a>                    
                    </div>
                    
                }

                {finalTotalPrice!==0 && 

                    <div className='border-4 border-zinc-600 hover:border-zinc-900 w-5/12 min-h-28 rounded-xl shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  bg-zinc-200'>

                        {
                            items.map((item, index) =>
                                <div key={index}>
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
                        <div id='cart total price' className='px-6 pb-4 flex justify-end'>
                            <div className='text-xl font-medium pr-2  min-w-48 '>
                                Final Price - {finalTotalPrice}
                            </div>
                        </div>
                        
                    </div>
}



                </div>
            </div>

        </>
    )
}


