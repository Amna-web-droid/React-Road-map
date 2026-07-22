import React, { useState, useEffect } from 'react';

const DigitalWatch = () => {
  // 1. STATE: Holds current Date object
  const [time, setTime] = useState(new Date());

  // 2. STATE: Toggle 12-hour or 24-hour format
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  // 3. EFFECT: Timer interval to update time every second
  useEffect(() => {
    // Timer setup
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // CLEANUP FUNCTION: Timer clear jab component unmount ya destroy ho
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty array = Runs only ONCE on mount

  // Time Formatting Logic
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12; // Convert 0 to 12
    }

    const formattedHours = hours.toString().padStart(2, '0');

    return { formattedHours, minutes, seconds, ampm };
  };

  const { formattedHours, minutes, seconds, ampm } = formatTime();

  // Date Formatting Logic
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gray-900 text-white rounded-3xl shadow-2xl border border-gray-800 text-center">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
          Concept 09: useEffect Side Effects
        </span>
        <h2 className="text-2xl font-black mt-3 text-gray-100">Live Digital Clock</h2>
      </div>

      {/* WATCH DISPLAY BOX */}
      <div className="bg-black/60 p-6 rounded-2xl border border-gray-800 my-6 shadow-inner">
        <div className="flex items-center justify-center gap-2 font-mono text-4xl sm:text-5xl font-black text-emerald-400 tracking-wider">
          <span>{formattedHours}</span>
          <span className="animate-pulse text-emerald-600">:</span>
          <span>{minutes}</span>
          <span className="animate-pulse text-emerald-600">:</span>
          <span>{seconds}</span>
          {!is24HourFormat && (
            <span className="text-sm font-bold text-emerald-600 ml-1 self-end mb-2">
              {ampm}
            </span>
          )}
        </div>

        {/* Dynamic Date */}
        <p className="text-xs text-gray-400 mt-4 font-medium tracking-wide">
          📅 {formattedDate}
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-between items-center pt-2">
        <button
          onClick={() => setIs24HourFormat(!is24HourFormat)}
          className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-xs font-bold rounded-xl transition-all border border-gray-700 active:scale-95"
        >
          Format: {is24HourFormat ? 'Switch to 12-Hour (AM/PM)' : 'Switch to 24-Hour'}
        </button>
      </div>
    </div>
  );
};

export default DigitalWatch;