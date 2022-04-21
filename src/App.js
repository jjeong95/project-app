import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './component/MovieList'
import SearchBar from './component/SearchBar'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState();

  //Get movies from the api
  const getMoives = async (search) => {

    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=b44fa608`);
    const jsonData = await response.json();

    console.log(jsonData,'16')

    if(jsonData.Search){
      console.log("hello")
      setMovies(jsonData.Search);
    }

  }

  useEffect(() => {
    getMoives();
  }, [searchValue])

  console.log(movies,'34')

  return (
    <div className="App">
      <SearchBar searchValue={searchValue} setSearchData={setSearchValue}/>
      <MovieList data={movies}/>
    </div>
  );
}

export default App;
