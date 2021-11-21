import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import PhotoItem from "./PhotoItem";
import "./photo-slider.css";

const PhotoSlider = (props) => {
  const { loaded, currentPhotoId, photos, pathAlias } = props;

  const [showGallery, setShowGallery] = useState(false);
  const sliderRef = useRef(null);

  const handleToggleClick = () => setShowGallery(!showGallery);

  const handleScrollLeftClick = () => {
    sliderRef.current.scrollLeft -= window.innerWidth / 2;
  };
  const handleScrollRightClick = () => {
    sliderRef.current.scrollLeft += window.innerWidth / 2;
  };

  return (
    <div id="photo-slider" className={showGallery ? "show" : ""}>
      <button onClick={handleToggleClick} className="toggle">
        {showGallery ? "Hide" : "More images"}
      </button>
      <button
        className={`gg-chevron-o left`}
        onClick={handleScrollLeftClick}
      ></button>
      <div className="item-list" onClick={handleToggleClick} ref={sliderRef}>
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
      <button
        className={`gg-chevron-o`}
        onClick={handleScrollRightClick}
      ></button>
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
