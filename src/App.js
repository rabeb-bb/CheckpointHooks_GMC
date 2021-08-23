
import './App.css';
import React, { useState } from "react";
import MovieList from './Components/MovieList/MovieList';

function App() {
const [movies, setMovies]=useState([{title:"Movie Title",
cover:"image url",
rating:4,
description:"jadgfgfgajfgajhjf"}])

  return (
    <div className="App">
      <h1>Favorite Movies/TV SHows</h1>
      <MovieList movies={movies} />
      
     
    </div>
  );
}

export default App;
