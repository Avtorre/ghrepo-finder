import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { InfoResult, RepoInfo, RepoItem } from '../../lib/types';
import classes from './SearchResults.module.css'
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import useFullInfo from '../../hooks/useFullInfo';
import { setCurrent } from '../../store/currentStore/currentReducer';
import SideWindow from '../SideWindow/SideWindow';

//компонент, в котором будут отображаться результаты поиска
const SearchResults = (props: {results: RepoItem[]}) => {
  //добавляем столбцы в таблицу из MUI
  const columns: GridColDef <(typeof props.results)[number]>[] = [
    {field: 'name', headerName: 'Название', resizable: false, disableColumnMenu: true, flex: 300},
    {field: 'lang', headerName: 'Язык', resizable: false, disableColumnMenu: true, flex: 300},
    {field: 'forks', headerName: 'Число форков', resizable: false, disableColumnMenu: true, flex: 300},
    {field: 'stars', headerName: 'Число звёзд', resizable: false, disableColumnMenu: true, flex: 300},
    {field: 'date', headerName: 'Дата обновления', resizable: false, disableColumnMenu: true, flex: 300},
  ]
  const dispatch = useDispatch()
  const current: RepoInfo = useSelector((state: RootState) => state.current)
  const {getInfo} = useFullInfo()

  const info = async (row: RepoItem) => {
    console.log('props', props)
    let resp:InfoResult
    await getInfo(row).then((data: any) => {
      let topics:string[] = []
      resp = data.repository
      console.log('resp', resp)
      resp.repositoryTopics.nodes.map((t) => {
        if (t.topic.name.length) {
          topics.push(t.topic.name)
        }
        console.log('t', t.topic.name)
      })
      dispatch(setCurrent({...row, description: resp.description, topics: topics}))
    })
  } 

  useEffect(()=>{
    console.log('current', current)
  }, [current])

  return (
    <div className={classes.search}>
      <div className={classes.search__window}>
        <h1>Результаты поиска</h1>
        <DataGrid
          className={classes.results_table}
          columns={columns} 
          rows={props.results}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10 //изначальный лимит объектов на странице
              },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]} //доступные для выбора значения кол-ва объектов на страницу
          sx={{
            border: 0, //убираем внешнюю границу таблицы
            '& .MuiDataGrid-withBorderColor' : {
              border: 0, //убираем верхнюю границу футера таблицы
            }
          }}
          onRowClick={(params) => info(params.row)}
          
        />
      </div>
      <div className={classes.side_window}>
          {(current.description) || (current.topics)
            ?  <SideWindow repo= {current}/> //`${current.description}`
            : 'Выберите репозиторий'
          }
      </div>
    </div>
  )
}

export default SearchResults
