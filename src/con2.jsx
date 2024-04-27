
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FileInput from './fileinput'; 

const SubmissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState(''); // State variable to store the file name
  const [submittedData, setSubmittedData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add isSubmitted state variable

  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];
    setSubmittedData(savedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message, fileName }; // Include fileName in the formData
    const updatedData = [...submittedData, formData]; 
    setSubmittedData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData)); 
    setIsSubmitted(true); 
    setName('');
    setEmail('');
    setMessage('');
    setFileName(''); 
  };

  return (
    <div className="container mx-auto lg:w-2/3 xl:w-1/2 p-8">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="8"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-white">Upload CV:</label>
            <FileInput onChange={(file) => setFileName(file.name)} required />
            {fileName && (
              <label className="text-white">Selected File: {fileName}</label>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
          {/* Display message when form is submitted */}
          {isSubmitted && <p className="text-white mt-4">Submitted!</p>}
        </form>
        <Link
          to="/submissions"
          className="block mt-4 text-center text-blue-500 hover:text-blue-600 underline"
        >
          View All Submissions
        </Link>
      </div>
    </div>
  );
};

export default SubmissionForm;
