import React from "react";
import "./Text.scss";

const Text = ({ value, ...props }) => {
  if (props.type === "h1") {
    return <h1 {...props}>{value}</h1>;
  }
  if (props.type === "h2") {
    return <h2 {...props}>{value}</h2>;
  }
  if (props.type === "h3") {
    return <h3 {...props}>{value}</h3>;
  }
  if (props.type === "h4") {
    return <h4 {...props}>{value}</h4>;
  }
  if (props.type === "p") {
    return <p {...props}>{value}</p>;
  }
  if (props.type === "span") {
    return <span {...props}>{value}</span>;
  }
};

export default Text;
