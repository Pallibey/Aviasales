import React from 'react'

import classes from './error-msg.module.scss'
import img from './error.png'

const ErrorMsg = () => {
  return (
    <div className={classes['error-msg']}>
      <img src={img} alt="Изображение самолёта" className={classes['img']} />
      <figure className="text-center">
        <p className={classes['error-msg-text']}>Сервис временно недоступен, попробуйте позже</p>
      </figure>
    </div>
  )
}

export default ErrorMsg
