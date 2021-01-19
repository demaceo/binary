import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
    it("Should have Home, Add, ToDos links", () => {
        render(
            <MemoryRouter >
            <NavBar />
            </MemoryRouter>
        );

        const navHome = screen.getByText('Home');
        const navAdd = screen.getByText("Add");
        const navToDos = screen.getByText('To-Dos');

        expect(navAdd).toBeInTheDocument();
        expect(navHome).toBeInTheDocument();
        expect(navToDos).toBeInTheDocument();
    });
}) 