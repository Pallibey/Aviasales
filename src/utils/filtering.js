import { keyCreater } from './variable-creator'

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

const ticketsFiltering = (filters) => {
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
  return transfersCount
}

export { removeDuplicates, ticketsFiltering }
