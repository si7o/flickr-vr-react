import { GithubIcon } from "components/icons";
import { getUserUrl } from "helpers/urlHelper";
import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section
      className="aboutpage"
      style={{ margin: "16px 42px", fontSize: "larger" }}
    >
      <h2>About</h2>
      <p>
        This is an{" "}
        <a
          href="https://wiki.panotools.org/Equirectangular_Projection"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          equirectangular panorama
        </a>{" "}
        viewer for{" "}
        <a
          href="http://www.flickr.com"
          target="_blank"
          rel="noreferrer"
          className="flickr"
        >
          flick<i>r</i>
        </a>{" "}
        images made using React to learn a bit about Redux and, in the meantime,
        re-design an old project{" "}
        <a
          href="https://vr.andeandaran.com"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          <i>skybox</i>
        </a>
      </p>
      <p>
        You can check the source code in GitHub:
        <ul>
          <li>
            <a
              href="https://github.com/si7o/flickr-vr-react"
              referrerPolicy="no-referrer"
              rel="noreferrer"
              target="_blank"
            >
              flickr-vr-react <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/si7o/skybox"
              referrerPolicy="no-referrer"
              rel="noreferrer"
              target="_blank"
            >
              skybox <GithubIcon />
            </a>
          </li>
        </ul>
      </p>
      <p>
        And you can also check{" "}
        <Link to={getUserUrl("sitoo")}>
          my equirectangular panoramas from flickr
        </Link>{" "}
        ;-).
      </p>
    </section>
  );
};

export default AboutPage;
