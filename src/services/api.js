import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export function fetchMovies(search) {
  return api.get(`/api/v1/movies/?search=${search}`)
}

export function fetchMovieById(id) {
  return api.get(`/api/v1/movies/${id}`)
}
