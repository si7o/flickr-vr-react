import React, { useState } from "react";
import PropTypes from "prop-types";
import PhotoItem from "./PhotoItem";
import "./photo-slider.css";

const PhotoSlider = (props) => {
  const { loaded, currentPhotoId, photos, pathAlias } = props;

  const [showGallery, setShowGallery] = useState(false);

  const handleToggleClick = () => setShowGallery(!showGallery);

  return (
    <div id="photo-slider" className={showGallery ? "show" : ""}>
      <button onClick={handleToggleClick} className="toggle">
        {showGallery ? "Hide" : "Show more"}
      </button>
      <div className="item-list" onClick={handleToggleClick}>
        {loaded ? (
          photos.map((photo) => (
            <PhotoItem
              key={photo.id}
              {...photo}
              pathAlias={pathAlias}
              isCurrent={photo.id === currentPhotoId}
            />
          ))
        ) : (
          <div>...loading</div>
        )}
      </div>
    </div>
  );
};

PhotoSlider.propTypes = {
  currentPhotoId: PropTypes.string,
  pathAlias: PropTypes.string,
  loaded: PropTypes.bool,
  photos: PropTypes.array,
};

PhotoSlider.defaultProps = {
  photos: [],
};

export default PhotoSlider;
