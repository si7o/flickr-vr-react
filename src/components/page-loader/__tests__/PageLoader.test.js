import React from "react";
import { render, screen } from "@testing-library/react";
import PageLoader from "../PageLoader";

describe("<PageLoader>", () => {
  test("Has 'show' classname", () => {
    render(<PageLoader show />);

    expect(screen.getByTestId("pageloader")).toHaveClass("show");
  });

  test("Does not have 'show' classname", () => {
    render(<PageLoader />);

    expect(screen.getByTestId("pageloader")).not.toHaveClass("show");
  });
});
