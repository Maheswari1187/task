


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cont from './con2';
import SubmissionsPage from './submit';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold hover:text-gray-300">Home</Link>
          <Link to="/submissions" className="text-white text-lg font-bold hover:text-gray-300">All Submissions</Link>
        </nav>
      </div>

      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/" element={<Cont />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
