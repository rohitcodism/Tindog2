import React, { useEffect } from "react";
import './app.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";
import { useState } from "react";

const API_URL = "https://www.omdbapi.com?apikey=a78afb62"

const movie1 = 
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    };


const App = ()=>{
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        searchMovies('Batman');
    },[]);

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = response.json();
        console.log(data.Search)
    };
    return(
        <div className="App">
            <h1>Movie Space</h1>

            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for movies"
                    value= "Batman"
                    onChange={()=>{}}
                />
                <img 
                    src={searchIcon}
                    alt="search-icon"
                    onClick={()=>{}}
                />
            </div>

            <div className="container">
                <MovieCard movie1={movie1} />
            </div>
        </div>
    );
};

export default App;

// OMDB API Key : a78afb62
//Search