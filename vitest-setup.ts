/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockMatchMedia } from "./src/tests/mocks/mockMatchMedia";
import "@testing-library/jest-dom";
import "@/tests/mocks/mockAnchorLink";

// o mock da useMediaQuery
beforeAll(() => mockMatchMedia(true));

// a lib framer-motion depende do IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    private callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit,
  ) {}

  observe(_target: Element): void {
    // Se quiser, pode simular chamada do callback:
    // this.callback([{ isIntersecting: true, target: _target } as IntersectionObserverEntry], this);
  }

  unobserve(_target: Element): void {}

  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// Substitui o IntersectionObserver global
global.IntersectionObserver = MockIntersectionObserver;
