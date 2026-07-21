import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    // Parent se aaye hue function ko call kiya
    onAddTodo(text);
    setText(''); // input clear
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new master task..."
        className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl active:scale-95 transition-all shadow-md shadow-indigo-100"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;