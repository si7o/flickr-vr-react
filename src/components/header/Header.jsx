import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";
import "./header.css";

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
      <Link to="/">
        <Logo />
      </Link>
      {isHomepage && (
        <a
          href="https://github.com/si7o/skybox"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          github
        </a>
      )}
    </header>
  );
};

export default Header;
