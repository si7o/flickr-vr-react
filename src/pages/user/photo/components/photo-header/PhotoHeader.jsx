import React, { useState } from "react";
import PropTypes from "prop-types";
import { getFlickrPhotoUrl, getUserUrl } from "helpers/urlHelper";
import { Link } from "react-router-dom";
import "./photo-header.css";

const PhotoHeader = (props) => {
  const { title, username, pathAlias, photoId, loading } = props;

  const [showHeader, setShowHeader] = useState(true);
  const handleFullscreenClick = () => setShowHeader(!showHeader);

  return (
    <div
      id="photo-header"
      title={`${title} by ${username}`}
      className={`${showHeader ? "visible" : "hidden"} ${
        loading ? "loading" : ""
      }`}
    >
      <div className="content">
        <h4>{title || "Loading Panorama"}</h4>
        <p>
          <span>
            by <Link to={getUserUrl(pathAlias)}>{username}.</Link>
          </span>
          <span>
            view on{" "}
            <a
              href={getFlickrPhotoUrl(pathAlias, "", photoId)}
              target="_blank"
              rel="noreferrer"
              className="flickr"
            >
              flick<i>r</i>
            </a>
          </span>
        </p>
      </div>
      <div className="header-controls">
        <button onClick={handleFullscreenClick}>
          <i className={`gg-chevron up ${showHeader ? "up" : "down"}`}></i>
        </button>
      </div>
    </div>
  );
};

PhotoHeader.propTypes = {
  title: PropTypes.string,
  pathAlias: PropTypes.string,
  photoId: PropTypes.string,
  username: PropTypes.string,
  loading: PropTypes.bool,
};

export default PhotoHeader;
