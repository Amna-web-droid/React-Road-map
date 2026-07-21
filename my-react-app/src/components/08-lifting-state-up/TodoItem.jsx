import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <div className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
      todo.completed ? 'bg-emerald-50/50 border-emerald-200' : 'bg-gray-50 border-gray-200'
    }`}>
      
      {/* Checkbox + Task Text */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
        />
        <span className={`text-sm font-medium ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}>
          {todo.text}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="text-xs text-red-500 hover:text-red-700 font-bold p-1 rounded hover:bg-red-50 transition-all"
        >
          🗑️ Delete
        </button>
      </div>

    </div>
  );
};

export default TodoItem;