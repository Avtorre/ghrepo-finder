import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { RepoItem } from '../../lib/types';
import classes from './SearchResults.module.css'

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
          onRowClick={(params) => {console.log('params', params)}}
          
        />
      </div>
      <div className={classes.side_window}>
          Выберите репозиторий
      </div>
    </div>
  )
}

export default SearchResults
