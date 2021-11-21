import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./header.css";
import { GithubIcon } from "components/icons";
import { LINKS } from "../../App";
import { useIsPhotoPage } from "../../sideEffects";

const Header = () => {
  const isPhotopage = useIsPhotoPage();

  return (
    <header className={isPhotopage ? "photopage" : ""}>
      <Link to={LINKS.homepage}>
        <Logo />
      </Link>
      {!isPhotopage && (
        <>
          <Link to={LINKS.aboutPage}>About</Link>
          <a
            href="https://github.com/si7o/flickr-vr-react"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            target="_blank"
          >
            github <GithubIcon />
          </a>
        </>
      )}
    </header>
  );
};

export default Header;
