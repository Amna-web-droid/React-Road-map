import React from 'react';
import LoginToggle from './components/05-conditional-rendering/LoginToggle';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
        React Roadmap: Concept 05
      </h1>
      <p className="text-gray-500 mb-6">Conditional Rendering Workspace</p>
      <LoginToggle />
    </div>
  );
};

export default App;