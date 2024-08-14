import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./commentStore/repoReducer";

//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      repos: repoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch