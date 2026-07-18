import React from 'react';
import TodoList from './components/06-lists-keys/TodoList';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
        React Roadmap: Concept 06
      </h1>
      <TodoList />
    </div>
  );
};

export default App;