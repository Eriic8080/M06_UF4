import React, { useEffect, useState } from 'react';
import { db } from '../config/config';
import { collection, getDocs } from 'firebase/firestore';
import MovieCard from '../MovieCard';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesCollection = collection(db, 'movies');
                const moviesSnapshot = await getDocs(moviesCollection);
                const moviesList = moviesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMovies(moviesList);
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    rating={movie.rating}
                    director={movie.director}
                />
            ))}
        </div>
    );
};

export default MoviesList;
