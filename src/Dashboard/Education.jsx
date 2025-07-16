import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Education = () => {
  const data = useOutletContext();
  const { education } = data;
  const {class10,class12,graduation,post_graduation}=education

  return (
    <>
    <div className="bg-white p-4 rounded-xl shadow shadow border-l-4 border-blue-600">
      <h1 className='bg-white p-3 text-Black font-bold text-3xl text-center '>Education</h1>
    </div>
    <div className="p-4 mt-4 flex gap-4">
    <div className="w-1/2 bg-gray p-4 rounded-xl shadow shadow border-1-4 border-blue-600">
    <h3 className='text-center text-black font-semibold text-2xl'>Class-10</h3>
    <p className='pt-4'><strong>Board :</strong> {class10.board}</p>
    <p><strong>School :</strong> {class10.school}</p>
    <p><strong>Year :</strong> {class10.year}</p>
    <p><strong>Percentage :</strong> {class10.percentage}</p>
    
    
    </div>
    <div className="w-1/2 bg-gray p-4 rounded-xl shadow shadow border-1-4 border-blue-600">
    
    <h3 className='text-center text-black font-semibold text-2xl'>Class-12</h3>
    <p className='pt-4'><strong>Board :</strong> {class12.board}</p>
    <p><strong>School :</strong> {class12.school}</p>
    <p><strong>Year :</strong> {class12.year}</p>
    <p><strong>Percentage :</strong> {class12.percentage}</p>
    </div>
    </div>

      <div className="p-4 mt-1 flex gap-4">
    <div className="w-1/2 bg-gray p-4 rounded-xl shadow shadow border-1-4 border-blue-600">

    
    <h3 className='text-center text-black font-semibold text-2xl'>Graduation</h3>
    <p className='pt-4'><strong>Course:</strong> {graduation.course}</p>
    <p><strong>University :</strong> {graduation.university}</p>
    <p><strong>College :</strong> {graduation.college}</p>
    <p><strong>Year :</strong> {graduation.year}</p>
    <p><strong>CGPA :</strong> {graduation.cgpa}</p>
    </div>
    <div className="w-1/2 bg-gray p-4 rounded-xl shadow shadow border-1-4 border-blue-600">

     <h3 className='text-center text-black font-semibold text-2xl'>Post-Graduation</h3>
    <p className='pt-4'><strong>Course:</strong> {post_graduation.course}</p>
    <p><strong>University :</strong> {post_graduation.university}</p>
    <p><strong>College :</strong> {post_graduation.college}</p>
    <p><strong>Year :</strong> {post_graduation.year}</p>
     <p><strong>CGPA :</strong> {post_graduation.cgpa}</p>
    </div>
    </div>

        
    </>
  );
};

export default Education;
