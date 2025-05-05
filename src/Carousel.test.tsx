import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "./Carousel";
import slides from "./slides";

describe("Carousel component", () => {
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

  it("renders a div element", () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  it("renders first slide by default", () => {
    render(<Carousel slides={slides} />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", slides[0].imgUrl);
  });

  it("advances to next slide when Next btn is clicked", async () => {
    render(<Carousel slides={slides} />);
    const img = screen.getByRole("img");
    const nextButton = screen.getByTestId("next-button");
    const user = userEvent.setup();

    await user.click(nextButton);
    expect(img).toHaveAttribute("src", slides[1].imgUrl);
    await user.click(nextButton);
    expect(img).toHaveAttribute("src", slides[2].imgUrl);
    await user.click(nextButton);
    expect(img).toHaveAttribute("src", slides[0].imgUrl);
  });

  it("reverses the slide when Prev btn is clicked", async () => {
    render(<Carousel slides={slides} />);
    const img = screen.getByRole("img");
    const prevButton = screen.getByTestId("prev-button");
    const user = userEvent.setup();

    await user.click(prevButton);
    expect(img).toHaveAttribute("src", slides[2].imgUrl);
    await user.click(prevButton);
    expect(img).toHaveAttribute("src", slides[1].imgUrl);
    await user.click(prevButton);
    expect(img).toHaveAttribute("src", slides[0].imgUrl);
  });
});

describe("with controlled slideIndex", () => {
  const onSlideIndexChange = vi.fn();
  const renderCarouselWithSlideIndex = () =>
    render(
      <Carousel
        slides={slides}
        slideIndex={1}
        onSlideIndexChange={onSlideIndexChange}
      />
    );

  beforeEach(() => onSlideIndexChange.mockReset());

  it("shows the slide corresponding to slideIndex", () => {
    renderCarouselWithSlideIndex();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", slides[1].imgUrl);
  });

  it("calls onSlideIndexChange when Prev is clicked", async () => {
    renderCarouselWithSlideIndex();
    const img = screen.getByRole("img");
    const prevButton = screen.getByTestId("prev-button");
    const user = userEvent.setup();

    await user.click(prevButton);
    expect(img).toHaveAttribute("src", slides[1].imgUrl);
    expect(onSlideIndexChange).toHaveBeenCalledWith(0);
  });

  it("calls onSlideIndexChange when Next is clicked", async () => {
    renderCarouselWithSlideIndex();
    const img = screen.getByRole("img");
    const prevButton = screen.getByTestId("next-button");
    const user = userEvent.setup();

    await user.click(prevButton);
    expect(img).toHaveAttribute("src", slides[1].imgUrl);
    expect(onSlideIndexChange).toHaveBeenCalledWith(2);
  });
});
