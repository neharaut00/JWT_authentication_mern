import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'

//! In store.js we are storing all reducers in one place and exporting it as store
//! Reducers are the only source of truth in Redux.
//! Whenever we dispatch an action, the reducer is called and the new state is returned.
//! Slice in redux is a way to split the state into smaller parts and manage them separately.
//! Service in redux is a way to manage the state in a way that is easy to use. 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
})
