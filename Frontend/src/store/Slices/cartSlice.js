import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
  }

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers : {
        addItemToCart(state,action){
            const newItem = action.payload;
            const exitingItem = state.items.find((items)=> item.id === newItem.id);
            state.totalQuantity++;
        }

    },
})

export default cartSlice.reducer;