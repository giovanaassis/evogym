import Benefits from "@/scenes/benefits";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("Benefits Component", () => {
  const setSelectedPage = vi.fn();

  it("should render correctly", () => {
    render(<Benefits setSelectedPage={setSelectedPage} />);

    expect(
      screen.getByRole("heading", { name: /MORE THAN JUST A GYM./i }),
    ).toBeInTheDocument();

    const benefitsPageGraphic = screen.getByLabelText("benefitsPageGraphic");
    expect(benefitsPageGraphic).toBeInTheDocument();
    expect(benefitsPageGraphic).toHaveAttribute(
      "src",
      "/src/assets/BenefitsPageGraphic.png",
    );

    const actionButton = screen.getByText(/join now/i);
    expect(actionButton).toBeInTheDocument();
  });

  it("should render the benefits", () => {
    render(<Benefits setSelectedPage={setSelectedPage}/>);

    const benefits = screen.getByTestId("benefits");
    expect(benefits).toBeInTheDocument();
  })
});
