import React from "react";
import PropTypes from "prop-types";
import "./photo-item.css";
import { Link } from "react-router-dom";
import { getUserPhotoUrl } from "helpers/urlHelper";

const PhotoItem = (props) => {
  const { id, thumbnail, title, pathAlias, small } = props;

  const divId = `pano-card-${id}`;
  const photoHref = getUserPhotoUrl(pathAlias, "", id);

  return (
    <div id={divId} className={`photo-item ${small ? "small" : ""}`}>
      <Link to={photoHref} className="clickable">
        <img src={thumbnail} loading="lazy" alt={title} />
        <div className="gradient">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

PhotoItem.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pathAlias: PropTypes.string,
  variant: PropTypes.oneOf(["homepage", "userpage"]),
  small: PropTypes.bool,
};

export default PhotoItem;
