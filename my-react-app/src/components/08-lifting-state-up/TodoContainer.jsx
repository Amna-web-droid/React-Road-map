import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoContainer = () => {
  // LIFTED STATE: Held in Parent
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Props & State', completed: true },
    { id: 2, text: 'Master Lifting State Up concept', completed: false }
  ]);

  // Handler 1: Add New Todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  // Handler 2: Toggle Completed Status
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Handler 3: Delete Todo
  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-gray-800">⚡ Advanced Todo Manager</h2>
        <p className="text-xs text-gray-400 mt-1">Concept 08: Lifting State Up Architecture</p>
      </div>

      {/* Child 1: Input Component */}
      <TodoInput onAddTodo={handleAddTodo} />

      {/* Child 2: List Section */}
      <div className="space-y-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <div className="text-center py-6 text-gray-400 text-xs italic bg-gray-50 rounded-xl border border-dashed border-gray-200">
            🎉 All tasks cleared! Time to relax.
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
        <span>Completed: {todos.filter(t => t.completed).length} / {todos.length}</span>
        <span className="text-indigo-600 font-bold">Day 08 Milestone 🚀</span>
      </div>
    </div>
  );
};

export default TodoContainer;