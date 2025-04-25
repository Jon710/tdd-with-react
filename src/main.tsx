import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Carousel from "./Carousel.tsx";

const slides = [
  {
    imgUrl: "https://example.com/image1.jpg",
    description: "Image 1",
    attribution: "John Doe",
  },
  {
    imgUrl: "https://example.com/image2.jpg",
    description: "Image 2",
    attribution: "Jane Doe",
  },
  {
    imgUrl: "https://example.com/image3.jpg",
    description: "Image 3",
    attribution: "Jane Tolo",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Carousel slides={slides} />
  </StrictMode>
);
