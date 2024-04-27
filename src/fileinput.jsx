// // FileInput.js
// import React, { useState } from 'react';

// const FileInput = ({ onChange }) => {
//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     onChange(file);
//     setFileName(file ? file.name : '');
//   };

//   return (
//     <div className="relative">
//       <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full" />
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         {fileName ? `File Selected: ${fileName}` : 'Upload CV'}
//       </button>
//     </div>
//   );
// };

// export default FileInput;


// FileInput.js
// import React, { useState } from 'react';

// const FileInput = ({ onChange }) => {
//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     onChange(file);
//     setFileName(file ? file.name : '');
//   };

//   return (
//     <div className="relative">
//       <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full" />
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         {fileName ? `File Selected: ${fileName}` : 'Upload CV'}
//       </button>
//     </div>
//   );
// };

// export default FileInput;

// import React, { useState } from 'react';

// const FileInput = ({ onChange }) => {
//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0];
//       onChange(file);
//       setFileName(file.name);
//     }
//   };

//   return (
//     <div className="relative">
//       <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full" />
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         {fileName ? `File Selected: ${fileName}` : 'Upload CV'}
//       </button>
//     </div>
//   );
// };

// export default FileInput;

// 
import React, { useState } from 'react';

const FileInput = ({ onChange }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
    setFileName(file.name);
  };

  return (
    <div className="relative">
      <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {fileName ? `File Selected: ${fileName}` : 'Upload CV'}
      </button>
    </div>
  );
};

export default FileInput;

