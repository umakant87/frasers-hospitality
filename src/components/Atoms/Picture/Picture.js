import React from "react";
import "./Picture.scss";
const Picture = (props) => {
  props = props?.child ? props?.props : props;
  const { alt, sources, src } = props;
  return (
    <picture>
      {sources && sources.map((source, index) => {
        return (
          <source key={index} media={source.media} srcSet={source.srcset} />
        );
      })}
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Picture;
