//тип содержащий отображаемую информацию найденных репозиториев
export type RepoItem = {
  id: string,
  name: string,
  lang?: string,
  forks: number, 
  stars: number,
  date: string,
  owner: string
}

//тип данных, получаемых от API
export type SearchResult = {
  repo: {
    id: string,
    name: string,
    primaryLanguage?: {
      name: string
    },
    forkCount: number,
    stargazerCount: number,
    updatedAt: string
    owner: {
      login: string
    }
  }
}

//тип данных, отображаемых в боковом окне при выборе репозитория
export type RepoInfo = {
  desription: string,
  topics: string[]
}

//тип данных, получаемых от API при загрузку дополнительной информации о репозитории
export type InfoResult = {
  desription: string | null,
  repositoryTopics: {
    nodes: string[]
  }
}