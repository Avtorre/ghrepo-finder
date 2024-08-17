import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repoStore/repoReducer";
import currentReducer from "./currentStore/currentReducer";
import tokenReducer from "./tokenStore/apiReducer";
import apiReducer from "./tokenStore/apiReducer";

//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      repos: repoReducer,
      current: currentReducer,
      api: apiReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch