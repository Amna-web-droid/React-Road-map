import React from 'react';
import SkillCard from './SkillCard';

const SkillList = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">My Developer Skills</h2>
        <p className="text-gray-500 mt-2">Dynamic components powered by React Props</p>
      </div>

      {/* Tailwind Grid System for responsive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Card 1: React */}
        <SkillCard 
          title="React.js" 
          level="Intermediate" 
          color="bg-blue-50 text-blue-600 border border-blue-200" 
          experience="6 Months"
        />

        {/* Card 2: Tailwind CSS */}
        <SkillCard 
          title="Tailwind CSS" 
          level="Advanced" 
          color="bg-teal-50 text-teal-600 border border-teal-200" 
          experience="1 Year"
        />

        {/* Card 3: JavaScript */}
        <SkillCard 
          title="JavaScript (ES6+)" 
          level="Advanced" 
          color="bg-yellow-50 text-yellow-700 border border-yellow-200" 
          experience="1.5 Years"
        />

        {/* Card 4: Default fallback card (Isme hum koi prop nahi bhej rahe test karne ke liye) */}
        <SkillCard />

      </div>
    </div>
  );
};

export default SkillList;