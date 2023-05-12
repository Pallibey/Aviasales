import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    searchID: null,
    tickets: [],
    debounce: false,
    isAllTickets: false,
    isLoading: false,
    isError: false,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true
    },
    loadSearchIdSuccess: (state, action) => {
      state.isLoading = false
      state.searchID = action.payload.searchId
    },
    loadTicketsSuccess: (state, action) => {
      let arr = []
      if (action.payload.tickets.length === 0) {
        arr = state.tickets
        state.tickets.push(...arr)
      } else {
        arr = action.payload.tickets
        state.tickets.push(...arr)
      }
      if (action.payload.stop) {
        state.isLoading = false
      }
      state.isAllTickets = action.payload.stop
    },
    loadFail: (state) => {
      state.isLoading = false
      state.isError = true
    },
    setDebounceTrue: (state) => {
      state.debounce = true
    },
    setDebounceFalse: (state) => {
      state.debounce = false
    },
  },
})

export const { loading, loadSearchIdSuccess, loadTicketsSuccess, loadFail, setDebounceTrue, setDebounceFalse } =
  serviceSlice.actions

export default serviceSlice.reducer
