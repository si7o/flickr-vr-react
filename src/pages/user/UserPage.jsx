import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PageLoader, PanoCards } from "components";
import { fetchUserPhotos } from "./userPageSlice";
import { getFlickrUserUrl } from "helpers/urlHelper";

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

  useEffect(() => {
    if (shouldReloadData) {
      dispatch(fetchUserPhotos(pathAlias));
    }
  }, [shouldReloadData, dispatch]);

  return (
    <>
      <section id="userpage" style={{ margin: "16px 42px" }}>
        <h2>
          {username} has {photoCount} panoramas on{" "}
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
