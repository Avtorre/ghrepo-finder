//тип содержащий отображаемую информацию найденных репозиториев
export type RepoItem = {
  id: string,
  name: string,
  lang?: string,
  forks: number, 
  stars: number,
  date: string,
  owner: string,
  description?: string | null,
  topics?: string[]
}

//тип данных, получаемых от API (GraphQL)
export type RequestResult = {
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


//тип данных, получаемых от API при загрузкe дополнительной информации о репозитории (GraphQL)
export type InfoResult = {
  description: string | null,
  repositoryTopics: {
    nodes: [
      {topic: {
        name: string
      }}
    ]
  }
}

//прописал отдельный тип, т.к. он неоднократно будет встречаться в коде
export type APIType = 'REST' | 'GraphQL'

//тип для раздела хранилища, в котором будет храниться выбранная пользователем api и токен(запросы к REST отправляются без токена)
export type APIInfo = {
  api: APIType,
  token: string
}