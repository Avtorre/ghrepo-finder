import { useEffect, useState } from 'react'

import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { RepoItem, SearchResult } from '../lib/types'

//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
const useFullInfo = () => {
  const [response, setResponse] = useState<GraphQlQueryResponseData>()
  const [error, setError] = useState()
  

  const getInfo: (row: RepoItem, token:string) => Promise<SearchResult> = async(row: RepoItem, token:string) =>{
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization:`Bearer ${token}`,
      }
    })
    
    return await graphqlWithAuth(`
    {
      repository(name: "${row.name}", owner: "${row.owner}") {
        description
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }`) as unknown as Promise<SearchResult>
  }
  return {getInfo}
}

export default useFullInfo