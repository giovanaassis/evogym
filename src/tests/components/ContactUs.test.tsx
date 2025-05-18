import ContactUs from "@/scenes/contactUs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("ContactUs Component", () => {
  const setSelectedPage = vi.fn();

  it("should render correctly", () => {
    render(<ContactUs setSelectedPage={setSelectedPage} />);

    expect(
      screen.getByRole("heading", { name: /join now to get in shape/i }),
    ).toBeInTheDocument();

    const contactUsPageGraphic = screen.getByLabelText("contactUsPageGraphic");
    expect(contactUsPageGraphic).toBeInTheDocument();
    expect(contactUsPageGraphic).toHaveAttribute(
      "src",
      "/src/assets/ContactUsPageGraphic.png",
    );
  });

  it("should render the form", () => {
    render(<ContactUs setSelectedPage={setSelectedPage} />);

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("form")).toHaveAttribute("method", "POST");

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();

    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("should show error message when inputs are empty", async () => {
    render(<ContactUs setSelectedPage={setSelectedPage} />);

    const user = userEvent.setup();

    const submitButton = screen.getByText(/submit/i);
    await user.click(submitButton);

    const errors = await screen.findAllByText(/this field is required/i);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toBeInTheDocument();
  });

  it("should show error message when name has more than 100 characters", async () => {
    render(<ContactUs setSelectedPage={setSelectedPage} />);

    const user = userEvent.setup();

    const submitButton = screen.getByText(/submit/i);
    const invalidName = "a".repeat(101);

    await user.type(screen.getByPlaceholderText(/name/i), invalidName);
    await user.click(submitButton);

    expect(
      await screen.findByText(/Max length is 100 characters./i),
    ).toBeInTheDocument();
  });

  it("should show error message when email is invalid", async () => {
    render(<ContactUs setSelectedPage={setSelectedPage} />);

    const user = userEvent.setup();

    const submitButton = screen.getByText(/submit/i);
    const invalidEmail = "invalid-email";

    await user.type(screen.getByPlaceholderText(/email/i), invalidEmail);
    await user.click(submitButton);

    expect(
      await screen.findByText(/this email is invalid/i),
    ).toBeInTheDocument();
  });

  it("should submit the form", async () => {
    const onSubmit = vi.fn().mockImplementation((e) => e.preventDefault);

    render(<ContactUs setSelectedPage={setSelectedPage} onSubmit={onSubmit}/>);

    const user = userEvent.setup();

    const inputName = "Test";
    const inputEmail = "test@email.com";
    const inputMessage = "This is a test.";

    await user.type(screen.getByPlaceholderText(/name/i), inputName);
    await user.type(screen.getByPlaceholderText(/email/i), inputEmail);
    await user.type(screen.getByPlaceholderText(/message/i), inputMessage);

    const submitButton = screen.getByText(/submit/i);
    await user.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });
});
