
import { createSlice } from "@reduxjs/toolkit"
import { RepoItem } from "../../lib/types"

//задаём тип данных и начальное значение
const initialState: {loading:boolean, repos: RepoItem[]} = {
  loading: false, //добавил флаг в хранилище, т.к. он задаётся и вызывается в разных компонентах 
  repos: []
}

//слайс, в котором хранятся результаты поиска и флаг загрузки
const repoSlice = createSlice({
    name:'results', 
    initialState,
    reducers: {
      //присваиваем обработанный массив  
      setRepos: (state, action: {payload: RepoItem[]}) => {
        return state =  {...state, repos:action.payload}
      },
      //меняем флаг загрузки
      setLoading: (state, action: {payload: boolean}) => {
        return state = {...state, loading: action.payload}
      } 
    }
})

export const {setRepos, setLoading} = repoSlice.actions

export default repoSlice.reducer