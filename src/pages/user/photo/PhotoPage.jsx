import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageLoader } from "components";
import {
  fetchUserPhoto,
  selectImageUrl,
  selectIsLoaded,
} from "./photoPageSlice";
import { fetchUserPhotos } from "../userPageSlice";
import { PhotoHeader, PhotoSlider } from "./components";
import "./photo-page.css";
import { PanoViewerEgjs } from "components";
import PhotoSettings from "./components/photo-settings/PhotoSettings";

const PhotoPage = () => {
  const { pathAlias, photoId } = useParams();

  const dispatch = useDispatch();

  const loadedPhotoData = useSelector(selectIsLoaded);
  const imageUrl = useSelector(selectImageUrl);
  const title = useSelector((state) => state.photopage.title);

  const username = useSelector((state) => state.userpage.username);
  const userPhotos = useSelector((state) => state.userpage.photos);
  const shouldReloadData = useSelector(
    (state) => state.userpage.pathAlias !== pathAlias
  );
  const loadedUserData = useSelector((state) =>
    ["success", "error"].includes(state.userpage.status)
  );

  const loaded = loadedPhotoData && loadedUserData;

  useEffect(() => {
    dispatch(fetchUserPhoto({ pathAlias, photoId }));
  }, [photoId, dispatch]);

  useEffect(() => {
    if (shouldReloadData) {
      dispatch(fetchUserPhotos(pathAlias));
    }
  }, [shouldReloadData, dispatch]);

  return (
    <section id="photopage">
      <PhotoHeader
        title={title}
        username={username}
        pathAlias={pathAlias}
        photoId={photoId}
        loading={!loaded}
      />
      <PanoViewerEgjs image={imageUrl} />
      <PhotoSlider
        loaded={loaded}
        photos={userPhotos}
        pathAlias={pathAlias}
        currentPhotoId={photoId}
      />
      <PhotoSettings />
      <PageLoader show={!loaded} />
    </section>
  );
};

export default PhotoPage;
