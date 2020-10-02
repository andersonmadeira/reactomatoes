import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetail'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.app__content}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
