//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
import { graphql, GraphQlQueryResponseData, GraphqlResponseError } from '@octokit/graphql'
import { RepoItem, RequestResult } from '../lib/types'

//хук, возвращающий запрос на дополнительную информацию о репозитории (GraphQL)
const useFullInfo = () => {

  const getInfo: (row: RepoItem, token:string) => Promise<RequestResult> = async(row: RepoItem, token:string) =>{
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization:`Bearer ${token}`, //добавляем токен в хедер запроса
      }
    })
    
    //тело запроса
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
    }`) as unknown as Promise<RequestResult>
  }
  //возвращаем функцию отправки запроса 
  return {getInfo}
}

export default useFullInfo