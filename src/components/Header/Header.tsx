import React from 'react'
import classes from './Header.module.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <div className={classes.header}>
      <form action="">
        <SearchBar className={classes.searchBar}/>
        <Button type='submit' variant='contained' className={classes.btn}>ИСКАТЬ</Button>
      </form>
    </div>
  )
}

export default Header
