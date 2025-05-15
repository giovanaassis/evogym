import App from "@/App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render Navbar", () => {
    render(<App />);

    expect(screen.getByRole("link", {name: "Home"})).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Become a Member")).toBeInTheDocument();
  });
});
