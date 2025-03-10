import React from "react";  
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("adds a new todo", () => {
  const mockAdd = jest.fn();
  render(<AddTodoForm onAdd={mockAdd} />);

  const input = screen.getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Todo" } });

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  expect(mockAdd).toHaveBeenCalledWith("New Todo");
});
