import { render, screen } from "@testing-library/react";
import ToDos from "./ToDos";
import { fakeToDos } from "../../utilities/testingData";

describe("ToDos", () => {
  it("Should render ToDos header", () => {
      render(<ToDos todos={fakeToDos} />);

      const toDosHeader = screen.getByText("To - Do's");

      expect(toDosHeader).toBeInTheDocument();
    });
    
  it("Should render the priorities container for to-dos", () => {
    render(<ToDos todos={fakeToDos} />);

    const container = document.getElementById("priority-container");

    expect(container).toBeInTheDocument();
  });
}); 