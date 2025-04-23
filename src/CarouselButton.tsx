import { ComponentPropsWithRef } from "react";

function CarouselButton(props: ComponentPropsWithRef<"button">) {
  return <button {...props} />;
}

export default CarouselButton;
