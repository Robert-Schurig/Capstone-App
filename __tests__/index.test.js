import {render, screen} from "@testing-library/react";
import Profile from "../pages/profile/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders an octopus", () => {
    render(<Profile />);

    const list = screen.getByText(/Benutzername/i);

    expect(list).toBeInTheDocument();
  });
});
