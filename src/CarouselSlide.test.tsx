import { render, screen } from "@testing-library/react";
import CarouselSlide from "./CarouselSlide";

describe("CarouselSlide component", () => {
  it("matches the snapshot", () => {
    render(<CarouselSlide />);
    expect(screen.getByRole("figure")).toMatchSnapshot();
  });

  it("renders a figure element", () => {
    render(<CarouselSlide />);
    const figure = screen.getByRole("figure");
    const img = screen.getByRole("img");
    const figCaption = screen.getByTestId("caption");

    expect(figure).toContainElement(img);
    expect(figure).toContainElement(figCaption);
  });

  it("passes imgUrl thru to the <img>", () => {
    const imgUrl = "https://example.com/image.jpg";
    render(<CarouselSlide imgUrl={imgUrl} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imgUrl);
  });

  it("uses `description` and `attribution` as the caption", () => {
    const props = {
      description: "A beautiful image",
      attribution: "John Doe",
    };

    render(<CarouselSlide {...props} />);

    const figCaption = screen.getByTestId("caption");
    expect(figCaption).toHaveTextContent(
      `${props.description} ${props.attribution}`
    );
  });

  it("passes other props thru to the figure", () => {
    const props = { className: "my-slide", "data-test-name": "my slide" };

    render(<CarouselSlide {...props} />);

    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass(props.className);
    expect(figure).toHaveAttribute("data-test-name", props["data-test-name"]);
  });
});
