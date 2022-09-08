import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Details.css";

const Details = (props) => {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState(false);

  let { id } = useParams();
  let movie_id = parseInt(id);
  const movieURL = "https://api.tvmaze.com/shows";

  useEffect(() => {
    fetchMovie(movie_id);
  }, [movie_id]);

  const fetchMovie = (id) => {
    fetch(movieURL + "/" + id)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });
  };

  var regex = /(<([^>]+)>)/gi;
  let url = "https://www.youtube.com/watch?v=-FZ-pPFAjYY";

  return (
    <>
      {movie.length !== 0 ? (
        <div
          className={`container movie-cards-section no-mini-banners ${
            props.pathname ? "" : "no-banner"
          }`}
        >
          <div className="single-movie-section">
            {/* {console.log(movie)} */}
            <div className="row">
              <div className="col-md-3">
                <div className="movie-desc-image">
                  {!video && (
                    <img
                      src={movie.image.original}
                      alt="movie"
                      className="img-fluid detail-movie"
                    />
                  )}
                  {video && (
                    <ReactPlayer
                      className="img-fluid detail-movie"
                      style={{
                        zIndex: 9999999
                      }}
                      url="https://www.youtube.com/watch?v=JVsm80tCmxg"
                      playing={true}
                      controls
                      audio
                    />
                  )}
                </div>
                {/* Trailor */}
                <div className="trailor">
                  <Button
                    className="product__trailer--link top-section-space"
                    onClick={() => setVideo(true)}
                  >
                    <span className="icon play-icon">
                      <i class="fa-regular fa-circle-play"></i>
                    </span>
                    Trailor
                  </Button>
                </div>
                {/* Trailor */}
              </div>

              <div className="col-md-9">
                <h2 className="movie-title">{movie.name}</h2>
                <ul className="movie-meta-details">
                  <li className="smal_text movie-meta-details__text">
                    {movie.premiered}
                  </li>
                  <li className="smal_text movie-meta-details__text">
                    {movie.runtime} mins.
                  </li>
                  <li className="smal_text movie-meta-details__text">
                    Cert. PG
                  </li>
                </ul>
                <div className="movie-info">
                  <p className="movie-info-text">
                    {movie.summary.replace(regex, "")}
                  </p>
                </div>
                <p className="small-info">Contains mature themes, violence.</p>

                <div className="movie-desc">
                  {/* cast Information */}
                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Cast: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info actors">
                        <Link to="/">Penélope Cruz</Link>
                        <Link to="/">Milena Smit </Link>
                        <Link to="/">Israel Elejalde</Link>
                      </p>
                    </div>
                  </div>

                  {/*  Director Information */}

                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Director: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info director">
                        <Link to="/">Marc Cherry</Link>
                      </p>
                    </div>
                  </div>

                  {/*  Genre Informatiob*/}

                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Genre: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info director">
                        {movie.genres.map((genre) => {
                          console.log(genre);
                          return (
                            <>
                              <Link to="/">{genre}</Link>
                            </>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
