"use client";

import { useEffect } from "react";

export function AOSInit() {
  useEffect(() => {
    // Importar AOS dinamicamente no cliente
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    });
  }, []);

  return null;
}
