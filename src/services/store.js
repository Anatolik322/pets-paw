import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { catApi } from './catApi'

export const store = configureStore({
  reducer: {
    
    [catApi.reducerPath]: catApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
})


setupListeners(store.dispatch)