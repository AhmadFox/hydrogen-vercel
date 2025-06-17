import { useEffect } from "react";

export function useNavigationDirection() {
  useEffect(() => {
    const handlePopState = () => {
      document.documentElement.setAttribute("data-nav", "pop");

      if ((document as any).startViewTransition) {
        (document as any).startViewTransition(() => {
          setTimeout(() => {
            document.documentElement.removeAttribute("data-nav");
          }, 500);
        });
      } else {
        setTimeout(() => {
          document.documentElement.removeAttribute("data-nav");
        }, 500);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
}
