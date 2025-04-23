import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel component", () => {
  it("renders a div element", () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  it("renders first lide by default", () => {
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
    ];

    render(<Carousel slides={slides} />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", slides[0].imgUrl);
  });
});
