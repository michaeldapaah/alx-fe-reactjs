import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

test('adds a new todo', () => {
  const mockAddTodo = jest.fn(); // Mock function for onAdd
  render(<AddTodoForm onAdd={mockAddTodo} />);

  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');

  // Simulate user input and form submission
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Verify that onAdd was called with the correct value
  expect(mockAddTodo).toHaveBeenCalledWith('New Todo');
});
