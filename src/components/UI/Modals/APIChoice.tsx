import { Button, Input, Modal } from '@mui/material'
import React, { useState } from 'react'
import classes from './APIChoice.module.css'
import { useDispatch } from 'react-redux'
import { setAPI, setToken } from '../../../store/tokenStore/apiReducer'
import { setRepos } from '../../../store/resultsStore/resultsReducer'

//модалка с выбором api
const APIChoice = (props: {open:boolean, handleClose: () => void}) => {
  const [tokenModal, setTokenModal] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <Modal
        open={props.open}
        disableAutoFocus={true}
        className={classes.modal}
      >
        <div className={classes.modal__window}>
          <h3>Выберите API</h3>
          <div className={classes.modal__btn}>
            <Button variant='contained' 
              onClick={() => {
                dispatch(setAPI('REST'))
                dispatch(setRepos([]))
                props.handleClose()
              }}
            >REST</Button>
            <Button variant='contained' 
              onClick={() => {
                dispatch(setAPI('GraphQL'))
                dispatch(setRepos([]))
                setTokenModal(true)
              }}
            >
              GraphQL
              <br />
              (требуется токен)
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={tokenModal}
        onClose={() => setTokenModal(false)}
        disableAutoFocus={true}
        className={classes.modal}
      >
        <div className={classes.modal__window}>
          <h3>Введите токен</h3>
          <p className={classes.helper_text}> GH &gt; Settings &gt; Developer Settings</p>
          <form 
            className={classes.modal__btn} 
            onSubmit={() => {
              props.handleClose()
              setTokenModal(false) 
            }}
            name='tokenForm'
          >
            <Input className={classes.token_input} placeholder='Введите токен...' onChange={(e) => dispatch(setToken(e.target.value))} required/>
            <Button variant='contained' type='submit'>
              OK
            </Button>
            <Button variant='outlined' onClick={() => setTokenModal(false)}>
              Отмена
            </Button>
          </form>
        </div>
        
      </Modal>
    </>
  )
}

export default APIChoice
