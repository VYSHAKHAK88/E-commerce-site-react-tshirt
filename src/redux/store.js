import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import searchReducer from "./searchProductSlice"; // Import search slice

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
       WishlistReducer:wishlistSlice,
       cartReducer :cartSlice,
       search: searchReducer,
    }
})

export default store;