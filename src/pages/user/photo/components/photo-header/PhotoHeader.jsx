import React from "react";
import PropTypes from "prop-types";
import { getFlickrPhotoUrl, getUserUrl } from "helpers/urlHelper";
import { Link } from "react-router-dom";
import "./photo-header.css";

const PhotoHeader = (props) => {
  const { title, username, pathAlias, photoId } = props;

  return (
    <div id="photo-header" title={`${title} by ${username}`}>
      <h4>{title}</h4>
      <p>
        <span>
          by <Link to={getUserUrl(pathAlias)}>{username}.</Link>
        </span>
        <span>
          view on{" "}
          <a
            href={getFlickrPhotoUrl(pathAlias, photoId)}
            target="_blank"
            rel="noreferrer"
            className="flickr"
          >
            flick<i>r</i>
          </a>
        </span>
      </p>
    </div>
  );
};

PhotoHeader.propTypes = {
  title: PropTypes.string,
  pathAlias: PropTypes.string,
  photoId: PropTypes.string,
  username: PropTypes.string,
};

export default PhotoHeader;
