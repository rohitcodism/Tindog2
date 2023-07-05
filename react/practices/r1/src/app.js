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
        <>
            <h1>App</h1>
        </>
    );
};

export default App;

// OMDB API Key : a78afb62