import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies,searchTerm, searchType, searchRate}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          {
            movies.filter(el=> el.name.toLowerCase().includes(searchTerm)
            && el.type.toLowerCase().includes(searchType)
            && el.rating >= searchRate).map((el,i) => 
            <MovieCard movie={el} key={i} />) 
          }
           
        </div>
    )
}

export default MovieList
