import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from '../styles/MovieDetail.module.scss'
import { fetchMovieById } from '../services/api'
import FeedbackMessage from '../components/FeedbackMessage'
import { StateContext } from '../state'
import FavoriteButton from '../components/FavoriteButton'
import { WarningIcon, LoadingIcon } from '../Icons'

const MovieDetails = () => {
  const {
    state: { favorites },
  } = useContext(StateContext)
  const { movieId } = useParams()
  const [movieData, setMovieData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()
  const isFavorite = favorites.find((m) => movieId && movieId === m.imdbID) !== undefined

  useEffect(() => {
    if (movieId) {
      setIsLoading(true)
      setError(false)
      fetchMovieById(movieId)
        .then((res) => setMovieData(res.data))
        .catch((res) => setError(res.response.data))
        .finally(() => setIsLoading(false))
    }
  }, [movieId])

  return !isLoading && movieData ? (
    <div className={styles.movie_details__wrapper}>
      <div className={styles.movie_details}>
        <button
          type="button"
          className={styles.details__back_button}
          onClick={() => history.goBack()}
        >
          <span className={styles.details__back}>🡐</span>
        </button>
        <div className={styles.minor_details}>
          <span className={styles.minor_details__runtime}>{movieData.Runtime}</span>
          <span className={styles.minor_details__year}>{movieData.Year}</span>
          <span className={styles.minor_details__rated}>{movieData.Rated}</span>
        </div>
        <h2 className={styles.movie_title}>{movieData.Title}</h2>
        <div className={styles.movie_rating}>
          {movieData.Ratings &&
            movieData.Ratings.map((rating) => (
              <span key={rating.Value} className={styles.movie_rating__imdb}>
                {rating.Value}
              </span>
            ))}
          <FavoriteButton movie={movieData} favorite={isFavorite} label="Add to favorites" />
        </div>
        <div className={styles.movie_plot}>
          <h3 className={styles.other_details__title}>Plot</h3>
          <p>{movieData.Plot}</p>
        </div>
        <div className={styles.other_details}>
          <div className={styles.other_details__detail_item}>
            <h3 className={styles.other_details__title}>Cast</h3>
            <ul className={styles.detail_item__detail_list}>
              {movieData.Actors.split(',').map((castMember) => (
                <li key={castMember} className={styles.detail_list__item}>
                  {castMember.trim()}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.other_details__detail_item}>
            <h3 className={styles.other_details__title}>Genre</h3>
            <ul className={styles.detail_item__detail_list}>
              {movieData.Genre.split(',').map((genre) => (
                <li key={genre} className={styles.detail_list__item}>
                  {genre.trim()}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.other_details__detail_item}>
            <h3 className={styles.other_details__title}>Director</h3>
            <ul className={styles.detail_item__detail_list}>
              {movieData.Director.split(',').map((director) => (
                <li key={director} className={styles.detail_list__item}>
                  {director.trim()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figure className={styles.details__movie_poster}>
        <img
          src={
            movieData.Poster !== 'N/A'
              ? movieData.Poster
              : 'https://via.placeholder.com/190x280/2F3240/CECECE/?text=Poster%20N/A'
          }
          alt={movieData.Title}
        />
      </figure>
    </div>
  ) : error ? (
    <FeedbackMessage icon={<WarningIcon />} label={error.message} />
  ) : isLoading ? (
    <FeedbackMessage icon={<LoadingIcon />} label="Loading data..." />
  ) : null
}

export default MovieDetails
