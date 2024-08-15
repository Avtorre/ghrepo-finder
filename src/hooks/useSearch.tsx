import { useEffect, useState } from 'react'

import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { SearchResult } from '../lib/types'


//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
const useSearch = () => {
  const [response, setResponse] = useState<GraphQlQueryResponseData>()
  const [error, setError] = useState()
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization:`Bearer ${process.env.REACT_APP_GH_TOKEN}`,
    }
  })

  const search: (query: string) => Promise<SearchResult> = async(query:string) =>{
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