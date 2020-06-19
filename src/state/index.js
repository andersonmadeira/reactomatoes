import React, { createContext, useReducer } from 'react'
import { favoritesReducer } from './reducers'
import { readFavorites } from '../services/storage'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: readFavorites() })

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
}
