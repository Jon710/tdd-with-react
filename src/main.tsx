import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Carousel from "./Carousel.tsx";

const slides = [
  {
    imgUrl: "https://example.com/image1.jpg",
    description: "Image 1",
    attribution: "John Doe",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Carousel slides={slides} />
  </StrictMode>
);
