import React from 'react';
import TodoContainer from './components/08-lifting-state-up/TodoContainer';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <TodoContainer />
    </div>
  );
};

export default App;