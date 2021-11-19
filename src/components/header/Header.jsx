import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";
import "./header.css";
import { GithubIcon } from "components/icons";
import { LINKS } from "../../App";

const useIsPhotoPage = () => {
  const routeMatch = useRouteMatch({ path: "/photos/:pathAlias/:photoId" });
  return routeMatch?.params?.pathAlias && routeMatch?.params?.photoId;
};

const useIsHomepage = () => {
  const routeMatch = useRouteMatch({ path: "/", exact: true });
  return !!routeMatch;
};

const Header = () => {
  const isPhotopage = useIsPhotoPage();
  const isHomepage = useIsHomepage();

  return (
    <header className={isPhotopage ? "photopage" : ""}>
      <Link to={LINKS.homepage}>
        <Logo />
      </Link>
      {isHomepage && (
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
