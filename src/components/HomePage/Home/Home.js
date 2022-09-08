import React from "react";
import MovieList from "../MovieList/MovieList";
import { useLocation } from "react-router-dom";
import "./Home.css";
const Home = (props) => {
  const location = useLocation();
  return (
    <>
      <MovieList
        title="Latest Movies & TV"
        pathname={location.pathname}
        searchTerm={props.searchTerm}
      />
    </>
  );
};

export default Home;
