import Navbar from "@/scenes/navbar";
import { SelectedPages } from "@/shared/types";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { mockMatchMedia } from "../mocks/mockMatchMedia";

const renderNavbar = (props = {}) => {
  return render(
    <Navbar
      isTopOfPage={true}
      selectedPage={SelectedPages.Home}
      setSelectedPage={vi.fn()}
      {...props}
    />,
  );
};

describe("Navbar Component", () => {
  const setSelectedPage = vi.fn();

  it("should render logo and menu links", () => {
    renderNavbar();

    const logo = screen.getByRole("img");
    const links = ["Home", "Benefits", "Our Classes", "Contact Us"];

    expect(logo).toHaveAttribute("src", "/src/assets/Logo.png");
    links.forEach((link) => {
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    });
  });

  it("should call setSelectedPage when menu link is clicked", async () => {
    renderNavbar({ setSelectedPage });

    const link = screen.getByRole("link", { name: /benefits/i });
    const user = userEvent.setup();

    await user.click(link);

    expect(setSelectedPage).toHaveBeenCalledWith("benefits");
  });

  it("should go to Contact Us when button is clicked", async () => {
    renderNavbar({ setSelectedPage });

    const button = screen.getByText(/become a member/i);
    const user = userEvent.setup();

    await user.click(button);

    expect(setSelectedPage).toHaveBeenCalledWith("contactus");
  });

  it("should render mobile menu icon on medium screens", () => {
    mockMatchMedia(false);

    render(
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPages.Home}
        setSelectedPage={setSelectedPage}
      />,
    );

    const icon = screen.getByLabelText("openMobileMenu");
    expect(icon).toBeInTheDocument();
  });

  it("should open menu mobile when button is clicked", async () => {
    mockMatchMedia(false);

    render(
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPages.Home}
        setSelectedPage={setSelectedPage}
      />,
    );

    const user = userEvent.setup();

    const openButton = screen.getByLabelText("openMobileMenu");

    await user.click(openButton);

    expect(screen.getByTestId("menu-mobile")).toBeInTheDocument();
  });

  it("should close menu mobile when button is clicked", async () => {
    mockMatchMedia(false);

    render(
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPages.Home}
        setSelectedPage={setSelectedPage}
      />,
    );

    const user = userEvent.setup();

    const openButton = screen.getByLabelText("openMobileMenu");
    await user.click(openButton);

    const closeButton = screen.getByLabelText("closeMobileMenu");
    await user.click(closeButton);

    expect(screen.queryByTestId("menu-mobile")).not.toBeInTheDocument();
  });
});
