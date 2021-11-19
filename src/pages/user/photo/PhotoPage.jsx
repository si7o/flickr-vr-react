import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PageLoader } from "components";
import { fetchUserPhoto, QUALITY } from "./photoPageSlice";
import { fetchUserPhotos } from "../userPageSlice";
import { PhotoHeader, PhotoSlider } from "./components";
import "./photo-page.css";
import { PanoViewerEgjs } from "../../../components";

const resizeCanvas = () => {
  console.log(window.innerWidth, window.innerHeight);
};

window.addEventListener(
  "resize",
  function () {
    resizeCanvas();
  },
  false
);

const PhotoPage = () => {
  const { pathAlias, photoId } = useParams();

  const dispatch = useDispatch();

  const loaded = useSelector((state) =>
    ["success", "error"].includes(state.photopage.status)
  );
  //const description = useSelector((state) => state.photopage.desc);
  const img = useSelector((state) =>
    state.photopage.quality === QUALITY.HD
      ? state.photopage.urlHD
      : state.photopage.urlSD
  );
  const title = useSelector((state) => state.photopage.title);

  const username = useSelector((state) => state.userpage.username);
  const userPhotos = useSelector((state) => state.userpage.photos);
  const shouldReloadData = useSelector(
    (state) => state.userpage.pathAlias !== pathAlias
  );
  const loadedUserPhotos = useSelector((state) =>
    ["success", "error"].includes(state.userpage.status)
  );

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
      />
      <PanoViewerEgjs image={img} />
      <PhotoSlider
        loaded={loadedUserPhotos}
        photos={userPhotos}
        pathAlias={pathAlias}
        currentPhotoId={photoId}
      />
      <PageLoader show={!loaded} />
    </section>
  );
};

export default PhotoPage;
