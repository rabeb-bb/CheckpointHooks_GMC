import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies,searchTerm, searchType, searchRate}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {
            searchTerm? movies.filter(el=>el.name.toLowerCase().includes(searchTerm)).map((el,i) => 
                <MovieCard movie={el} key={i} />):  searchType? movies.filter(el=>el.type.toLowerCase().includes(searchTerm)).map((el,i) => 
                <MovieCard movie={el} key={i} />):searchRate? movies.filter(el=>el.rating >= searchRate).map((el,i) => 
                <MovieCard movie={el} key={i} />):  movies.map((el,i) => 
                <MovieCard movie={el} key={i} />) 
            }
           
        </div>
    )
}

export default MovieList
