import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import StartHere from "../StartHere";

describe("<startHere>", () => {
  test("Basic Layout", () => {
    const title = "expected Title";
    const subtitle = "Expected Subtitle";
    window.history.pushState({}, "HomePage", "/");

    render(<StartHere title={title} subtitle={subtitle} />, {
      wrapper: MemoryRouter,
    });

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: title,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: subtitle,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "go" })).toBeInTheDocument();
  });

  test("Form works", () => {
    window.history.pushState({}, "HomePage", "/");
    render(<StartHere />, {
      wrapper: BrowserRouter,
    });

    const username = "username";

    expect(screen.getByRole("button", { name: "go" })).toBeDisabled();
    act(() => {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: username },
      });
    });
    expect(screen.getByRole("button", { name: "go" })).not.toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: "go" }));
    expect(window.location.pathname).toEqual(`/photos/${username}`);
  });
});
