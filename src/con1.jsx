import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileInput from './fileinput'; // Assuming FileInput component is correctly implemented

const SubmissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none"
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
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-white">Upload CV:</label>
            <FileInput onChange={(e) => console.log('File changed:', e.target.files[0])} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
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
