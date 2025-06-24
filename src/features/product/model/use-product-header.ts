import React, { useState } from "react";

export function useProductHeaderVisibility() {
  const [isTopHidden, setIsTopHidden] = useState(true);

  const cursorRef: React.RefCallback<HTMLDivElement> = React.useCallback(
    (el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsTopHidden(false);
          } else {
            setIsTopHidden(true);
          }
        },
        {
          threshold: 0.5,
        }
      );

      if (el) {
        observer.observe(el);

        return () => observer.disconnect();
      }
    },
    []
  );

  return {
    cursorRef,
    isTopHidden,
  };
}
