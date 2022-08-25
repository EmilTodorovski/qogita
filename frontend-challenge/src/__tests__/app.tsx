// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("initial test - checks whether the title is rendered", () => {
    render(<HomePage />);

    const heading = screen.getByText("Products");

    expect(heading).toBeInTheDocument();
  });
});
