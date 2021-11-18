import React, { useState } from "react";
import "./start-here.css";
import { useHistory } from "react-router";
import { getStartHereURL } from "helpers/urlHelper";

const StartHere = () => {
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
      <h2>Watch flickr equirrectangular panoramas the right way.</h2>
      <h3>Start here!</h3>
      <p></p>
      <form onSubmit={handleSubmit} autoComplete="off">
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

export default StartHere;
