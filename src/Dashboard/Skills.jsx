import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const categoryIcons = {
  languages: "📝",
  frontend: "🎨",
  backend: "🧠",
  database: "💾",
  tools: "🛠️"
};

const Skills = () => {
  const data = useOutletContext();
  const { technical_skills } = data;

  if (!technical_skills) return <p>Loading technical skills...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(technical_skills).map(([category, skills], index) => {
          const chartData = {
            labels: skills,
            datasets: [
              {
                label: `${category} Skills`,
                data: Array(skills.length).fill(100 / skills.length),
                backgroundColor: [
                  '#60A5FA', '#FBBF24', '#34D399', '#F87171', '#A78BFA',
                  '#FB923C', '#F472B6', '#4ADE80', '#C084FC', '#FCD34D',
                  '#E879F9', '#6EE7B7', '#FCA5A5'
                ].slice(0, skills.length),
                borderWidth: 1
              }
            ]
          };

          return (
            <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-md font-semibold text-center text-blue-600 mb-2 capitalize">
                <span className="text-xl mr-2">{categoryIcons[category] || "📌"}</span>
                {category}
              </h3>
              <div className="w-36 h-36 mx-auto">
                <Pie data={chartData} options={{
                  responsive: false,
                  plugins: { legend: { display: false } }
                }} width={150} height={150} />
              </div>
              <div className="flex flex-wrap justify-center mt-3 gap-1">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
