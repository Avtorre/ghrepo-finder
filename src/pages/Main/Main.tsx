import React, { useEffect, useState } from 'react'
import classes from './Main.module.css'
import SearchResults from '../../components/SearchResults/SearchResults'
import { RepoItem, SearchResult } from '../../lib/types'
import useSearch from '../../hooks/useSearch'
import { graphql, GraphqlResponseError} from '@octokit/graphql'
import { GraphQlQueryResponseData, GraphQlResponse } from '@octokit/graphql/dist-types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import APIChoice from '../../components/UI/Modals/APIChoice'

//основная страница
//возможно, стоило разместить в папке components, но я создал отдельную папку, т.к. по масштабам этот элемент был больше похож на страницу, чем на встраиваемый компонент
const Main = () => {
  const results: RepoItem[] = useSelector((state: RootState) => state.repos)

  /*
  const {search} = useSearch()

  useEffect(()=>{
    const Search = async () => {
      let resp:SearchResult[]
      await search('internetlab-task').then((data: any) => {
        resp = data.search.repos
        console.log('resp', resp)
        let resArray: RepoItem[] = []
        resp.map(i => {
          console.log('i', i)
          resArray = [...resArray, {
            id: i.repo.id,
            name: i.repo.name,
            lang: i.repo.primaryLanguage.name,
            forks: i.repo.forkCount,
            stars: i.repo.stargazerCount,
            date: i.repo.updatedAt.slice(0,10),
            owner: i.repo.owner.login
          }]
        })
        setResults(resArray)
        //setResults([...resp])
        //console.log('results', results)
      })
    }
    Search()
    //setResults([...results, {id: '132',name: 'Название', lang: 'TS', forks: 123, stars: 2354, date:'12-12-2222'}])
  },[])
*/

  return (
    <div className={classes.main}>
      
      {(results.length)
        ? <SearchResults results={results}/>
        : <h1 className={classes.welcome}>Добро пожаловать</h1>
      }
    </div>
  )
}

export default Main
