import { ComponentPropsWithRef } from "react";

function CarouselSlide({
  imgUrl,
  description,
  attribution,
  ...rest
}: {
  imgUrl?: string;
  description?: string;
  attribution?: string;
} & ComponentPropsWithRef<"figure">) {
  return (
    <figure {...rest}>
      <img src={imgUrl} />
      <figcaption data-testid="caption">
        {description} {attribution}
      </figcaption>
    </figure>
  );
}

export default CarouselSlide;
