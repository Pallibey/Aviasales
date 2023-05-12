import { configureStore } from '@reduxjs/toolkit'

import filtersSlice from './filters-slice'
import serviceSlice from './service-slice'

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    service: serviceSlice,
  },
})
export default store
