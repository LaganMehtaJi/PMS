import React from 'react';
import { useOutletContext } from 'react-router-dom';

const statusColors = {
  Selected: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  'Not Selected': 'bg-yellow-100 text-yellow-800',
};

const Interview = () => {
  const { interview_history } = useOutletContext();

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Interview History</h2>
      <div className="space-y-4">
        {interview_history.map((interview, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col md:flex-row md:justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{interview.company}</h3>
              <p className="text-sm text-gray-600">
                Role: <span className="font-medium">{interview.role}</span>
              </p>
              <p className="text-sm text-gray-600">
                Stage: <span className="font-medium">{interview.stage}</span>
              </p>
              <p className="text-sm text-gray-600">
                Date: <span className="font-medium">{interview.date}</span>
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  statusColors[interview.status] || 'bg-gray-200 text-gray-700'
                }`}
              >
                {interview.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interview;
