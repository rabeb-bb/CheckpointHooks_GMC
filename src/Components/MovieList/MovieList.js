import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies,searchTerm, searchType, searchRate,setFilm}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
           {
            movies.filter(el=> el.name.toLowerCase().includes(searchTerm)
            && el.type.toLowerCase().includes(searchType)
            && el.rating >= searchRate).map((el) => <>
           <MovieCard movie={el} key={el.id}/>
          
          </>)
          }
        </div>
    )
}

export default MovieList
