import { useScrollToTop } from "@/shared/lib/hooks/use-scroll-to-top";
import { useRef, useState } from "react";
import type { ProductTabId } from "./constants";

export function useProductSectionsNavigation() {
  const refs = {
    aboutRef: useRef<HTMLDivElement>(null),
  };

  const scrollActions = {
    about: useScrollToTop(refs.aboutRef).scrollToElement,
  } 

  const [activeTab, setActiveTab] = useState<ProductTabId>('about');

  const handleTabClick = (id: ProductTabId) => {
    setActiveTab(id);

    const actions: Record<ProductTabId, () => void> = {
        'about': scrollActions.about,
        specs: function (): void {
            throw new Error("Function not implemented.");
        },
        reviews: function (): void {
            throw new Error("Function not implemented.");
        },
        accessories: function (): void {
            throw new Error("Function not implemented.");
        },
        services: function (): void {
            throw new Error("Function not implemented.");
        },
        availability: function (): void {
            throw new Error("Function not implemented.");
        }
    };

    actions[id]?.();
  };

  return {
    refs,
    handleTabClick,
    activeTab,
  };
}
