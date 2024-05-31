import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
//     totalQuantity: 0,
//   }

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        // items: localStorage.getItem('cartItems')?localStorage.getItem("cartItems"):[] ,
        items: [],
        totalQuantity: 0,
        finalTotalPrice: 0,
      },
    reducers : {
        addItemToCart(state,action){
            // localStorage.removeItem("cart",localStorage.getItem('cart',));
            const newItem = action.payload;

            const existingItem = state.items.find((item)=> item.ItemId === newItem.id);
            state.totalQuantity++;
            state.finalTotalPrice += newItem.price;

            if(!existingItem){
                state.items.push({
                    ItemId: newItem.id,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    description: newItem.description,
                });
            }
            else{
                existingItem.quantity +=1;
                existingItem.totalPrice += newItem.price;

            }
        },
        
        removeItemCart(state,action){
            const remItem = action.payload;
            // console.log("item " , remItem)

            const existingItem = state.items.find((item)=> item.ItemId === remItem.id);
            console.log("existingItem", existingItem)
            state.totalQuantity--;

            state.finalTotalPrice -= remItem.price;

            if(existingItem.quantity===1){
                state.items = state.items.filter((item)=> item.ItemId !== remItem.id)
                
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        
    },

});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;