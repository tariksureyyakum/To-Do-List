import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {todo.task}
      <Button 
        variant="danger"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
