import React, { useState } from 'react';

const Calculator = () => {
  // States to store input values
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  
  // State to store the calculated result
  const [result, setResult] = useState(null);

  // Event Handlers for calculations
  const handleAddition = (e) => {
    // e.target batata hai kis element ne event trigger kiya
    console.log("Event triggered by:", e.target);
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero! ❌");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mt-10">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
        🧮 Simple Calculator
      </h2>

      {/* Inputs Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            First Number
          </label>
          <input 
            type="number" 
            value={num1}
            // onChange Event: Input change hone par state update hogi
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Second Number
          </label>
          <input 
            type="number" 
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Operators Grid (onClick Events) */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <button 
          onClick={handleAddition}
          className="py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-lg rounded-xl active:scale-95 transition-all"
        >
          +
        </button>
        <button 
          onClick={handleSubtraction}
          className="py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-lg rounded-xl active:scale-95 transition-all"
        >
          -
        </button>
        <button 
          onClick={handleMultiplication}
          className="py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-lg rounded-xl active:scale-95 transition-all"
        >
          ×
        </button>
        <button 
          onClick={handleDivision}
          className="py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-lg rounded-xl active:scale-95 transition-all"
        >
          ÷
        </button>
      </div>

      {/* Clear Button */}
      <button 
        onClick={handleClear}
        className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-lg active:scale-95 transition-all text-sm mb-6"
      >
        Clear All
      </button>

      {/* Result Display Section */}
      {result !== null && (
        <div className="bg-indigo-600 rounded-xl p-4 text-center shadow-md shadow-indigo-100">
          <span className="block text-indigo-200 text-xs font-semibold uppercase tracking-wider">
            Calculated Result
          </span>
          <span className="block text-white text-2xl font-black mt-1">
            {result}
          </span>
        </div>
      )}
    </div>
  );
};

export default Calculator;