import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

test("renders input field and add button", () => {
  render(<AddTodoForm onAddTodo={() => {}} />);
  
  expect(screen.getByPlaceholderText("Enter a todo...")).toBeInTheDocument();
  expect(screen.getByText("Add Todo")).toBeInTheDocument();
});

test("calls onAddTodo with input value when form is submitted", () => {
  const mockAddTodo = vi.fn();  // Use Vitest's mock function
  render(<AddTodoForm onAddTodo={mockAddTodo} />);

  const input = screen.getByPlaceholderText("Enter a todo...");
  const button = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);

  expect(mockAddTodo).toHaveBeenCalledWith("Test Todo");
});
