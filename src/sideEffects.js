import { LINKS } from "./App";
import { useRouteMatch } from "react-router";

export const useIsHomepage = () => {
  const routeMatch = useRouteMatch({ path: "/", exact: true });
  return !!routeMatch;
};

export const isAboutPage = () => {
  const routeMatch = useRouteMatch({ path: LINKS.aboutPage, exact: true });
  return !!routeMatch.isExact;
};

export const isUserPage = () => {
  const routeMatch = useRouteMatch({ path: LINKS.userPage, exact: true });
  return !!routeMatch?.params?.pathAlias;
};

export const useIsPhotoPage = () => {
  const routeMatch = useRouteMatch({ path: LINKS.photoPage, exact: true });
  return routeMatch?.params?.pathAlias && routeMatch?.params?.photoId;
};
