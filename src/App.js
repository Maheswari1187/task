
// // 
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
// import Cont from './con1';
// import SubmissionsPage from './submit';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/submissions">All Submissions</Link>
//         </nav>

//         {/* Use Routes instead of Route */}
//         <Routes>
//           <Route path="/submissions" element={<SubmissionsPage />} />
//           <Route path="/" element={<Cont />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// // App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import Cont from './cont3';
// // import SubmissionsPage from './submit';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <Route path="/" exact component={Cont} />
// //         <Route path="/submissions" component={SubmissionsPage} />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;



// // export default App;
// // App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import Cont from './cont2';
// // import SubmissionsPage from './submit';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
          
            
// //               <Link to="/">Home</Link>
            
            
// //               <Link to="/submissions">All Submissions</Link>
            
          
// //         </nav>

        
// //           {/* <Route path="/submissions">
// //             <SubmissionsPage />
// //           </Route> */}
// //           <Route path="/">
// //             <Cont />
// //           </Route>
        
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

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
