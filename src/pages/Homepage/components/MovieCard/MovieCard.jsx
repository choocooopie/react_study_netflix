import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";

const GENRE = { 28: "Action", 35: "Comedy", 12: "Adventure" };

const MovieCard = ({ movie }) => (
  <div
    className="movie-card"
    style={{
      backgroundImage: movie.poster_path
        ? `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`
        : "none",
    }}
  >
    <div className="overlay">
      <div className="overlay-header">
        <h5 className="movie-title">{movie.title}</h5>
        <hr />
        <div className="badge-wrap">
          {Array.isArray(movie.genre_ids) &&
            movie.genre_ids.slice(0, 3).map((id) => (
              <Badge bg="danger" key={id}>
                {GENRE[id] ?? id}
              </Badge>
            ))}
        </div>
      </div>

      <div className="overlay-footer">
        <span>평점 {movie.vote_average?.toFixed(1)}</span>
        <span>관객수 {Math.round(movie.popularity)}</span>
        <span className={movie.adult ? "adult" : "under18"}>
          {movie.adult ? "18세 이상" : "18세 미만"}
        </span>
      </div>
    </div>
  </div>
);

export default MovieCard;