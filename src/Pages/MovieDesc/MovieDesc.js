import Rating from '@material-ui/lab/Rating'
import React from 'react'



const MovieDesc = ({history,location:{state:{movie}}}) => {
    return (
        <div>
            <div style={{display:'flex', justifycontent:'space-around',margin:'1%'}}>
            
            <div style={{width:'50%',display:'flex', justifycontent:'space-around', flexDirection:'column' }}>
            <span style={{color:'white', fontWeight:'bolder', fontSize:'2em'}}>{movie.name}</span>
                <span style={{color:'white', fontWeight:'bold'}}>{movie.type}</span>
                <span style={{color:'white', fontWeight:'bold'}}>{movie.date}</span>
                <img src={movie.image} alt={movie.name} style={{width:'35%'}}/>
                
                <p style={{width:'30%'}}>{movie.description}</p>
                <Rating name="read-only" value={movie.rating} readOnly />
            </div>
            <iframe src={movie.trailer} title={movie.name} style={{margin:'2%', width:"45%"}} title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
          

           <button onClick={()=>history.push("/")}>Go Home</button>

        </div>
    )
}

export default MovieDesc
