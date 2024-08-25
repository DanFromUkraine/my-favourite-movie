import React, { useId } from "react";
import "./movie.scss";

const Movie = ({
  image_url,
  movie_name,
  year,
  director,
  screenwriter,
  starring,
  my_rating,
}) => {
  return (
    <div className="movie_cont">
      <div className="movie">
        <div className="content_wrapper">
        <div className="year">
          <span>{year}</span>
        </div>
        <h1 className="heading">{movie_name}</h1>
        <div className="main-image-wrapper">
          <img src={image_url} />
        </div>
        <div className="bottom">
          <div className="crew">
            <div className="screenwriter">
              <h2>story by</h2>
              {screenwriter.split(";").map((sw) => <p key={useId()}>{sw}</p>)}
            </div>
            <div className="director">
              <h2>Directed by</h2>
              <p>{director}</p>
            </div>
            <div className="starring">
              <h2>Starring</h2>
              <p>{starring}</p>
            </div>
          </div>
          <div className="my_rating">
            <h2>My Rating</h2>
            <p>{my_rating}</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Movie;
