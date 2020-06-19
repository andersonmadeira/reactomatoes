import { ACTION_FAVORITE_ADD, ACTION_FAVORITE_REMOVE } from './action-types'

export const actionFavoriteAdd = (movie) => ({
  type: ACTION_FAVORITE_ADD,
  payload: {
    movie,
  },
})

export const actionFavoriteRemove = (movie) => ({
  type: ACTION_FAVORITE_REMOVE,
  payload: {
    movie,
  },
})
