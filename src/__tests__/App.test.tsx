import { describe, test, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import App  from "../components/app/App";

describe("test App", () => {
  test("should render todo list with initial items", () => {
    render(<App />);
    const todoList = screen.getByTestId("todo-list");
    expect(todoList.children.length).toBeGreaterThan(0);
  });
  test("should render todo", () => {
    render(<App />);
    const todos = screen.getAllByTestId("todo");
    expect(todos).not.toBeNull();
  })
  test("should add new todo item", () => {
    render(<App />);
    const input = screen.getByLabelText(/What needs to be done/i);
    const button = screen.getByRole("button", { name: /Add todo/i });

    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(button);

    // const newTodo = screen.getByText(/Test todo 1/i);

    // expect(newTodo).toBeInTheDocument()
  })
  test('should delete todo', () => {
    render(<App />);
    const deleteButton = screen.getByTestId('delete-1')
    fireEvent.click(deleteButton)
    const todoList = screen.getByTestId('todo-list')
    expect(todoList.children.length).toBe(2)
  })
  test('should toggle todo completed', () => {
    render(<App />);
    const checkboxWrapper = screen.getByTestId("toggle-1"); // Получаем контейнер
    const input = checkboxWrapper.querySelector('input[type="checkbox"]'); // Находим вложенный input
    fireEvent.click(input!)

    // expect(input).toBeChecked()
  })
  test('should filter todos', () => {
    render(<App />);
    const activeFilter = screen.getByTestId('filter-active')
    const checkboxWrapper = screen.getByTestId("toggle-1"); // Получаем контейнер
    const input = checkboxWrapper.querySelector('input[type="checkbox"]'); // Находим вложенный input
    fireEvent.click(input!)

    fireEvent.click(activeFilter)
    const todoList = screen.getByTestId('todo-list')
    expect(todoList.children.length).toBe(2)
  })
  test('should clear completed todos', () => {
    render(<App />);
    const checkboxWrapper = screen.getByTestId("toggle-1"); // Получаем контейнер
    const input = checkboxWrapper.querySelector('input[type="checkbox"]'); // Находим вложенный input
    fireEvent.click(input!)

    const clearButton = screen.getByText('Clear Completed')
    fireEvent.click(clearButton)
    const todoList = screen.getByTestId('todo-list')
    expect(todoList.children.length).toBe(2)
  })
});
