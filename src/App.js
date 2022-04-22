import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './component/MovieList/MovieList'
import SearchBar from './component/SearchBar/SearchBar'

import { Grid } from '@mui/material';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState();

  //Get movies from the api
  const getMoives = async (search) => {

    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=b44fa608`);
    const jsonData = await response.json();

    if(jsonData.Search){
      setMovies(jsonData.Search);
    }

  }

  useEffect(() => {
    getMoives();
  }, [searchValue])

  return (
    <Grid container className="App">
      <Grid container id="App-container">
        <Grid item>
          <b id="movie-app-text">Movie App</b>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={2} className="search-bar-container">
          <SearchBar searchValue={searchValue} setSearchData={setSearchValue}/>
        </Grid>
        <Grid item xs={12} className="movie-list-container">
          <MovieList data={movies}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
