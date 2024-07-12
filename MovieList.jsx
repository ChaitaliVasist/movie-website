import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard.jsx';
import './MovieList.css';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [voteAverages, setVoteAverages] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const API_URL = 'http://5.254.6.120:7000/api/v1/nsup/NowShowing';
    
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        const initialVoteAverages = {};
        data.forEach(movie => {
          initialVoteAverages[movie.id] = movie.vote_average;
        });
        setVoteAverages(initialVoteAverages);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to fetch movies. Please try again later.');
      });
  }, []);

  const updateVoteAverage = (id, change) => {
    setVoteAverages(prevAverages => ({
      ...prevAverages,
      [id]: prevAverages[id] + change,
    }));
  };

  return (
    <div className="movie-list">
      <h1>In Theatres</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} voteAverage={voteAverages[movie.id]} updateVoteAverage={updateVoteAverage} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;