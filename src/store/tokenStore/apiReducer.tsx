
import { createSlice } from "@reduxjs/toolkit"
import { APIInfo, APIType, RepoItem } from "../../lib/types"

//задаём тип данных и начальное значение
const initialState: APIInfo = {
  api: "REST",
  token: ''
}

//слайс, в котором хранится информация о выбранном api и токен
const apiSlice = createSlice({
    name:'api', 
    initialState,
    reducers: {
      //отдельно задаём api
      setAPI: (state, action: {payload: APIType}) => {
        console.log('first', action.payload)
        return state = {...state, api:action.payload}
      },
      //отдельно задаём токен
      setToken: (state, action: {payload: string}) => {
        return state = {...state, token: action.payload}
      }
    }
})

export const {setToken, setAPI} = apiSlice.actions

export default apiSlice.reducer