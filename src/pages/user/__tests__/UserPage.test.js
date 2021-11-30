/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";
import { screen, waitFor } from "@testing-library/react";
import UserPage from "../UserPage";
import { MemoryRouter, useParams } from "react-router-dom";
import { reduxRender } from "utils/testing";
import { act } from "react-dom/test-utils";
import { getUserPhotos } from "services/skyboxService";
import { mockedUserPhotosData } from "services/__mocks__/skyboxService";

jest.mock("services/skyboxService");

jest.mock("components/pano-viewer/PanoViewerEgjs", () => {
  const PanoViewerEGjs = ({ image }) => (
    <img data-testid="panorama" src={image} />
  );
  return PanoViewerEGjs;
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("<PhotoPage>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Basic layout", async () => {
    useParams.mockImplementation(() => ({ pathAlias: "username" }));

    act(() => {
      reduxRender(
        <MemoryRouter>
          <UserPage />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(getUserPhotos).toHaveBeenCalled();
    });

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(mockedUserPhotosData.username);
    expect(heading).toHaveTextContent(mockedUserPhotosData.photos.length);

    expect(screen.getAllByRole("link").length).toBeGreaterThan(
      mockedUserPhotosData.total
    );
  });
});
