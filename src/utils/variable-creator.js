const keyCreater = (ticket) => {
  return `${ticket.price}${ticket.carrier}${ticket.segments[0].origin}${ticket.segments[0].destination}${ticket.segments[1].origin}${ticket.segments[1].destination}`
}

const conditionsConstructor = (ticket, transfersCount) => {
  return ticket.segments[0].stops.length === transfersCount || ticket.segments[1].stops.length === transfersCount
}

export { keyCreater, conditionsConstructor }
