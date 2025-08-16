import "./Loader.css";

import type { CSSProperties } from "react";

const Loader = ({
  position = "absolute",
}: {
  position?: CSSProperties["position"];
}) => {
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
