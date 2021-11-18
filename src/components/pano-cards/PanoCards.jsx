import React from "react";
import PropTypes from "prop-types";
import PanoCard from "../pano-card/PanoCard";
import "./pano-cards.css";

const PanoCards = (props) => {
  const { photos, userData } = props;
  if (!photos) {
    return (
      <div id="pano-cards">
        <div>loading...</div>
      </div>
    );
  }

  return (
    <div id="pano-cards">
      <div className="panos">
        {photos.map((pano) => (
          <PanoCard key={pano.id} {...pano} {...userData} />
        ))}
      </div>
    </div>
  );
};

PanoCards.propTypes = {
  photos: PropTypes.array,
  userData: PropTypes.object,
};

PanoCards.defaultProps = {
  photos: [],
};

export default PanoCards;
