import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button Component", () => {
  test("Renders button correctly", () => {
    render(
      <Button className="test-button" onClick={() => {}} disabled={false}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("test-button");
  });

  test("Handles click event correctly", () => {
    const handleClick = jest.fn();

    render(
      <Button className="test-button" onClick={handleClick} disabled={false}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByText("Click me");

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
