import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies,searchTerm}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {searchTerm? movies.filter(el=>el.name.toLowerCase().includes(searchTerm)).map((el,i) => 
                <MovieCard movie={el} key={i} />): movies.map((el,i) => 
                <MovieCard movie={el} key={i} />)}
        </div>
    )
}

export default MovieList
