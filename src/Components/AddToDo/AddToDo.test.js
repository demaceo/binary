import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddToDo from "./AddToDo";

describe("AddToDo", () => {
    const mockAddToDo = jest.fn();

    it("Should render AddToDo header", () => {
    render(<AddToDo addToDo={mockAddToDo} />);

    const addTitle = screen.getByText('Add To-Do');

    expect(addTitle).toBeInTheDocument();
    });

    it("Should render input form", () => {
        render(<AddToDo addToDo={mockAddToDo} />);

        const inputField = document.getElementById("textarea");
        const dropdownMenu = document.getElementById("exampleForm.ControlSelect1");

        expect(inputField).toBeInTheDocument();
        expect(dropdownMenu).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
