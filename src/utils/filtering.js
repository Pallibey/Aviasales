import NoTickets from '../components/no-tickets/no-tickets'
import TicketCard from '../components/ticket-card/ticket-card'

import { conditionsConstructor, keyCreater } from './variable-creator'

const removeDuplicates = (arr = []) => {
  let arrForSort = []
  let keys = []
  arr.forEach((ticket) => {
    let key = keyCreater(ticket)
    if (!keys.includes(key)) {
      keys.push(key)
      arrForSort.push(ticket)
    }
  })
  return arrForSort
}

const ticketsFiltering = (ticketsArr = [], filters) => {
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
  return elements
}

export { removeDuplicates, ticketsFiltering }
