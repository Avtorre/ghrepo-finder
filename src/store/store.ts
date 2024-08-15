import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repoStore/repoReducer";
import currentReducer from "./currentStore/currentReducer";

//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      repos: repoReducer,
      current: currentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch