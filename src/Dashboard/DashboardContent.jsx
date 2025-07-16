import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DashboardContent = () => {
  const data = useOutletContext();
  if (!data) return <p >Loading...</p>;

  const { certificates, projects, experience, interview_history, ratings, achievements } = data;

  const totalCertificates = certificates.length;
  const totalProjects = projects.length;
  const totalExperiences = experience.length;
  const totalInterviews = interview_history.length;

//   progress ki % calculate

  const progressPercent = Math.min(
    Math.round((totalCertificates + totalProjects + totalExperiences + totalInterviews) / 12 * 100),
    100
  );


  const ratingLabels = ['React', 'DSA', 'Communication', 'Leadership'];
  const ratingData = {
    labels: ratingLabels,
    datasets: [
      {
        label: 'Self Rating',
        data: [
          ratings.self.react,
          ratings.self.dsa,
          ratings.self.communication,
          ratings.self.leadership,
        ],
        backgroundColor: 'rgba(31, 31, 39, 0.7)',
      },
      {
        label: 'Mentor Rating',
        data: [
          ratings.mentor.react,
          ratings.mentor.dsa,
          ratings.mentor.communication,
          ratings.mentor.leadership,
        ],
        backgroundColor: 'rgba(191, 205, 201, 0.7)',
      },
    ],
  };

  return (
    <>
    {/* for responsive wensite where grid is css container and grid cols 1 is mobile or cols 2 for medium */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">  
        {/* for progress */}
        <div className="bg-white p-4 rounded-xl shadow shadow border-l-4 border-blue-600">
          <h4 className="text-sm text-gray-500 mb-1">Progress</h4>
          {/* for progrss line */}
            <div
              className="bg-blue-600 h-3 rounded"
              style={{ width: `${progressPercent}%` }}
            ></div>
          <p className="text-xs text-right mt-1 text-gray-500">{progressPercent}% completed</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center shadow border-l-4 border-blue-600">
          <p className="text-black text-sm">Certificates</p>
          <p className="text-2xl font-semibold text-black">{totalCertificates}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center shadow border-l-4 border-blue-600">
          <p className="text-black text-sm">Projects</p>
          <p className="text-2xl font-semibold text-black">{totalProjects}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center shadow border-l-4 border-blue-600">
          <p className="text-black text-sm">Interviews</p>
          <p className="text-2xl font-semibold text-black">{totalInterviews}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow shadow border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-black mb-2">Achievements</h3>
          <ul >
            {achievements.map((a, i) => (
              <li key={i}>
                <strong>{a.title}:</strong> {a.description} ({a.date})
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow shadow border-l-4 border-blue-600">
          <h3 className="font-semibold text-Black pb-4">Ratings (Self vs Mentor)</h3>
          {/* For Bar  where data is defined at upper side */}
          <Bar data={ratingData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-600 pl-6 ">
        <h3 className="text-xl font-semibold text-black mb-4">Experience</h3>
        {experience.map((exp, i) => (
          <div key={i}>
            <div className="absolute -left-6 w-3 h-3 bg-blue-600 rounded-full border-4 border-blue"></div>
            <h4 className="text-lg font-semibold text-gray-800">
              {exp.role} @ {exp.company}
            </h4>
            <p className="text-sm text-gray-600">{exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardContent;
