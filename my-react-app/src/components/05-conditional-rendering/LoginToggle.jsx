import React, { useState } from 'react';

const LoginToggle = () => {
  // State 1: Login status tracking
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // State 2: Premium secret message toggle
  const [showSecret, setShowSecret] = useState(false);

  // 🎯 State 3 (CHALLENGE): Notifications count (Initial value: 3)
  const [notifications, setNotifications] = useState(3);

  const handleLogin = () => setIsLoggedIn(true);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSecret(false); 
  };

  // 🎯 Handler to clear notifications
  const clearNotifications = () => {
    setNotifications(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 rounded-2xl shadow-xl border transition-all duration-300 bg-white border-gray-100">
      
      {/* SECTION 1: Heading Area */}
      <div className="text-center mb-6">
        {isLoggedIn ? (
          <div>
            <span className="text-4xl">👋</span>
            <h2 className="text-2xl font-black text-gray-800 mt-2">Welcome Back, Amna!</h2>
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="text-xs text-emerald-500 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                ● Online & Secure
              </span>
              
              {/* 🎯 CHALLENGE BADGE: Sirf tab dikhega jab notifications 0 se zyada hon */}
              {notifications > 0 && (
                <span className="text-xs text-red-500 font-bold bg-red-50 px-2.5 py-1 rounded-full animate-bounce">
                  🔔 {notifications} New
                </span>
              )}
            </div>
          </div>
        ) : (
          <div>
            <span className="text-4xl">🔒</span>
            <h2 className="text-2xl font-black text-gray-800 mt-2">Access Portal</h2>
            <p className="text-xs text-red-500 font-semibold bg-red-50 inline-block px-2.5 py-1 rounded-full mt-2">
              ● Please Login to Continue
            </p>
          </div>
        )}
      </div>

      <hr className="border-gray-100 mb-6" />

      {/* SECTION 2: Dashboard Content */}
      {isLoggedIn ? (
        // --- LOGGED IN USER VIEW ---
        <div className="space-y-4">
          
          {/* 🎯 CHALLENGE ACTION: Notification Clear Section */}
          {notifications > 0 ? (
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-amber-900 text-xs">Unread Alerts</h4>
                <p className="text-[10px] text-amber-700 mt-0.5">You have pending tasks to review.</p>
              </div>
              <button 
                onClick={clearNotifications}
                className="px-2.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[10px] rounded-md transition-all active:scale-95"
              >
                Mark as Read
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-500 font-medium">✨ All caught up! No new notifications.</p>
            </div>
          )}

          <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-950 text-sm">💻 Day 5 Roadmap Progress</h3>
            <p className="text-xs text-gray-600 mt-1">You are doing fantastic. Today you mastered Conditional Rendering!</p>
          </div>

          {/* Logical AND Secret Message */}
          <div>
            <button 
              onClick={() => setShowSecret(!showSecret)}
              className="w-full py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold rounded-lg transition-all active:scale-95 mb-3"
            >
              {showSecret ? "🙈 Hide Secret Tip" : "👁️ Reveal Secret Tip"}
            </button>

            {showSecret && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-xs text-yellow-800 font-medium">
                💡 **Pro Tip:** JSX mein jab aapko `else` ki zaroorat na ho, to `? :` ke bajaye hamesha `&&` use kiya karein. Code kafi clean lagta hai!
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl active:scale-95 transition-all text-sm shadow-md shadow-red-100"
          >
            Logout From Account
          </button>
        </div>
      ) : (
        // --- LOGGED OUT USER VIEW ---
        <div className="space-y-4">
          <p className="text-sm text-gray-500 text-center">
            Log in to access your personal workspace, roadmaps, and daily code streak statistics.
          </p>

          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Username / Email" 
              disabled
              className="w-full px-4 py-2 border border-gray-100 bg-gray-50 rounded-lg text-xs cursor-not-allowed"
              value="developer@react.com"
            />
            <input 
              type="password" 
              placeholder="Password" 
              disabled
              className="w-full px-4 py-2 border border-gray-100 bg-gray-50 rounded-lg text-xs cursor-not-allowed"
              value="••••••••••••"
            />
          </div>

          <button 
            onClick={handleLogin}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl active:scale-95 transition-all text-sm shadow-md shadow-indigo-100"
          >
            Sign In with React
          </button>
        </div>
      )}

    </div>
  );
};

export default LoginToggle;