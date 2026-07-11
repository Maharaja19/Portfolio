import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(options = { threshold: 0.1, triggerOnce: true }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (options.triggerOnce) {
          observer.unobserve(currentElement);
        }
      } else if (!options.triggerOnce) {
        setIsRevealed(false);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement && !options.triggerOnce) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isRevealed];
}
