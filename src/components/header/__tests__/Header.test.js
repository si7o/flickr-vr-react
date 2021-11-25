import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("<Header>", () => {
  test("Contains all links", () => {
    render(<Header />, { wrapper: MemoryRouter });

    expect(screen.queryAllByRole("link")).toHaveLength(3);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("github")).toBeInTheDocument();
  });

  test("Photo URL only contains home link", () => {
    window.history.pushState({}, "PhotoPage", "/photos/username/photoId000");
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.queryAllByRole("link")).toHaveLength(1);
    expect(screen.queryByText("About")).not.toBeInTheDocument();
    expect(screen.queryByText("github")).not.toBeInTheDocument();
  });
});
