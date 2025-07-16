import React from 'react';
import sample from "../assets/sample.avif";
import { NavLink } from 'react-router-dom';

export default function Sidebar({ student }) {
  if (!student) return null;

  return (
    // shadow 3d k liye and flex by deafult row ke liye hota h but isme col ke liye change kiya
    <div className="w-64 bg-black shadow-lg flex flex-col p-6">
      <div className="text-center mb-8">
        <img
          src={sample}
          alt="Profile"
          className="h-24 w-24 rounded-full mx-auto mb-4 "
        />
        <h3 className="text-xl font-semibold text-white">{student.name}</h3>
        <p className="text-sm text-white">{student.email}</p>
        <p className="text-sm text-white">{student.phone}</p>
      </div>

     
      <nav className="flex flex-col space-y-4 text-white">
        <NavLink to="/dashboard" >
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/education" >
          Education
        </NavLink>
        <NavLink to="/dashboard/skills">
          Skills
        </NavLink>
        <NavLink to="/dashboard/projects">
          Projects
        </NavLink>
        <NavLink to="/dashboard/interviews">
          Interviews
        </NavLink>
        <NavLink to="/dashboard/certificates" >
          Certificates
        </NavLink>
        <NavLink to="/dashboard/logout">
          Logout
        </NavLink>
      </nav>
    </div>
  );
}
