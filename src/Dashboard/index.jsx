import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const index= () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/student.json')
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error('Error loading student data:', err));
  }, []);

  if (!data) {
    return <p>pending</p>
  }

  const { student } = data;

  return (
    // jo div hai uski by default row conatiner se h or min h screen means vo height full screen height hai
    <div className="flex text-gray-800 min-h-screen">
      <Sidebar student={student} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">
          Welcome <span className="text-black">{student.name}</span>
        </h1>
        <Outlet context={data} />
      </div>
    </div>
  );
};

export default index;
