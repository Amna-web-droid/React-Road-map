import React from 'react';
import QuoteGenerator from './components/10-fetching-data-api/QuoteGenerator';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <QuoteGenerator />
    </div>
  );
};

export default App;