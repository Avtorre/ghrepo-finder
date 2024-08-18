import React from 'react'
import classes from './SideWindow.module.css'
import { RepoItem } from '../../lib/types'
import { Chip } from '@mui/material'

//компонент выводящий информацию о репозитории в боковом окне
const SideWindow = (props : {repo: RepoItem}) => {

  return (
    <div className={classes.window}>
      <h1>{props.repo.name}</h1>
      <div className={classes.second_line}>
        {(props.repo.lang) &&
          <Chip color='primary' label={props.repo.lang} className={classes.lang}/>
        }
      
        <div className={classes.stars}>
          <img src={`${process.env.PUBLIC_URL}/StarFilled.svg`} alt="star"/>
          <p>{props.repo.stars}</p>
        </div>
        
      </div>
      <div className={classes.topics}>
        {props.repo?.topics?.map((t, key) => 
          <Chip key={key} label={t} className={classes.chip}/>
          )
        }
      </div>
      <p className={classes.description}>{props.repo.description}</p>
    </div>
  )
}

export default SideWindow
