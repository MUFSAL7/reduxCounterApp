import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";


const counterStore = configureStore({
    reducer:{

        counterReducer:counterSlice
    }
})

export default counterStore