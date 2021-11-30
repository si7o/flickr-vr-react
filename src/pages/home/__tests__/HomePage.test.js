/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";
import { screen, waitFor } from "@testing-library/react";
import HomePage from "../HomePage";
import { MemoryRouter } from "react-router-dom";
import { reduxRender } from "utils/testing";
import { act } from "react-dom/test-utils";
import { getHomePhotos } from "services/skyboxService";
import { mockedHomePhotosData } from "services/__mocks__/skyboxService";

jest.mock("services/skyboxService");

describe("<HomePage>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Basic layout", async () => {
    act(() => {
      reduxRender(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(getHomePhotos).toHaveBeenCalled();
    });

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThan(
      mockedHomePhotosData.total
    );
  });
});
