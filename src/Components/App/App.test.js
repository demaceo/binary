import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have a home page", () => {
    render(<App />);
    const mainHeader = document.getElementById("date");
    const newsHeader = screen.getByText('News');
    const navHome = screen.getByRole("link", { name: 'Home' });
    const navAdd = screen.getByRole("link", { name: 'Add' });
    const navToDos = screen.getByRole("link", { name: 'To-Dos' });

    expect(mainHeader).toBeInTheDocument()
    expect(newsHeader).toBeInTheDocument();
    expect(navHome).toBeInTheDocument();
    expect(navAdd).toBeInTheDocument();
    expect(navToDos).toBeInTheDocument();
  });
});




