import { render, screen } from "@testing-library/react";
import CarouselButton from "./CarouselButton";

describe("CarouselButton component", () => {
  it("renders a button", () => {
    const text = "Click me";
    const className = "my-carousel-button";
    const dataAction = "prev";
    render(
      <CarouselButton className={className} data-action={dataAction}>
        {text}
      </CarouselButton>
    );
    expect(screen.getByRole("button")).toHaveTextContent(text);
    expect(screen.getByRole("button")).toHaveClass(className);
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-action",
      dataAction
    );
  });
});
