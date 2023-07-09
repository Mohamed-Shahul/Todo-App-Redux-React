import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./components/TodoSlice";

export const store=configureStore({
    reducer:{
        todos:TodoSlice,
    }
})

