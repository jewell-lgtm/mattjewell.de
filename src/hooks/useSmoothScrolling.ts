import { useRouter } from "next/router";
import { useEffect } from "react";

export function useSmoothScrolling() {
  const router = useRouter();

  useEffect(() => {
    const internalLinks = document.querySelectorAll("a[href^='#']");
    internalLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href") ?? "";
        const anchor = document.querySelector(href);
        anchor?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, [router.pathname]);
}