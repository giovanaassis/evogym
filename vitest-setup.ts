/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockMatchMedia } from "@/tests/mocks/mockMatchMedia";
import "@testing-library/jest-dom";
import { vitest } from "vitest";

// o mock da useMediaQuery
beforeAll(() => mockMatchMedia(true));

// a lib framer-motion depende do IntersectionObserver
class IntersectionObserver {
  constructor(_callback: any, _options?: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error: jsdom does not support IntersectionObserver
global.IntersectionObserver = IntersectionObserver;
