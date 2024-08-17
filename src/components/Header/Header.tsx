import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import { Button, Input } from '@mui/material'
import useSearch from '../../hooks/useSearch'
import { RepoItem, SearchResult } from '../../lib/types'
import { useDispatch, useSelector } from 'react-redux'
import { setRepos } from '../../store/repoStore/repoReducer'
import { setToken } from '../../store/tokenStore/apiReducer'
import { RootState } from '../../store/store'
import APIChoice from '../UI/Modals/APIChoice'
import useSearchREST from '../../hooks/useSearchREST'

const Header = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)
  const handleClose = () => setOpen(false)
  const token: string = useSelector((state: RootState) => state.api.token)
  const api: string = useSelector((state: RootState) => state.api.api) 
  const {search} = useSearch()
  const {searchRest} = useSearchREST()
  /*
  const Search = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()    
    let resp:SearchResult[]
    await search(query, token).then((data: any) => {
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
*/

  const Search = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if ((api === 'REST') && (query.length)) {
      let resp: any[]
      await searchRest(query).then((response:any) => {
        console.log('data', response.data)
        resp = response.data.items
        console.log('resp', resp)
        let resArray: RepoItem[] = []
        resp.map((i: any) => {
          resArray = [...resArray, {
            id: i.id,
            name: i.name,
            lang: i.language,
            forks: i.forks_count,
            stars: i.stargazers_count,
            date: i.updated_at.slice(0,10),
            owner: i.owner.login,
            description: i.description,
            topics: i.topics
          }]
        })
        dispatch(setRepos(resArray))
      })
    }

    if (api === 'Graph') {
      let resp:SearchResult[]
      await search(query, token).then((data: any) => {
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

  }

  useEffect(() => {}, [api, token])
  return (
    <>
      <APIChoice open={open} handleClose={handleClose}/>
      <div className={classes.header}>
        <form name='searchForm'>
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
          { (api.length) 

          ?  
            <Button 
              variant='outlined'
              color='inherit' 
              className={classes.btn}
              //привязал обработку не к форме, а к кнопке для предотвращения перезагрузки всей страницы
              onClick={() => setOpen(true)}
            >
              {api}
            </Button>

          : ''
          }
          
        </form>
      </div>
    </>
  )
}

export default Header
