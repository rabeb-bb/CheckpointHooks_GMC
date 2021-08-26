
import './App.css';
import React, { useState } from "react";
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AddMovies from './Components/AddMovie/AddMovie';
import Filter from './Components/Filter/Filter';
import {moviesList} from './Data.js'


function App() {
  const [list, setList]=useState(moviesList)
  const[searchTerm, setSearchTerm]=useState('')
  const[searchType, setSearchType]=useState('')
  const[searchRate, setSearchRate]=useState('')
  const[searchYear, setSearchYear]=useState('')
 
  const addMovie=(movie)=>{
    
    setList([...list,movie]);
  
  }

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div style={{display:"flex", justifyContent:"space-around", margin:"1%"}}>
      <Filter 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}
      searchType={searchType} setSearchType={setSearchType}
      searchRate={searchRate} setSearchRate={setSearchRate}
      />
      <AddMovies  addMovie={addMovie}/>
      </div>
      <MovieList movies={list} setMovies={setList} searchTerm={searchTerm} searchRate={searchRate} searchType={searchType}/>
      <Footer />
      
     
    </div>
  );
}

export default App;
