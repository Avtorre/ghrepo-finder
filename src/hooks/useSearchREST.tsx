import { useEffect, useState } from 'react'

import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { SearchResult } from '../lib/types'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Octokit } from 'octokit'


//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
const useSearchREST = () => {
  const [response, setResponse] = useState<GraphQlQueryResponseData>()
  const [error, setError] = useState()
  const octokit = new Octokit()
  
  //process.env.REACT_APP_GH_TOKEN
  const searchRest: (query: string) => Promise<SearchResult> = async(query:string) =>{
    return await octokit.request(`GET /search/repositories?q=${query}`)}
  return {searchRest}
}

export default useSearchREST