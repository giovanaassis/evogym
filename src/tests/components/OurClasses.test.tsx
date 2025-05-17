import OurClasses from "@/scenes/ourClasses";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("OurClasses Component", () => {
  const setSelectedPage = vi.fn();

  it("should render correctly", () => {
    render(<OurClasses setSelectedPage={setSelectedPage} />);

    expect(screen.getByRole("heading", {name: /our classes/i})).toBeInTheDocument();
  });

  it("should render the classes container", () => {
    render(<OurClasses setSelectedPage={setSelectedPage}/>)

    expect(screen.getByTestId("classes")).toBeInTheDocument();
  })
});
