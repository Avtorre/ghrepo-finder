import React from 'react'
import classes from './SideWindow.module.css'
import { RepoInfo } from '../../lib/types'
import { Chip } from '@mui/material'

const SideWindow = (props : {repo: RepoInfo}) => {
  return (
    <div className={classes.window}>
      <h1>{props.repo.name}</h1>
      <h1>{props.repo.lang}</h1>
      <div className={classes.topics}>
        {props.repo?.topics?.map((t, key) => 
          <Chip key={key} label={t} className={classes.chip}/>
          )
        }
      </div>
      
      <h1>{props.repo.description}</h1>
    </div>
  )
}

export default SideWindow
