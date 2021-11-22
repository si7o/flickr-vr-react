import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { PanoViewer, PROJECTION_TYPE } from "@egjs/react-view360";
import "./pano-viewer-ecjs.css";

const PanoViewerEgjs = (props) => {
  const { image } = props;

  const ref = useRef();
  const [ready, setReady] = useState(false);

  const resizeCanvas = () => {
    ref.current.updateViewportDimensions();
  };

  const handlePanoReady = () => {
    setReady(true);
  };

  const handlePanoError = (e) => {
    if (image) {
      window.alert(e.message);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas, false);
  }, []);

  useEffect(() => {
    if (!image) {
      setReady(false);
    }
  }, [image]);

  return (
    <>
      <PanoViewer
        ref={ref}
        id="panoviewer"
        image={image}
        projectionType={PROJECTION_TYPE.EQUIRECTANGULAR}
        showPolePoint
        onReady={handlePanoReady}
        onError={handlePanoError}
        fov={88}
      />
      {!ready && <div className="loading"></div>}
    </>
  );
};

PanoViewerEgjs.propTypes = {
  image: PropTypes.string,
};

export default React.memo(PanoViewerEgjs);
