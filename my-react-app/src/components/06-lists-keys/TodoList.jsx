import React, { useState } from 'react';

const TodoList = () => {
  // 1. States
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master Components & JSX 📦' },
    { id: 2, text: 'Practice Props Destructuring 🃏' },
    { id: 3, text: 'Build state logic smoothly 🧠' }
  ]);
  const [newTodo, setNewTodo] = useState('');

  // 2. Add Todo Handler
  const handleAddTodo = (e) => {
    e.preventDefault(); // Form submit par page refresh roknay ke liye
    
    if (!newTodo.trim()) return; // Agar input khali hai to kuch na karein

    // Naya todo object banaya unique ID ke sath
    const newTodoItem = {
      id: Date.now(), // Date.now() har dafa unique number deta hai ID ke liye
      text: newTodo
    };

    // Purane todos mein naya item jorh diya
    setTodos([...todos, newTodoItem]);
    setNewTodo(''); // Input clear kar diya
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-black text-gray-800 text-center mb-2">📝 My React Streak</h2>
      <p className="text-xs text-gray-400 text-center mb-6">Phase 1 Foundations: Final Day Challenge</p>

      {/* Form Input Section */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new milestone..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl active:scale-95 transition-all shadow-md shadow-indigo-100"
        >
          Add Task
        </button>
      </form>

      {/* --- LIST RENDERING SECTION (.map) --- */}
      {todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((todo) => (
            // Hamesha parent element par unique key lagani hai
            <li 
              key={todo.id} 
              className="flex items-center bg-gray-50 border border-gray-150 p-3.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-indigo-50/30 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 group-hover:scale-125 transition-all"></span>
              {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        // Conditional Rendering check agar koi todo na bacha ho
        <div className="text-center py-6 text-gray-400 text-xs italic bg-gray-50 rounded-xl border border-dashed border-gray-200">
          🎉 All tasks completed! Add some new milestones.
        </div>
      )}

      {/* Progress Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
        <span>Total Milestones: {todos.length}</span>
        <span className="text-indigo-500 font-bold">Continuous Learning ⚡</span>
      </div>

    </div>
  );
};

export default TodoList;