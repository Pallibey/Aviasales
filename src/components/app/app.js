import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './app.scss'
import Tickets from '../tickets/tickets'
import TicketsFilter from '../tickets-filter/tickets-filter'
import { getSearchID, getTickets } from '../../services/swapi-service'

import icon from './Logo.svg'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.service)

  useEffect(() => {
    if (data.searchID === null) {
      dispatch(getSearchID())
    }
  }, [dispatch, data.searchID])

  useEffect(() => {
    if (data.searchID !== null && data.debounce === false && data.isAllTickets === false) {
      dispatch(getTickets(data.searchID))
    }
  }, [data.debounce, data.isAllTickets, data.searchID, dispatch])

  return (
    <React.Fragment>
      <header>
        <img src={icon} alt="Логотип компании" />
      </header>
      <main>
        <TicketsFilter />
        <Tickets tickets={data.tickets} />
      </main>
    </React.Fragment>
  )
}

export default App
