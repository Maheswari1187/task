import React, { useEffect, useState } from 'react';

const SubmissionsPage = () => {
  // State to store form data
  const [formData, setFormData] = useState([]);

  // Effect to retrieve form data from localStorage
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    console.log('Retrieved form data:', savedFormData); // Log retrieved form data
    setFormData(savedFormData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Submissions</h1>
      {formData.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">File Name</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border px-4 py-2">{data.name}</td>
                <td className="border px-4 py-2">{data.email}</td>
                <td className="border px-4 py-2">{data.message}</td>
                <td className="border px-4 py-2">{data.fileName || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
};

export default SubmissionsPage;
