import { ReactNode } from "react";
import CarouselSlide, { CarouselSlideProps } from "./CarouselSlide";
import CarouselButton from "./CarouselButton";
import { useSlideIndex } from "./useSlideIndex";

type Slide = {
  imgUrl?: string;
  description?: ReactNode;
  attribution?: ReactNode;
};

export type CarouselProps = {
  slides?: Slide[];
  defaultImgHeight?: CarouselSlideProps["imgHeight"];
};

function Carousel({ slides, defaultImgHeight }: CarouselProps) {
  const [slideIndex, decrementSlideIndex, incrementSlideIndex] =
    useSlideIndex(slides);

  return (
    <div data-testid="carousel">
      <CarouselSlide imgHeight={defaultImgHeight} {...slides?.[slideIndex]} />
      <CarouselButton data-testid="prev-button" onClick={decrementSlideIndex}>
        Prev
      </CarouselButton>
      <CarouselButton data-testid="next-button" onClick={incrementSlideIndex}>
        Next
      </CarouselButton>
    </div>
  );
}

export default Carousel;
