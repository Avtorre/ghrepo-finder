
import { createSlice } from "@reduxjs/toolkit"
import { RepoItem } from "../../lib/types"

//задаём тип данных в этом слайсе
const initialState: RepoItem = {
  id: "",
  name: "",
  forks: 0,
  stars: 0,
  date: "",
  owner: ""
}

const currentSlice = createSlice({
    name:'current', 
    initialState,
    reducers: {
      //reducer, присваивающий новое значение 
      setCurrent: (state, action: {payload: RepoItem}) => {
        return state =  action.payload
      }
    }
})

export const {setCurrent} = currentSlice.actions

export default currentSlice.reducer