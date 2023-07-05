import React, { useEffect } from "react";
import './app.css';
import searchIcon from './search.svg';

const URL = "https://www.omdbapi.com?apikey=a78afb62"

const App = ()=>{
    const searchMovies = async (title)=>{
        const response = await fetch(`${URL}&s=${title}`);
        const data = response.json();
        console.log(data.Search);
    };
    useEffect(()=>{
        searchMovies('Batman');
    },[]);
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
                
            </div>
        </div>
    );
};

export default App;

// OMDB API Key : a78afb62