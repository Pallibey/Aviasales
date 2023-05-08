import { configureStore } from '@reduxjs/toolkit'

import filtersSlice from './filters-slice'
import serviceSlice from './service-slice'
import cardsSlice from './cards-slice'

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    service: serviceSlice,
    cards: cardsSlice,
  },
})
export default store
