import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPhotos } from "./homePageSlice";
import { PageLoader, PanoCards, StartHere } from "components";

const HomePage = () => {
  const dispatch = useDispatch();
  const latestPhotos = useSelector((state) => state.homepage.photos);
  const loaded = useSelector((state) =>
    ["success", "error"].includes(state.homepage.status)
  );
  const homeStatus = useSelector((state) => state.homepage.status);

  useEffect(() => {
    if (homeStatus === "idle") {
      dispatch(fetchLatestPhotos());
    }
  }, [homeStatus, dispatch]);

  return (
    <>
      <section className="homepage-content" style={{ margin: "16px 42px" }}>
        <StartHere />

        <h4>Latest panoramas from Flickr</h4>
        <PanoCards photos={latestPhotos} />
      </section>
      <PageLoader show={!loaded} />
    </>
  );
};

export default HomePage;
