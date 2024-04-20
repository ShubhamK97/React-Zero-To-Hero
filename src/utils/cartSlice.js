import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanialla(older) Redux => DON'T MUTATE STATE
            //const newState = [...state]
            //newState.items.push(action.payload)
            //return newState

            //But in Redux Toolkit we can mutate it
            //mutating the state here 
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer;