import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PhotoHeader, { loadingMsg } from "../PhotoHeader";
import { MemoryRouter } from "react-router";

const mockedPhotoHeaderProps = {
  photoId: "0000001",
  title: "Photo title",
  owner: "User@123112",
  username: "UserName",
  pathAlias: "username",
  loading: false,
};

describe("<PhotoHeader>", () => {
  test("Default Layout can hide header", async () => {
    render(<PhotoHeader {...mockedPhotoHeaderProps} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getAllByRole("link")).toHaveLength(2);

    expect(screen.getByText(mockedPhotoHeaderProps.title)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: mockedPhotoHeaderProps.username })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.queryByTestId("photo-header")).toHaveClass("hidden");
    });
  });

  test("Loading panorama", () => {
    render(<PhotoHeader loading={true} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getAllByRole("link")).toHaveLength(2);

    expect(screen.getByText(loadingMsg)).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: mockedPhotoHeaderProps.username })
    ).not.toBeInTheDocument();
  });
});
