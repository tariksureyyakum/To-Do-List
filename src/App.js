import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div className="card">
        <div className="card-header">
          <h2>My To-Do List</h2>
        </div>
        <div className="card-body">
          <TodoList /> {/* Burada sadece TodoList bileşenini render ediyoruz */}
        </div>
      </div>
    </div>
  );
}

export default App;
