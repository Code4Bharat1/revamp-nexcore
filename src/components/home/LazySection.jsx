"use client";
import { useRef, useState, useEffect } from "react";

/**
 * LazySection – renders children only when the section scrolls into view.
 * Uses IntersectionObserver with a generous rootMargin so chunks start
 * downloading ~200px before the user actually reaches them.
 *
 * @param {string}  id        – section id (preserved for scroll-to-section nav)
 * @param {string}  className – optional extra classes
 * @param {number}  minHeight – placeholder min-height in px (default 384 = h-96)
 * @param {React.ReactNode} children
 */
const LazySection = ({ id, className = "", minHeight = 384, children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        <div
          style={{ minHeight }}
          className="w-full bg-gray-50/50"
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default LazySection;
