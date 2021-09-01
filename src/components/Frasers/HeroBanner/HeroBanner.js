import React from "react";
import Picture from "../../Atoms/Picture/Picture";
import "./HeroBanner.scss";
import Text from "../../Atoms/Text/Text";
import Video from "../../Molecules/Video/Video";

export const HeroBanner = (props) => {
  props = props ?.child ? props ?.props : props;
  const { title, description, orientation, image } = props;
  return (
    <div className="c-hero-banner">
      <div className="c-hero-banner__container">
        <div className="c-hero-banner__container__image">
          <Picture props={image} child={true} />
        </div>
        <div
          className={[
            "c-hero-banner__container__content",
            `c-hero-banner__container__content--${orientation}`,
          ].join(" ")}
        >
          <div className="c-hero-banner__container__content__title">
            <Text type="h1" value={title} />
          </div>
          <div className="c-hero-banner__container__content__description">
            <Text type="h4" value={description} />
          </div>
          <div>
            <Video
              popUp
              videoId="nW9piCiWPZU"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
