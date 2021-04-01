import React, { Component } from 'react'
import './App.css';
import MoviesPage from './components/pages/MoviesPage'
import { Link, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="movies">Movies</Link>
        </div>
        <div>
          <Route path="/movies" component={MoviesPage}></Route>
        </div>
      </div>
    )
  }
}
