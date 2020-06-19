import { ACTION_FAVORITE_ADD, ACTION_FAVORITE_REMOVE } from './action-types'
import { readFavorites, saveFavorites } from '../services/storage'

export const FAVORITES_INITIAL_STATE = {
  favorites: readFavorites(),
}

export function favoritesReducer(state = FAVORITES_INITIAL_STATE, action) {
  let nextFavorites = null

  switch (action.type) {
    case ACTION_FAVORITE_ADD:
      nextFavorites = [...state.favorites, action.payload.movie]
      saveFavorites(nextFavorites)
      return { ...state, favorites: nextFavorites }
    case ACTION_FAVORITE_REMOVE:
      nextFavorites = state.favorites.filter((m) => m.imdbID !== action.payload.movie.imdbID)
      saveFavorites(nextFavorites)
      return { ...state, favorites: nextFavorites }
    default:
      return state
  }
}
