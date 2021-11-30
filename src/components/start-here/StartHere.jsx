import React, { useState } from "react";
import PropTypes from "prop-types";
import "./start-here.css";
import { useHistory } from "react-router-dom";
import { getStartHereURL } from "helpers/urlHelper";

const StartHere = (props) => {
  const { title, subtitle } = props;
  const history = useHistory();

  const [flickrInput, setFlickrInput] = useState("");

  const handleValueChange = (event) => setFlickrInput(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getStartHereURL(flickrInput);
    if (url) {
      history.push(url);
    }
  };

  return (
    <div id="start-here">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <form
        name="start-here-form"
        id="start-here-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="flickrInput">
          Enter your Flickr username or the URL to your flickr equirectangular
          panorama
          <input
            id="flickrInput"
            name="flickrInput"
            placeholder="Enter a username or a flickr URL"
            value={flickrInput}
            onChange={handleValueChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" disabled={!flickrInput}>
          go
        </button>
      </form>
    </div>
  );
};

StartHere.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

StartHere.defaultProps = {
  title: "Watch flickr equirrectangular panoramas the right way.",
  subtitle: "Start here!",
};

export default StartHere;
