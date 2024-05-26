import React from 'react';

const MovieCard = ({ title, imageUrl, rating, director }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} />
            <p>Rate: {rating}</p>
            <p>Director: {director}</p>
        </div>
    );
};

export default MovieCard;
