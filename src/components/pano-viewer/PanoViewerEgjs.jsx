import React from "react";
import PropTypes from "prop-types";
import { PanoViewer, PROJECTION_TYPE } from "@egjs/react-view360";
import "./pano-viewer-ecjs.css";

const PanoViewerEgjs = (props) => {
  const { image } = props;

  if (!image) {
    return null;
  }

  return (
    <PanoViewer
      id='panoviewer'
      image={image}
      projectionType={PROJECTION_TYPE.EQUIRECTANGULAR}
      showPolePoint
    />
  );
};

PanoViewerEgjs.propTypes = {
  image: PropTypes.string,
};

export default PanoViewerEgjs;
