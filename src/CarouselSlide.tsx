import { ComponentPropsWithRef, ReactNode } from "react";
import styled from "styled-components";

const DEFAULT_IMG_HEIGHT = "500px";

export type CarouselSlideProps = {
  imgUrl?: string;
  /** @default "500px" */
  imgHeight?: string | number;
  description?: ReactNode;
  attribution?: ReactNode;
} & ComponentPropsWithRef<"figure">;

type ImgComponentProps = {
  $height?: CarouselSlideProps["imgHeight"];
};

const ScaledImg = styled.img<ImgComponentProps>`
  object-fit: cover;
  width: 100%;
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height};
`;

function CarouselSlide({
  imgUrl,
  imgHeight = DEFAULT_IMG_HEIGHT,
  description,
  attribution,
  ...rest
}: CarouselSlideProps) {
  return (
    <figure {...rest}>
      <ScaledImg src={imgUrl} $height={imgHeight} />
      <figcaption data-testid="caption">
        <strong>{description}</strong> {attribution}
      </figcaption>
    </figure>
  );
}

export default CarouselSlide;
