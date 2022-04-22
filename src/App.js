import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './component/MovieList/MovieList'
import SearchBar from './component/SearchBar/SearchBar'

import { Grid } from '@mui/material';

/**
 * OMDB Movie Project-App for Ensemble
 */
function App() {

  //states
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Star Wars");

  //Get movies from the api based on search value
  //To prevent too many api call on each keystroke, we can debounce the api call by making the api call after a key stroke in the search bar has stopped for certain amount of time.
  const getMoviesBySearch = async () => {

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=b44fa608`);
      const jsonData = await response.json();

      if(jsonData.Search){
        setMovies(jsonData.Search);
      } 
    } catch (err){
        console.error(err)
    }
  }

  //Update movie list based on search bar value
  useEffect(() => {
    getMoviesBySearch();
  }, [searchValue])

  return (
    <div className="App">
      <Grid container id="App-container">
        {/* Header Title */}
        <Grid item>
          <b id="movie-app-text">Movie App</b>
        </Grid>

        {/* Filler between title and search bar */}
        <Grid item xs={1} sm={2} md={4}/>
        
        {/* Search bar */}
        <Grid item xs={6} sm={4} md={2}className="search-bar-container">
          <SearchBar searchValue={searchValue} setSearchData={setSearchValue}/>
        </Grid>

        {/* Movie List */}
        <Grid item xs={12} className="movie-list-container">
          <MovieList movies={movies}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
