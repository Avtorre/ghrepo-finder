//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { RequestResult } from '../lib/types'

//хук, возвращающий запрос на поиск репозиториев (GraphQL)
const useSearch = () => {

  const search: (query: string, token:string) => Promise<RequestResult> = async(query:string, token:string) =>{
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization:`token ${token}`, //добавляем токен в хедер запроса
      }
    })

    //тело запроса
    return await graphqlWithAuth(`
    {
      search(type: REPOSITORY, query: "${query}", first: 100) {
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
    }`) as unknown as Promise<RequestResult>
  }
  //возвращаем функцию отправки запроса 
  return {search}
}

export default useSearch