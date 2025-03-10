import React from "react"; 
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";


test("renders Todo List heading", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("renders initial todo items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Master Testing")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  // Click to toggle completion
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  // Click again to undo completion
  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  
  // Find and click delete button
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  // Ensure "Learn React" is removed
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
