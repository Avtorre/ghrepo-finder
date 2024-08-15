
import { createSlice } from "@reduxjs/toolkit"
import { RepoInfo, RepoItem } from "../../lib/types"

//задаём тип данных в этом слайсе
const initialState: RepoInfo = {
  description: "",
  topics: []
}

const currentSlice = createSlice({
    name:'current', 
    initialState,
    reducers: {
      //reducer, присваивающий новое значение 
      setCurrent: (state, action: {payload: RepoInfo}) => {
        return state =  action.payload
      }
    }
})

export const {setCurrent} = currentSlice.actions

export default currentSlice.reducer