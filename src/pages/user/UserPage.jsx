import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PageLoader, PanoCards } from "components";
import { fetchUserPhotos } from "./userPageSlice";
import { getFlickrUserUrl } from "helpers/urlHelper";
import NotFoundPage from "pages/not-found/NotFoundPage";

const UserPage = () => {
  const { pathAlias } = useParams();

  const dispatch = useDispatch();

  const username = useSelector((state) => state.userpage.username);
  const photoCount = useSelector((state) => state.userpage.total);
  const photos = useSelector((state) => state.userpage.photos);
  const shouldReloadData = useSelector(
    (state) => state.userpage.pathAlias !== pathAlias
  );
  const loaded = useSelector((state) =>
    ["success", "error"].includes(state.userpage.status)
  );

  const hasErrors = useSelector((state) => "error" === state.userpage.status);

  useEffect(() => {
    if (shouldReloadData) {
      dispatch(fetchUserPhotos(pathAlias));
    }
  }, [pathAlias, shouldReloadData, dispatch]);

  if (hasErrors) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section id="userpage" style={{ margin: "16px 42px" }}>
        <h2>
          {loaded
            ? `${username} has ${photoCount} panoramas on `
            : `Loading ${pathAlias} panoramas from `}
          <a
            href={getFlickrUserUrl(pathAlias)}
            className="flickr"
            target="_blank"
            rel="noreferrer"
          >
            flick<i>r</i>
          </a>
        </h2>
        <PanoCards
          photos={photos}
          userData={{ username, pathAlias, small: true }}
        />
      </section>
      <PageLoader show={!loaded} />
    </>
  );
};

export default UserPage;
