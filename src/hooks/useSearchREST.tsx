//для отпрваки запросов используется официальная библиотека GH (octokit) для работы с их API 
import { Octokit } from 'octokit'

//хук, возвращающий запрос на поиск репозиториев (REST)
const useSearchREST = () => {
  const octokit = new Octokit()
  
  const searchRest: (query: string) => Promise<any> = async(query:string) =>{
    return await octokit.request(`GET /search/repositories?q=${query}`)}
  return {searchRest}
}

export default useSearchREST