import { type RefObject } from "react";

export function useScrollToTop<T extends HTMLElement>(ref: RefObject<T | null>) {
    const scrollToElement = () => {
        if (ref.current) {
            const elementPosition = ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return {
        scrollToElement
    }
}