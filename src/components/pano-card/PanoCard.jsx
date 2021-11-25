import React from "react";
import PropTypes from "prop-types";
import "./pano-card.css";
import { Link } from "react-router-dom";
import {
  getFlickrPhotoUrl,
  getUserPhotoUrl,
  getUserUrl,
} from "helpers/urlHelper";

const PanoCard = (props) => {
  const { id, title, thumbnail, owner, username, pathAlias, small } = props;

  const divId = `pano-card-${id}`;
  const userHref = getUserUrl(pathAlias, owner);
  const photoHref = getUserPhotoUrl(pathAlias, owner, id);
  const flickrPhotoHref = getFlickrPhotoUrl(pathAlias, owner, id);

  const showFooter = !small && (pathAlias || owner) && username && id;

  return (
    <div id={divId} className={`pano-card ${small ? "small" : ""}`}>
      <Link to={photoHref} className="card">
        <div className="img">
          <img src={thumbnail} loading="lazy" alt={title} />
          <div className="gradient"></div>
        </div>
        <div className="info">
          <h6 className="title">{title}</h6>
        </div>
      </Link>
      {showFooter && (
        <ul className="footer">
          <li>
            by <Link to={userHref}>{username}</Link>
          </li>
          <li>
            on
            <a
              href={flickrPhotoHref}
              target="_blank"
              rel="noreferrer"
              className="flickr"
            >
              flick<i>r</i>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

PanoCard.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string,
  username: PropTypes.string,
  pathAlias: PropTypes.string,
  small: PropTypes.bool,
};

export default PanoCard;
