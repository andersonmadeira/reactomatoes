import React, { useContext } from 'react'
import FeedbackMessage from '../components/FeedbackMessage'
import MovieList from '../components/MovieList'
import { StateContext } from '../state'

const Favorites = () => {
  const {
    state: { favorites },
  } = useContext(StateContext)

  return (
    <>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <FeedbackMessage label="You currently have no favorites." />
      ) : (
        <MovieList movies={favorites} />
      )}
    </>
  )
}

export default Favorites
