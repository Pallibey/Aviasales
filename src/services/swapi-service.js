import {
  loading,
  loadTicketsSuccess,
  loadSearchIdSuccess,
  loadFail,
  setDebounceTrue,
  setDebounceFalse,
} from '../redux/service-slice'

const baseURL = new URL('https://aviasales-test-api.kata.academy')

export const getSearchID = () => async (dispatch) => {
  try {
    dispatch(loading())
    const link = new URL('/search', baseURL)
    const res = await fetch(link)
    if (!res.ok) {
      throw new Error()
    }
    const body = await res.json()
    dispatch(loadSearchIdSuccess(body))
  } catch (err) {
    dispatch(loadFail())
  }
}

export const getTickets = (searchID) => async (dispatch) => {
  try {
    dispatch(setDebounceTrue())
    dispatch(loading())
    const link = new URL('/tickets', baseURL)
    link.searchParams.set('searchId', searchID)
    const res = await fetch(link)
    if (!res.ok) {
      if (res.status === 500) {
        dispatch(setDebounceFalse())
        return
      } else {
        throw new Error()
      }
    }
    const body = await res.json()
    dispatch(loadTicketsSuccess(body))
    dispatch(setDebounceFalse())
  } catch (err) {
    console.log(err)
    dispatch(loadFail())
  }
}
