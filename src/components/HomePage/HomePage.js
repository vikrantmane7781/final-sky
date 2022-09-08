import React from "react";
import Home from "./Home/Home";
import ReactCarousel from "./ReactCarousel/ReactCarousel";

const HomePage = (props) => {
  return (
    <div>
      <ReactCarousel />
      <Home searchTerm={props.searchTerm} />
    </div>
  );
};

export default HomePage;
