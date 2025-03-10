import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

test('adds a new todo', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm onAdd={mockAddTodo} />);

  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(mockAddTodo).toHaveBeenCalledWith('New Todo');
});
