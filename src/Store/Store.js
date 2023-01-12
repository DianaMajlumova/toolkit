import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSilce'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})