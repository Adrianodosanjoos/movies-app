'use client';

import {useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';




export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
   

    useEffect(() =>{
        getMovies();
    }, []);
    const getMovies = async () => {
       await axios ({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '95acae0ab2a07a5fda6108079e768986',
                language: 'pt-Br'
            } 
        
        }).then(response => {
            setMovies(response.data.results);
        });
    
       
    }

    

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
           <MovieCard
           key={movie.id} 
           movie={movie}
           
           />
    )}
        </ul>
    );
}


   