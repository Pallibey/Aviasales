const sortingElements = (arrForSort = [], cardsFilter = 1) => {
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

export { sortingElements }
