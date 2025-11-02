import { RefObject, useEffect, useState } from "react";

export function useIntersection(
  element: RefObject<HTMLElement | null>,
  rootMargin: string = "0px"
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = element?.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [element, rootMargin]);

  return isVisible;
}
