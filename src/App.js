
import './App.css';
import React, { useState } from "react";
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AddMovies from './Components/AddMovie/AddMovie';
import Filter from './Components/Filter/Filter';
import {moviesList} from './Data.js'
import { Route, Router, Switch } from 'react-router-dom';
import MovieDesc from './Pages/MovieDesc/MovieDesc';


function App() {
  const [list, setList]=useState(moviesList)
  const[searchTerm, setSearchTerm]=useState('')
  const[searchType, setSearchType]=useState('')
  const[searchRate, setSearchRate]=useState('')
  const[searchYear, setSearchYear]=useState('')
  const[film, setFilm]=useState('')
 
  const addMovie=(movie)=>{
    
    setList([...list,movie]);
  
  }

  return (
    <div className="App">
       <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Switch>
        {/* <Route path="/movie/:movieId" render={(props) => <MovieDesc
        //  name={props.state.name} type={props.state.type}
        //  description={description} image={image} trailer={trailer} 
        movie={props.match.params.movie}
         {...props} />}/> */}
         <Route exact path="/" render={(props)=>(
          <div>
           
      <div style={{display:"flex", justifyContent:"space-around", margin:"1%"}}>
      <Filter 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}
      searchType={searchType} setSearchType={setSearchType}
      searchRate={searchRate} setSearchRate={setSearchRate}
      />
      <AddMovies  addMovie={addMovie}/>
      </div>
      <MovieList movies={list} setMovies={setList} searchTerm={searchTerm} searchRate={searchRate} searchType={searchType} setFilm={setFilm}/>
      
     </div>
         )
         } />
         <Route path='/:movieId' render={(props)=>(<MovieDesc  {...props}/>)}/>
      </Switch>
      <Footer />
     
    </div>
  );
}

export default App;
