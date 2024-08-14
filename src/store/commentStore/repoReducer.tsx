
import { createSlice } from "@reduxjs/toolkit"
import { RepoItem } from "../../lib/types"

//задаём тип данных в этом слайсе
const initialState: RepoItem[] = []

const repoSlice = createSlice({
    name:'comments', 
    initialState,
    reducers: {
      //reducer, присваивающий новое значение 
      setRepos: (state, action: {payload: RepoItem[]}) => {
        return state =  action.payload
      }
    }
})

export const {setRepos} = repoSlice.actions

export default repoSlice.reducer