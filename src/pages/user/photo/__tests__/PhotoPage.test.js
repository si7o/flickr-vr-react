/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";
import { screen, waitFor } from "@testing-library/react";
import PhotoPage from "../PhotoPage";
import { MemoryRouter } from "react-router-dom";
import { reduxRender } from "utils/testing";
import { act } from "react-dom/test-utils";
import { getUserPhoto, getUserPhotos } from "services/skyboxService";

jest.mock("services/skyboxService");

jest.mock("components/pano-viewer/PanoViewerEgjs", () => {
  const PanoViewerEGjs = ({ image }) => (
    <img data-testid="panorama" src={image} />
  );
  return PanoViewerEGjs;
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => ({ pathAlias: "username", photoId: "photoId" })),
}));

describe("<PhotoPage>", () => {
  test("Contains all links", async () => {
    act(() => {
      reduxRender(
        <MemoryRouter>
          <PhotoPage />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(getUserPhoto).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(getUserPhotos).toHaveBeenCalled();
    });

    expect(screen.getByTestId("photo-header")).toBeInTheDocument();
    expect(screen.getByTestId("panorama")).toBeInTheDocument();
    expect(screen.getByTestId("photo-slider")).toBeInTheDocument();
  });
});
