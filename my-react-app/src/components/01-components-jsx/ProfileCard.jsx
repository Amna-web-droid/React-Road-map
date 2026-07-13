import React from 'react';

// Sub-component 1: Profile Image
const ProfileImage = () => {
  return (
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXRaHQqMfC9PQBrx9ydGxOWTJ8VdwHs4QwVJv0GN9lw&s=10" 
      alt="Profile" 
      className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-indigo-100 shadow-sm"
    />
  );
};

// Sub-component 2: Profile Info
const ProfileInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-gray-800">Amna Mushtaq</h2>
      <h4 className="text-sm font-medium text-indigo-600 mt-1">Web Developer</h4>
      <p className="text-gray-500 text-sm mt-3 px-2 leading-relaxed">
        I am a passionate web developer learning React from basic to advanced levels. 
        Building daily projects with Tailwind CSS to master the front-end ecosystem!
      </p>
    </div>
  );
};

// Sub-component 3: Skills Tags (Aapka Challenge 🎯)
const SkillsTags = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full">HTML5</span>
      <span className="px-3 py-1 text-xs font-semibold bg-green-50 text-green-600 rounded-full">CSS3</span>
      <span className="px-3 py-1 text-xs font-semibold bg-yellow-50 text-yellow-700 rounded-full">JavaScript</span>
      <span className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full">React</span>
      <span className="px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-600 rounded-full">Tailwind</span>
    </div>
  );
};

// Main Component (Nested Components structure)
const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <ProfileImage />
      <ProfileInfo />
      <SkillsTags />
    </div>
  );
};

export default ProfileCard;