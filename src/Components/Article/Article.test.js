import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import News from '../News/News.js';
import userEvent from "@testing-library/user-event";
import { fakeAPIResults } from "../../utilities/testingData";

describe("Article", () => {
    window.open = jest.fn();
    it('should have an id, image, title, and content', () => {
        render(<News breakingNews={fakeAPIResults} />);
        const article = document.getElementById(159070);
        const articleImg = screen.getByRole("img");
        const articleTitle = screen.getByRole("heading", {name: "title"})
        const articleContent = screen.getByText("Midnight' s here.");

        expect(article).toBeInTheDocument();
        expect(articleTitle).toBeInTheDocument();  
        expect(articleContent).toBeInTheDocument();
        expect(articleImg).toBeInTheDocument();
    });

    it("Should open new window when double clicking an Article component", () => {
        render(<News breakingNews={fakeAPIResults} />);

        const article = document.getElementById(159070);
        expect(article).toBeInTheDocument();

        userEvent.dblClick(article);
        expect(window.open).toHaveBeenCalled();
    });
})