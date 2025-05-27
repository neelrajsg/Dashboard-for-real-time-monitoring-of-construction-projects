import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodoStatus, deleteTodo } from '../services/todoService';

const Todos = () => {
  const [todos, setTodos] = useState([]); // ✅ initialize as []

  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todosData = await getTodos();
    setTodos(todosData || []); // ✅ fallback to empty array if API returns null
  };

  const handleAddTodo = async () => {
    await createTodo(newTodo);
    setNewTodo({ title: '', description: '' });
    fetchTodos();
  };

  const handleComplete = async (id) => {
    await updateTodoStatus(id, 'completed');
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My To-Dos</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mr-2"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mr-2"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <div>
              <strong>{todo.title}</strong> - {todo.description} [{todo.status}]
            </div>
            <div>
              {todo.status !== 'completed' && (
                <button className="bg-green-500 text-white p-1 mr-2" onClick={() => handleComplete(todo.id)}>
                  Complete
                </button>
              )}
              <button className="bg-red-500 text-white p-1" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
