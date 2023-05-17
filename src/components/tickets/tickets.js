import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

import LoadingIndicator from '../loading-indicator/loading-indicator'
import ErrorMsg from '../error-msg/error-msg'
import { setCardsFilter } from '../../redux/filters-slice'
import { removeDuplicates, ticketsFiltering } from '../../utils/filtering'
import { sortingElements } from '../../utils/sorting'
import { conditionsConstructor, keyCreater } from '../../utils/variable-creator'
import NoTickets from '../no-tickets/no-tickets'
import TicketCard from '../ticket-card/ticket-card'

import classes from './tickets.module.scss'

const Tickets = () => {
  const [countForRender, setCountForRender] = useState(5)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.service)
  const filters = useSelector((state) => state.filters)

  if (data.isError) {
    return <ErrorMsg />
  }

  useEffect(() => {
    setCountForRender(5)
  }, [filters.all, filters.withoutTransfers, filters.oneTransfer, filters.twoTransfers, filters.threeTransfers])

  const renderTickets = (sortedArr = [], renderCount = 0, transfersCount) => {
    let elements = []
    if (transfersCount.length !== 0) {
      sortedArr.forEach((ticket) => {
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

  let ticketsArr = useMemo(() => removeDuplicates(data.tickets), [data.tickets])
  let sortedArr = useMemo(() => sortingElements(ticketsArr, filters.cardsFilter), [ticketsArr, filters.cardsFilter])
  let transfersCount = useMemo(
    () => ticketsFiltering(filters),
    [
      filters.all,
      filters.withoutTransfers,
      filters.oneTransfer,
      filters.twoTransfers,
      filters.threeTransfers,
      filters.cardsFilter,
    ]
  )

  return (
    <section className={classes.tickets}>
      <div className="btn-group">
        <button
          className={`btn btn-light ${classes['tickets-btn']} ${
            filters.cardsFilter === 1 ? classes['btn-active'] : ''
          }`}
          onClick={() => {
            dispatch(setCardsFilter(1))
          }}
        >
          Самый дешёвый
        </button>
        <button
          className={`btn btn-light ${classes['tickets-btn']} ${
            filters.cardsFilter === 2 ? classes['btn-active'] : ''
          }`}
          onClick={() => {
            dispatch(setCardsFilter(2))
          }}
        >
          Самый быстрый
        </button>
      </div>
      {data.isLoading ? <LoadingIndicator /> : null}
      <ul className={classes['tickets-list']}>{renderTickets(sortedArr, countForRender, transfersCount)}</ul>
      <button
        className={`btn ${classes['btn-active']} ${classes['btn-more']}`}
        onClick={() => {
          setCountForRender((count) => count + 5)
        }}
      >
        Показать еще 5 билетов!
      </button>
    </section>
  )
}

export default Tickets
