import { Button, Input, Modal } from '@mui/material'
import React, { useState } from 'react'
import classes from './APIChoice.module.css'
import { useDispatch } from 'react-redux'
import { setAPI, setToken } from '../../../store/tokenStore/apiReducer'

const APIChoice = (props: {open:boolean, handleClose: () => void}) => {
  const [tokenModal, setTokenModal] = useState(false)
  const dispath = useDispatch()

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
                dispath(setAPI('REST'))
                props.handleClose()
              }}
            >REST</Button>
            <Button variant='contained' 
              onClick={() => {
                dispath(setAPI('Graph'))
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
        disableAutoFocus={true}
        className={classes.modal}
      >
        <div className={classes.modal__window}>
          <h3>Введите токен</h3>
            <form 
              className={classes.modal__btn} 
              onSubmit={() => {
                props.handleClose()
                setTokenModal(false) 
              }}
              name='tokenForm'
            >
              <Input className={classes.token_input} placeholder='Введите токен...' onChange={(e) => dispath(setToken(e.target.value))} required/>
              <Button variant='outlined' type='submit'>
                OK
              </Button>
            </form>
        </div>
        
      </Modal>
    </>
  )
}

export default APIChoice
