import React from 'react';
import PropTypes from 'prop-types';

import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const MovieDetails = ({ movies, voteAverages, updateVoteAverage }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  
  if (!movie) {
    return <div>Movie not found</div>;
  }
  console.log(movies);


  return (
    <div className="movie-details">
      <Link to="/">Back to list</Link>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{Math.floor(voteAverages[movie.vote_average])}/10</p>
      <div className="vote-controls">
        <button onClick={() => updateVoteAverage(movie.id, 1)}>Upvote</button>
        <button onClick={() => updateVoteAverage(movie.id, -1)}>Downvote</button>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movies: PropTypes.array.isRequired,
  voteAverages: PropTypes.object.isRequired,
  updateVoteAverage: PropTypes.func.isRequired,
};

export default MovieDetails;

// //src/components/MovieDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
// const MovieDetails = ({ movies, vote_average, updateVoteAverage }) => {
//   const { id } = useParams(); // id from URL params
//   const movie = movies.find(m => m._id === id); // Use _id for matching

//   if (!movie) return <p>Movie not found</p>;

//   const handleVoteChange = (change) => {
//     updateVoteAverage(id, change);
//   };

//   return (
//     <div className="movie-details">
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       {movie.poster_path ? (
//       <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
//     ) : (
//       <div className="no-image">No Image Available</div>
//     )}
//       <p>Vote Average: {vote_average[id].toFixed(1)}</p>
//       <button onClick={() => handleVoteChange(0.1)}>Increase Vote</button>
//       <button onClick={() => handleVoteChange(-0.1)}>Decrease Vote</button>
//     </div>
//   );
// };

// export default MovieDetails;