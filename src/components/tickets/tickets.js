import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

import LoadingIndicator from '../loading-indicator/loading-indicator'
import ErrorMsg from '../error-msg/error-msg'
import { setCardsFilter } from '../../redux/filters-slice'
import { removeDuplicates, ticketsFiltering } from '../../utils/filtering'
import { sortingElements } from '../../utils/sorting'

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

  const renderTickets = (filteredArr = [], renderCount = 0) => {
    let render = []
    for (let i = 0; i < renderCount; i++) {
      if (filteredArr[i] !== undefined) {
        render.push(filteredArr[i])
      }
    }
    return render
  }

  let ticketsArr = useMemo(() => removeDuplicates(data.tickets), [data.tickets])
  let sortedArr = useMemo(() => sortingElements(ticketsArr, filters.cardsFilter), [ticketsArr, filters.cardsFilter])
  let elementsForRender = useMemo(
    () => ticketsFiltering(sortedArr, filters),
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
      <ul className={classes['tickets-list']}>
        {Array.isArray(elementsForRender) ? renderTickets(elementsForRender, countForRender) : elementsForRender}
      </ul>
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
