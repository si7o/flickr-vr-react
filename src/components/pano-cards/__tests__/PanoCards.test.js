import React from "react";
import { render, screen } from "@testing-library/react";
import PanoCards from "../PanoCards";

jest.mock("../../pano-card/PanoCard", () => {
  const MockedPanoCard = () => <div data-testid="pano-card">pano card</div>;
  return MockedPanoCard;
});

const mockedPanos = [
  {
    id: "0000001",
    title: "Photo title",
    thumbnail: "thumbnail.jpg",
    owner: "User@123112",
    username: "UserName",
    pathAlias: "username",
  },
  {
    id: "0000002",
    title: "Photo title2",
    thumbnail: "thumbnail2.jpg",
    owner: "User@123112",
    username: "UserName",
    pathAlias: "username",
  },
];

const mockedUserData = {};

describe("<PanoCards>", () => {
  test("No Panos", () => {
    render(<PanoCards photos={[]} userData={mockedUserData} />);

    expect(screen.queryAllByTestId("pano-card")).toHaveLength(0);
  });

  test("With panos", () => {
    render(<PanoCards photos={mockedPanos} userData={mockedUserData} />);

    expect(screen.getAllByTestId("pano-card")).toHaveLength(2);
  });

  test("With null panos", () => {
    render(<PanoCards photos={null} userData={mockedUserData} />);

    expect(screen.getByText("loading...")).toBeInTheDocument(3);
  });
});
