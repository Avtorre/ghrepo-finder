import React from 'react'
import classes from './SearchBar.module.css'

const SearchBar:React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({...props}) => {
  return (
    <input type='text' placeholder='Введите поисковой запрос' className={`${classes.search} ${props.className}`} {...props}/>
  )
}

export default SearchBar
