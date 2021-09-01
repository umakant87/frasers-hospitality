import React from "react";
import "./TileCard.scss";
import Picture from "./../../Atoms/Picture/Picture";
import Text from "./../../Atoms/Text/Text";
import Button from "../../Atoms/Button/Button";

const TileCard = (props) => {
  props = props ?.child ? props ?.props : props;
  const { tiles } = props;
  return (
    <div className="c-tiles-container">
      {tiles && tiles.map((tile, index) => {
        var imgUrl = tile.image.src ? tile.image.src : "";
        var divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        }
        return (
          <div className="TileCard d-flex col-md-12">
            <div className={"children col-md-4"} style={divStyle}>
              {/* <Picture props={tile.image} child={true} /> */}

            </div>
            <div className="c-tiles-container__content">
              <Text className="c-tiles-container__number" type="h3" value={index + 1} />
              <Text className={"c-tiles-container__title"} type="h2" value={tile.title} />
              <Text className="c-tiles-container__description" type="p" value={tile.description} />

              <Button
                callToAction="http://www.google.com"
                className="primary c-tiles-container__subscription"
                label="Search Opportunities"
                size="medium"
                type="button"
              />
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default TileCard;
