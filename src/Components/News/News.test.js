import { render, screen } from "@testing-library/react";
import News from "./News";
import { fakeAPIResults } from "../../utilities/testingData";

describe("News", () => {
  it("should have a News header", () => {
    render(<News breakingNews={fakeAPIResults} />);

    const title = screen.getByText("News");

    expect(title).toBeInTheDocument();
});

  it("Should only render Article components with provided images", () => {
    render(<News breakingNews={fakeAPIResults} />);

    const article1 = document.getElementById(159070);
    const article2 = document.getElementById(159071);
    const article3 = document.getElementById(159072);

    expect(article1).toBeInTheDocument(); 
    expect(article2).not.toBeInTheDocument();
    expect(article3).not.toBeInTheDocument();
})
})