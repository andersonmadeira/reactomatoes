const STORAGE_KEY = 'favorites'

export const readFavorites = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

export const saveFavorites = (favs) => localStorage.setItem(STORAGE_KEY, JSON.stringify(favs))
