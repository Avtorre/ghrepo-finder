import React, { useState } from 'react'
import classes from './Header.module.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import { Button } from '@mui/material'
import useSearch from '../../hooks/useSearch'
import { RepoItem, SearchResult } from '../../lib/types'
import { useDispatch } from 'react-redux'
import { setRepos } from '../../store/repoStore/repoReducer'

const Header = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const {search} = useSearch()

  const Search = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    let resp:SearchResult[]
    await search(query).then((data: any) => {
      resp = data.search.repos
      console.log('resp', resp)
      console.log('resp', query)
      let resArray: RepoItem[] = []
      resp.map(i => {
        console.log('i', i)
        resArray = [...resArray, {
          id: i.repo.id,
          name: i.repo.name,
          lang: i?.repo?.primaryLanguage?.name,
          forks: i.repo.forkCount,
          stars: i.repo.stargazerCount,
          date: i.repo.updatedAt.slice(0,10),
          owner: i.repo.owner.login
        }]
      })
      dispatch(setRepos(resArray))
      //setResults([...resp])
      //console.log('results', results)
    })
  }

  return (
    <div className={classes.header}>
      <form>
        <SearchBar 
          className={classes.searchBar}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value)
            console.log('e.target.value', e.target.value)
          }}
        />
        <Button 
          type='submit' 
          variant='contained' 
          className={classes.btn}
          //привязал обработку не к форме, а к кнопке для предотвращения перезагрузки всей страницы
          onClick={(e) => Search(e)}
        >
          ИСКАТЬ
        </Button>
      </form>
    </div>
  )
}

export default Header
