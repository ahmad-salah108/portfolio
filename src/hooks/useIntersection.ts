import { RefObject, useEffect, useState } from "react";

export const useIntersection = (
  element: RefObject<Element>,
  rootMargin: string = "0px"
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = element?.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [element, rootMargin]);

  return isVisible;
};
