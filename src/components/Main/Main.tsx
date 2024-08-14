import React, { useState } from 'react'
import classes from './Main.module.css'

const Main = () => {
  const [results, setResults] = useState()

  return (
    <div className={classes.main}>
      {(results)
        ? results
        : <h1 className={classes.welcome}>Добро пожаловать</h1>
      }
    </div>
  )
}

export default Main
