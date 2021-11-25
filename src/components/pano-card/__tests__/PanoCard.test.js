import React from "react";
import { render, screen } from "@testing-library/react";
import PanoCard from "../PanoCard";
import { MemoryRouter } from "react-router";

const mockedPanoCardProps = {
  id: "0000001",
  title: "Photo title",
  thumbnail: "thumbnail.jpg",
  owner: "User@123112",
  username: "UserName",
  pathAlias: "username",
};

describe("<PanoCard>", () => {
  test("Default Layout", () => {
    render(<PanoCard {...mockedPanoCardProps} />, { wrapper: MemoryRouter });

    expect(screen.getAllByRole("link")).toHaveLength(3);

    expect(screen.getByText(mockedPanoCardProps.title)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: mockedPanoCardProps.username })
    ).toBeInTheDocument();
  });

  test("With no footer", () => {
    render(<PanoCard {...mockedPanoCardProps} small />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getAllByRole("link")).toHaveLength(1);

    expect(screen.getByText(mockedPanoCardProps.title)).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: mockedPanoCardProps.username })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "flickr" })
    ).not.toBeInTheDocument();
  });
});
