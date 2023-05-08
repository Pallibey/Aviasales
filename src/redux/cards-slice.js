import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cardsFilter: 1,
    countForRender: 5,
    cheapestArr: [],
    fastestArr: [],
  },
  reducers: {
    increaseCountForRender: (state) => {
      state.countForRender += 5
    },
    setInitialCountForRenderValue: (state) => {
      state.countForRender = 5
    },
    setCardsFilter: (state, action) => {
      state.cardsFilter = action.payload
    },
    setCheapestArr: (state, action) => {
      state.cheapestArr = action.payload
    },
    setFastestArr: (state, action) => {
      state.fastestArr = action.payload
    },
    setIsSortingTrue: (state) => {
      state.isSorting = true
    },
    setIsSortingFalse: (state) => {
      state.isSorting = false
    },
  },
})

export const {
  increaseCountForRender,
  setInitialCountForRenderValue,
  setCardsFilter,
  setCheapestArr,
  setFastestArr,
  setIsSortingTrue,
  setIsSortingFalse,
} = cardsSlice.actions

export default cardsSlice.reducer
