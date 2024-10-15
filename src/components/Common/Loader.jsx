import React from "react";
import "./Loader.css";

// eslint-disable-next-line react/prop-types
const Loader = ({ position = "absolute" }) => {
  return (
    <div
      className="loader-container"
      id="loader"
      style={{ position: position }}
    >
      <div className="liquid-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
