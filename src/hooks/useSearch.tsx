import { useEffect, useState } from 'react'

import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { SearchResult } from '../lib/types'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'


//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
const useSearch = () => {
  const [response, setResponse] = useState<GraphQlQueryResponseData>()
  const [error, setError] = useState()

  
  //process.env.REACT_APP_GH_TOKEN
  const search: (query: string, token:string) => Promise<SearchResult> = async(query:string, token:string) =>{
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization:`token ${token}`,
      }
    })

    return await graphqlWithAuth(`
    {
      search(type: REPOSITORY, query: "${query}", last: 100) {
        repos: edges {
          repo: node {
            ... on Repository {
              id
              name
              primaryLanguage{
                name
              }
              forkCount
              stargazerCount
              updatedAt
              owner {
                login
              }
            }
          }
        }
      }
    }`) as unknown as Promise<SearchResult>
  }
  return {search}
}

export default useSearch