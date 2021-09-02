import React from "react";
import Picture from "../../Atoms/Picture/Picture";
import EmailSubscription from "../../Molecules/EmailSubscription/EmailSubscription";
import "./HeroComposite.scss";

const HeroComposite = ({ image, title, description, cta, orientation }) => {
  return (
    <div className="c-hero-composite">
      <div
        className={[
          "c-hero-composite__container",
          `c-hero-composite__container--${orientation}`,
        ].join(" ")}
      >
        <div className="c-hero-composite__container__image">
          <Picture props={image} child={true} />
        </div>
        <div className="c-hero-composite__container__content">
          <EmailSubscription
            buttonLabel="subscribe"
            placeholderText="Name*"
            subscriptionText="Stay up-to-date with the latest estate news"
            subscriptionHeader="NEWSLETTER"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComposite;
