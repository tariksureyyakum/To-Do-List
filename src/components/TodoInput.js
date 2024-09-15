import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text); // `onAdd` burada bir fonksiyon olarak çağrılıyor
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Control
        type="text"
        placeholder="Add a new To-Do"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="centered-button">
        <Button type="submit" variant="primary" className="btn-large mt-2">
          Add
        </Button>
      </div>
    </Form>
  );
};

export default TodoInput;
