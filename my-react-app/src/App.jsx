import React from 'react';
import CounterLike from './components/03-state-usestate/CounterLike';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        React Roadmap: Concept 03
      </h1>
      <CounterLike />
    </div>
  );
};

export default App;