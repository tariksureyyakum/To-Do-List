import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import TodoInput from './TodoInput';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TodoInput onAdd={handleAdd} />
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
            <span>{todo.text}</span>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
