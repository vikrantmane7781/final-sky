import React, { useState, useEffect } from "react";
// import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

const MovieBoxSets = (props) => {
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(29);
  const max = 10;
  const movieURL = "https://api.tvmaze.com/shows";

  useEffect(() => {
    fetchMovies();
  }, [limit]);

  const fetchMovies = () => {
    fetch(movieURL)
      .then((res) => res.json())
      .then((response) => {
        setMovies(response);
        setTimeout(() => {}, 1500);
      });
  };

  const showMoreHandler = () => {
    if (limit <= max) {
      setLimit(limit + 12);
    }
  };

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div
        className={`container movie-cards-section no-mini-banners ${
          props.pathname ? "" : "no-banner"
        }`}
      >
        <h2 className="thin-text"> Movie Box Sets</h2>
        <div className="main-box">
          {movies.slice(5, limit - 5).map((movie, key) => {
            return (
              <div className="movie-details" key={key}>
                <div className="movie-box">
                  <Link to={`/details/${movie.id}`}>
                    <div className="image-container">
                      <img src={movie.image.medium} alt="" />
                    </div>
                  </Link>
                </div>
                <p className="movie-text">{movie.name}</p>
              </div>
            );
          })}
        </div>
        {/* Show More & Back to Top Button  */}

        <div className="relative-container btn-containers">
          <div className="btn-area text-center">
            <button
              className="text-center show-more-btn btn-medium"
              id="show-more"
              onClick={showMoreHandler}
            >
              Show more
            </button>
            <Link
              to="/"
              className="back-to-top"
              id="back-to-top"
              onClick={goToTopHandler}
            >
              <i className="fa-solid fa-circle-chevron-up"></i> Back to top
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieBoxSets;
