import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import TicketCard from '../ticket-card/ticket-card'
import NoTickets from '../no-tickets/no-tickets'
import {
  increaseCountForRender,
  setCardsFilter,
  setInitialCountForRenderValue,
  setCheapestArr,
  setFastestArr,
} from '../../redux/cards-slice'
import LoadingIndicator from '../loading-indicator/loading-indicator'
import ErrorMsg from '../error-msg/error-msg'

import classes from './tickets.module.scss'

const Tickets = ({ tickets }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.service)
  const filters = useSelector((state) => state.filters)
  const ticketsInfo = useSelector((state) => state.cards)

  useEffect(() => {
    dispatch(setInitialCountForRenderValue())
  }, [
    filters.all,
    filters.withoutTransfers,
    filters.oneTransfer,
    filters.twoTransfers,
    filters.threeTransfers,
    dispatch,
  ])

  const conditionsConstructor = (ticket, transfersCount) => {
    return ticket.segments[0].stops.length === transfersCount || ticket.segments[1].stops.length === transfersCount
  }

  const keyCreater = (ticket) => {
    return `${ticket.price}${ticket.carrier}${ticket.segments[0].origin}${ticket.segments[0].destination}${ticket.segments[1].origin}${ticket.segments[1].destination}`
  }

  const sortingElements = (arr = [], cardsFilter = 1) => {
    let arrForSort = []
    let keys = []
    arr.forEach((ticket) => {
      let key = keyCreater(ticket)
      if (!keys.includes(key)) {
        keys.push(key)
        arrForSort.push(ticket)
      }
    })
    if (cardsFilter === 1) {
      return arrForSort.sort((a, b) => {
        let n1 = a.price || 0
        let n2 = b.price || 0
        if (Number(n1) > Number(n2)) {
          return 1
        } else if (Number(n1) < Number(n2)) {
          return -1
        } else {
          return 0
        }
      })
    } else if (cardsFilter === 2) {
      return arrForSort.sort((a, b) => {
        let durationA1 = a.segments[0].duration
        let durationA2 = a.segments[1].duration
        let durationB1 = b.segments[0].duration
        let durationB2 = b.segments[1].duration
        if (durationA1 < durationA2) {
          if (durationA1 > durationB1) {
            return 1
          } else if (durationA1 > durationB2) {
            return 1
          } else {
            return -1
          }
        } else {
          if (durationA2 > durationB1) {
            return 1
          } else if (durationA2 > durationB2) {
            return 1
          } else {
            return -1
          }
        }
      })
    }
  }

  const renderedTicketsCreater = (ticketsArr = [], renderCount = 0) => {
    let elements = []
    let transfersCount = []
    if (filters.withoutTransfers) {
      transfersCount.push(0)
    }
    if (filters.oneTransfer) {
      transfersCount.push(1)
    }
    if (filters.twoTransfers) {
      transfersCount.push(2)
    }
    if (filters.threeTransfers) {
      transfersCount.push(3)
    }
    if (transfersCount.length !== 0) {
      ticketsArr.forEach((ticket) => {
        let okTicket = null
        transfersCount.forEach((count) => {
          if (conditionsConstructor(ticket, count)) {
            okTicket = <TicketCard key={keyCreater(ticket)} ticketData={ticket} />
          }
        })
        if (okTicket !== null) {
          elements.push(okTicket)
        }
      })
    }
    if (elements.length === 0) {
      return <NoTickets />
    }
    let render = []
    for (let i = 0; i < renderCount; i++) {
      if (elements[i] !== undefined) {
        render.push(elements[i])
      }
    }
    return render
  }

  let ticketsArr

  if (data.isLoading) {
    ticketsArr = <LoadingIndicator />
  } else if (data.isError) {
    ticketsArr = <ErrorMsg />
  } else if (ticketsInfo.cardsFilter === 1) {
    if (ticketsInfo.cheapestArr.length === 0) {
      dispatch(setCheapestArr(sortingElements(tickets, 1)))
    }
    ticketsArr = ticketsInfo.cheapestArr
  } else if (ticketsInfo.cardsFilter === 2) {
    if (ticketsInfo.fastestArr.length === 0) {
      dispatch(setFastestArr(sortingElements(tickets, 2)))
    }
    ticketsArr = ticketsInfo.fastestArr
  } else {
    return (ticketsArr = <ErrorMsg />)
  }

  return (
    <section className={classes.tickets}>
      <div className="btn-group">
        <button
          className={`btn btn-light ${classes['tickets-btn']} ${
            ticketsInfo.cardsFilter === 1 ? classes['btn-active'] : ''
          }`}
          onClick={() => {
            dispatch(setCardsFilter(1))
          }}
        >
          Самый дешёвый
        </button>
        <button
          className={`btn btn-light ${classes['tickets-btn']} ${
            ticketsInfo.cardsFilter === 2 ? classes['btn-active'] : ''
          }`}
          onClick={() => {
            dispatch(setCardsFilter(2))
          }}
        >
          Самый быстрый
        </button>
      </div>
      <ul className={classes['tickets-list']}>
        {Array.isArray(ticketsArr) ? renderedTicketsCreater(ticketsArr, ticketsInfo.countForRender) : ticketsArr}
      </ul>
      <button
        className={`btn ${classes['btn-active']} ${classes['btn-more']}`}
        onClick={() => {
          dispatch(increaseCountForRender())
        }}
      >
        Показать еще 5 билетов!
      </button>
    </section>
  )
}

export default Tickets
