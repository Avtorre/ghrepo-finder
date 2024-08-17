
import { createSlice } from "@reduxjs/toolkit"
import { RepoItem } from "../../lib/types"

const initialState = {
  api:'',
  token: ''
}

const apiSlice = createSlice({
    name:'api', 
    initialState,
    reducers: {
      setAPI: (state, action: {payload: string}) => {
        console.log('first', action.payload)
        return state = {...state, api:action.payload}
      },
      //reducer, присваивающий новое значение 
      setToken: (state, action: {payload: string}) => {
        return state = {...state, token: action.payload}
      }
    }
})

export const {setToken, setAPI} = apiSlice.actions

export default apiSlice.reducer