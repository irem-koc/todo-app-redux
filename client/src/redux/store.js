//redux toolkit ve react-redux kurulmalıydı.
//npm i @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
})