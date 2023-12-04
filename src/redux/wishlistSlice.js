import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        deleteFromWishlist:(state,action)=>
        {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
          },
          removeCartItems:(state,action)=>{
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
          }
     
    }
})

export const {addToWishlist,deleteFromWishlist,removeCartItems}= wishlistSlice.actions
export default wishlistSlice.reducer