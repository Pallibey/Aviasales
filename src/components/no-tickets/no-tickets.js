import React from 'react'

import classes from './no-tickets.module.scss'
import img from './Air-Ticket-PNG-Picture.png'

const NoTickets = () => {
  return (
    <div className={classes['no-tickets']}>
      <img src={img} alt="Изображение самолёта" className={classes['img']} />
      <figure className="text-center">
        <p className={classes['no-tickets-text']}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      </figure>
    </div>
  )
}

export default NoTickets
