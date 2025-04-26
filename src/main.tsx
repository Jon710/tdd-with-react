import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExampleCarousel from "./ExampleCarousel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExampleCarousel />
  </StrictMode>
);
