import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error('Failed to load quote');
      }
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError('Unable to retrieve today’s thought.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="max-w-xl mx-auto my-12 p-8 sm:p-12 bg-white rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-zinc-900 transition-all">
      
      {/* Editorial Header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-100">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-500">
            Daily Thought • Concept 10
          </span>
        </div>

        <span className="text-xs font-mono text-zinc-400">
          DummyJSON API
        </span>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[160px] flex flex-col justify-center">
        
        {/* State 1: Loading */}
        {loading && (
          <div className="py-8 flex items-center justify-center gap-3 text-zinc-400">
            <span className="w-4 h-4 border-2 border-zinc-300 border-t-zinc-800 rounded-full animate-spin"></span>
            <span className="text-xs font-mono tracking-wide">Fetching thought...</span>
          </div>
        )}

        {/* State 2: Error */}
        {error && !loading && (
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
            <p className="text-xs font-medium text-zinc-600 mb-3">{error}</p>
            <button
              onClick={fetchQuote}
              className="text-xs font-semibold px-3 py-1.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all active:scale-95"
            >
              Try Again
            </button>
          </div>
        )}

        {/* State 3: Data */}
        {!loading && !error && quote && (
          <blockquote className="space-y-6">
            <p className="text-xl sm:text-2xl font-serif leading-relaxed text-zinc-800 tracking-normal italic">
              "{quote.quote}"
            </p>

            <footer className="flex items-center gap-3 pt-2">
              <span className="w-6 h-[1px] bg-zinc-300"></span>
              <cite className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 not-italic">
                {quote.author}
              </cite>
            </footer>
          </blockquote>
        )}

      </div>

      {/* Action Footer */}
      <div className="mt-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-xs text-zinc-400 font-mono">
          Phase 2 • Day 10
        </span>

        <button
          onClick={fetchQuote}
          disabled={loading}
          className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-300 text-white text-xs font-medium rounded-xl transition-all active:scale-95 shadow-sm flex items-center gap-2"
        >
          <span>New Thought</span>
          <span className="text-zinc-400">→</span>
        </button>
      </div>

    </div>
  );
};

export default QuoteGenerator;