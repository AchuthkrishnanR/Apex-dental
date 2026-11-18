import React from "react";
import { createRoot } from "react-dom/client";
import AccordionGallery from "./components/AccordionGallery";
import { serviceItems } from "./services";

const servicesMount = document.getElementById("service-gallery-root");

if (servicesMount) {
  createRoot(servicesMount).render(
    <AccordionGallery
      items={serviceItems}
      defaultIndex={0}
      accentColor="#d6f19b"
      overlayColor="#0b110f"
      textColor="#fffdf6"
      height={440}
      gap={12}
      radius={18}
      expandRatio={0.5}
      trigger="hover"
      parallax={0.22}
      tilt={3}
      grayscale={false}
    />,
  );
}
