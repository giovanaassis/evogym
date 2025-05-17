import Home from "@/scenes/home";
import { vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { mockMatchMedia } from "../mocks/mockMatchMedia";

describe("Home Component", () => {
  const setSelectedPage = vi.fn();

  it("should render correctly", () => {
    render(<Home setSelectedPage={setSelectedPage} />);

    const homePageText = screen.getByLabelText("homePageText");
    expect(homePageText).toBeInTheDocument();
    expect(homePageText).toHaveAttribute("src", "/src/assets/HomePageText.png");

    const actionButton = screen.getByText(/join now/i);
    expect(actionButton).toBeInTheDocument();

    const homePageGraphic = screen.getByLabelText("homePageGraphic");
    expect(homePageGraphic).toBeInTheDocument();
    expect(homePageGraphic).toHaveAttribute(
      "src",
      "/src/assets/HomePageGraphic.png",
    );
  });

  it("should render sponsors on medium screens", () => {
    render(<Home setSelectedPage={setSelectedPage} />);

    const sponsors = screen.getByTestId("sponsors");
    expect(sponsors).toBeInTheDocument();
  });

  it("should not render sponsors on mobile screens", () => {
    mockMatchMedia(false);

    render(<Home setSelectedPage={setSelectedPage} />);

    expect(screen.queryByTestId("sponsors")).not.toBeInTheDocument();
  });
});
