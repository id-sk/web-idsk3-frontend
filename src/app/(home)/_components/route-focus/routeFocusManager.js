"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteFocusManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (document.activeElement && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    document.body.setAttribute("tabindex", "-1");
    document.body.focus({ preventScroll: true });
    document.body.removeAttribute("tabindex");

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}