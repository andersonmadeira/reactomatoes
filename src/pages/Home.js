import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SearchInput from '../components/SearchInput'
import MovieList from '../components/MovieList'
import { useDebounce, useQuery } from '../hooks'
import FeedbackMessage from '../components/FeedbackMessage'
import { fetchMovies } from '../services/api'
import { LoadingIcon, WarningIcon } from '../Icons'

const Home = () => {
  const queryParams = useQuery()
  const [searchTerm, setSearchTerm] = useState(queryParams.get('search') || '')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  useEffect(() => {
    if (debouncedSearchTerm) {
      history.push({ search: `?search=${debouncedSearchTerm}` })
      setIsLoading(true)
      setError(false)
      fetchMovies(debouncedSearchTerm)
        .then((res) => setMovies(res.data))
        .catch((err) => setError(err.response.data))
        .finally(() => setIsLoading(false))
    } else {
      setMovies([])
      setError(false)
    }
  }, [debouncedSearchTerm, history])

  return (
    <>
      <SearchInput value={searchTerm} onChange={(term) => setSearchTerm(term)} />
      {isLoading ? (
        <FeedbackMessage data-testid="loading" icon={<LoadingIcon />} label="Loading data..." />
      ) : error ? (
        <FeedbackMessage
          data-testid="error"
          icon={<WarningIcon width="3rem" height="3rem" />}
          label={error.message}
        />
      ) : movies.length === 0 ? (
        <FeedbackMessage label="No movies to display. Try searching by typing the input box above." />
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  )
}

export default Home
