import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export function fetchMovies(search) {
  return api.get(`/?search=${search}`)
}

export function fetchMovieById(id) {
  return api.get(`/${id}`)
}
