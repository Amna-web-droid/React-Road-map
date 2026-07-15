import React, { useState } from "react";

const CounterLike = () => {
  // Sub-concept 1: Counter State
  const [count, setCount] = useState(0);

  // Sub-concept 2: Like State
  const [isLiked, setIsLiked] = useState(false);

  // 🎯 CHALLENGE STATE: Theme State (false = Light, true = Dark)
  const [isDark, setIsDark] = useState(false);

  // Counter Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  // Like Handler
  const toggleLike = () => setIsLiked(!isLiked);

  // 🎯 Theme Toggle Handler
  const toggleTheme = () => setIsDark(!isDark);

  return (
    // DYNAMIC CARD CONTAINER: Agar isDark true hai to dark colors, warna light colors apply honge
    <div
      className={`max-w-md mx-auto rounded-2xl shadow-md p-8 border transition-all duration-300 mt-10 ${
        isDark
          ? "bg-gray-900 text-white border-gray-800 shadow-slate-950/50"
          : "bg-white text-gray-800 border-gray-100 shadow-md"
      }`}
    >
      {/* 🎯 THEME TOGGLE BUTTON */}
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleTheme}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 ${
            isDark
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <span>{isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
        </button>
      </div>

      {/* SECTION 1: Counter Project */}
      <div
        className={`text-center pb-6 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}
      >
        <h2
          className={`text-xl font-bold mb-2 ${isDark ? "text-gray-100" : "text-gray-800"}`}
        >
          🔢 Simple Counter
        </h2>
        <div className="text-5xl font-extrabold text-indigo-500 my-4">
          {count}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={decrement}
            className={`px-4 py-2 font-semibold rounded-lg active:scale-95 transition-all text-sm ${
              isDark
                ? "bg-red-950/40 text-red-400 hover:bg-red-950/60"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            }`}
          >
            Decrease
          </button>
          <button
            onClick={reset}
            className={`px-4 py-2 font-semibold rounded-lg active:scale-95 transition-all text-sm ${
              isDark
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Reset
          </button>
          <button
            onClick={increment}
            className={`px-4 py-2 font-semibold rounded-lg active:scale-95 transition-all text-sm ${
              isDark
                ? "bg-emerald-950/40 text-emerald-400 hover:bg-emerald-950/60"
                : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            }`}
          >
            Increase
          </button>
        </div>
      </div>

      {/* SECTION 2: Like Button Project */}
      <div className="text-center pt-6">
        <h2
          className={`text-xl font-bold mb-4 ${isDark ? "text-gray-100" : "text-gray-800"}`}
        >
          ❤️ Like Button
        </h2>

        <button
          onClick={toggleLike}
          className={`flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-full font-bold transition-all active:scale-90 ${
            isLiked
              ? "bg-red-500 text-white shadow-lg shadow-red-200/50"
              : isDark
                ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          <span className="text-xl">{isLiked ? "❤️" : "🤍"}</span>
          <span>{isLiked ? "Liked!" : "Like Post"}</span>
        </button>

        <p
          className={`text-xs mt-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}
        >
          {isLiked
            ? "Aapne is post ko pasand kiya hai."
            : "Abhi tak koi like nahi mila."}
        </p>
      </div>
    </div>
  );
};

export default CounterLike;
