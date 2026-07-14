import React from "react";

const SkillCard = ({
  title = "Unknown Skill",
  level = "Beginner",
  color = "bg-gray-100 text-gray-700",
  experience = "1 Month",
}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${color}`}
        >
          {level}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mt-3">{title}</h3>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-xs text-gray-500">
        <span>Experience:</span>
        <span className="font-semibold text-gray-700">{experience}</span>
      </div>
    </div>
  );
};

export default SkillCard;
