import { tmdbApi } from './tmdbApi.ts'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tmdbApi.middleware),
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
