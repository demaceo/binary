import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    it("should display the correct date and time", () => {
        render(<Header />);

        const todaysDate = Date().toLocaleString().slice(0, 10);
        const date = screen.getByText(todaysDate);
        const time = document.getElementById("time");

        expect(time).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
})