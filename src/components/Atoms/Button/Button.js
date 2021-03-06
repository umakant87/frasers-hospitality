import React from "react";
import "./Button.scss";
/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  props = props?.child ? props?.props : props;
  const {
    type,
    className,
    backgroundColor,
    size,
    label,
    callToAction,
    onClick 
  } = props;
  const CTA = (link) => {
    window.open(
      link,
      "_blank"
    );
  };
  return (
    <button
      type={type}
      className={[
        "c-button",
        `c-button__${size}`,
        `c-button__${className}`,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...(callToAction && {onClick: () => CTA(callToAction)})}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
