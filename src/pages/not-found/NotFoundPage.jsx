import React from "react";
import { StartHere } from "components";
import "./not-found.css";
import { GithubIcon } from "components/icons";
import { Link } from "react-router-dom";
import { LINKS } from "../../App";

const NotFoundPage = () => {
  return (
    <div id="not-found">
      <h1>Oops!</h1>
      <StartHere
        title="Sorry, we couldn't find what you were looking for..."
        subtitle="Try something different?"
      />
      <ul>
        <li>
          <Link to={LINKS.homepage}>Home</Link>
        </li>
        <li>
          <Link to={LINKS.aboutPage}>About</Link>
        </li>
        <li>
          <a
            href="https://github.com/si7o/flickr-vr-react"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            target="_blank"
          >
            GitHub <GithubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NotFoundPage;
