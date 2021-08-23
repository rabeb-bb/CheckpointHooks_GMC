import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = (movies) => {
    return (
        <div>
            return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {[movies].map((el,i) => 
                <MovieCard movie={el} key={i} />
            )}
        </div>
    )
        </div>
    )
}

export default MovieList
