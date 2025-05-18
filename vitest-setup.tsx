/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockMatchMedia } from "./src/tests/mocks/mockMatchMedia";
import "@testing-library/jest-dom";
import { vi } from "vitest";

beforeAll(() => {
  mockMatchMedia(true);
});

vi.mock("react-anchor-link-smooth-scroll", () => ({
  __esModule: true,
  default: ({ children, ...props }: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => <a {...props}>{children}</a>,
}));

// a lib framer-motion depende do IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    _callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit,
  ) {}

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// Substitui o IntersectionObserver global
global.IntersectionObserver = MockIntersectionObserver;
