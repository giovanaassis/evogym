import { vi } from "vitest";

vi.mock("react-anchor-link-smooth-scroll", () => ({
  __esModule: true,
  default: ({ children, ...props }: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => <a {...props}>{children}</a>,
}));