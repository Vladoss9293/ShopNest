import { useCallback, useState } from "react";

/**
 * Hook for detecting outer DOM element using Intersection Observer.
 * 
 * 
 * @returns 
 *   - ref: callback ref to set the observed element
 *   - isVisible: boolean indicating whether the element is visible (based on threshold),
 *     false element is visible or if true element is not visible
 */

export function useElementVisibility() {
  const [isTopHidden, setIsTopHidden] = useState(true);
  
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopHidden(!entry.isIntersecting);
      },
      {
        threshold: 0.5
      }
    );
    
    observer.observe(node);

    return () => {
      observer.disconnect();
    }
  }, [])

  return {
    ref,
    isTopHidden,
  };
}