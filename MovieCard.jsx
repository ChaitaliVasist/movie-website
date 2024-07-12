import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Adjust as necessary


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{Math.floor(movie.vote_average)}/10</p>
      </Link>
    </div>
  );
}

export default MovieCard;
