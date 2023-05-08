import React from 'react'
import add from 'date-fns/add'
import format from 'date-fns/format'
import { Image } from 'antd'

import errorImg from './error.jpg'
import classes from './ticket-card.module.scss'

const TicketCard = ({ ticketData }) => {
  const { price, carrier } = ticketData
  const segmentOne = ticketData.segments[0]
  const segmentTwo = ticketData.segments[1]
  let departureTimeOne = format(new Date(segmentOne.date), 'kk:mm')
  let arrivalTimeOne = format(add(new Date(segmentOne.date), { minutes: segmentOne.duration }), 'kk:mm')
  let departureTimeTwo = format(new Date(segmentTwo.date), 'kk:mm')
  let arrivalTimeTwo = format(add(new Date(segmentTwo.date), { minutes: segmentTwo.duration }), 'kk:mm')
  return (
    <li className={`card ${classes.card}`}>
      <div className="card-body">
        <div className={`card-title ${classes['card-title']}`}>
          <h5>{`${price.toLocaleString('ru')} Р`}</h5>
          <Image
            className="card-logo"
            src={`https:////pics.avs.io/99/36/${carrier}.png`}
            alt="Логотип авиакомпании"
            placeholder={errorImg}
            preview={false}
          />
        </div>
        <table className={`table ${classes.table}`}>
          <tbody>
            <tr>
              <td>
                <p className={classes['card-text-secondary']}>{`${segmentOne.origin} – ${segmentOne.destination}`}</p>
                <p className={classes['card-text']}>{`${departureTimeOne} - ${arrivalTimeOne}`}</p>
              </td>
              <td>
                <p className={classes['card-text-secondary']}>В пути</p>
                <p className={classes['card-text']}>
                  {`${Math.floor(segmentOne.duration / 60)}ч ${segmentOne.duration % 60}м`}
                </p>
              </td>
              <td>
                <p className={classes['card-text-secondary']}>{`${segmentOne.stops.length} пересадк${
                  segmentOne.stops.length === 0 ? 'ок' : segmentOne.stops.length > 1 ? 'и' : 'а'
                }`}</p>
                <p className={classes['card-text']}>{`${segmentOne.stops.join(', ')}`}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className={classes['card-text-secondary']}>{`${segmentTwo.origin} – ${segmentTwo.destination}`}</p>
                <p className={classes['card-text']}>{`${departureTimeTwo} - ${arrivalTimeTwo}`}</p>
              </td>
              <td>
                <p className={classes['card-text-secondary']}>В пути</p>
                <p className={classes['card-text']}>{`${Math.floor(segmentTwo.duration / 60)}ч ${
                  segmentTwo.duration % 60
                }м`}</p>
              </td>
              <td>
                <p className={classes['card-text-secondary']}>{`${segmentTwo.stops.length} пересадк${
                  segmentTwo.stops.length === 0 ? 'ок' : segmentTwo.stops.length > 1 ? 'и' : 'а'
                }`}</p>
                <p className={classes['card-text']}>{`${segmentTwo.stops.join(', ')}`}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  )
}

export default TicketCard
