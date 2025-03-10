import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("adds a new todo", () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={mockAddTodo} />);

  const input = screen.getByPlaceholderText("Add a todo...");
  fireEvent.change(input, { target: { value: "New Todo" } });

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  expect(mockAddTodo).toHaveBeenCalledWith("New Todo");
});
