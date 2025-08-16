import "./Loader.css";
import type { CSSProperties } from "react";

const Loader = ({
  position = "absolute",
  size = 40,
  color = "#f03355",
  style = {},
}: {
  position?: CSSProperties["position"];
  size?: number;
  color?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className="loader"
      style={{
        // position,
        width: size,
        aspectRatio: "1 / 1",
        color,
        ...style,
      }}
    ></div>
  );
};

export default Loader;
