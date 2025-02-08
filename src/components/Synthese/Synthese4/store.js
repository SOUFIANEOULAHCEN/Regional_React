import { configureStore } from "@reduxjs/toolkit";

import productRducer from './slices/ProductSlice';

const store = configureStore({
    reducer:{
        products:productRducer,
    }
});
export default store ;