import { useEffect, useState } from 'react'

import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { SearchResult } from '../lib/types'

//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
const useFullInfo = () => {
  const [response, setResponse] = useState<GraphQlQueryResponseData>()
  const [error, setError] = useState()
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization:`Bearer ${process.env.REACT_APP_GH_TOKEN}`,
    }
  })

  const getInfo: (props: {repo: string, owner: string}) => Promise<SearchResult> = async(props: {repo: string, owner: string}) =>{
    return await graphqlWithAuth(`
    {
      repository(name: "${props.repo}", owner: "${props.owner}") {
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