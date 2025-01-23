"use client";

import { useRef, useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3080/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('Upload success:', result);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;



// This is what is on the remote server (any errors are gone after delete the above portion):
// "use client"

// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function Page() {
//   const [response, setResponse] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch OpenAI response from the server
//   useEffect(() => {
//     const fetchResponse = async () => {
//       try {
//         const res = await fetch('http://localhost:3080/', {
//           method: 'POST',
//         });
//         if (!res.ok) {
//           throw new Error(`Server responded with ${res.status}`);
//         }
//         const data = await res.json();
//         setResponse(data.data);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to fetch data.');
//         setIsLoading(false);
//       }
//     };

//     fetchResponse();
//   }, []);

//   return (
//     <div className="w-full max-w-screen-2xl px-4 lg:px-10 h-screen">
//       <div className="flex flex-col min-h-screen items-center justify-center h-full py-8">
//         <Link href="/chat" className="fixed top-4 right-4 md:top-6 md:right-6 bg-neutral-200 hover:bg-neutral-300 text-black p-2 rounded-full">
//           X
//         </Link>

//         <div className="flex flex-col md:flex-row w-full h-full">
//           {/* Box 1 */}
//           <div className="flex-1 p-4 rounded-2x m-2 h-full flex flex-col space-y-4">
//             <div className="flex-1 flex flex-col items-left justify-center space-y-4">
//               <div className="text-left mb-8">
//                 <h1 className="text-3xl font-semibold text-black mb-6">Study</h1>
//                 <label htmlFor="options" className="block text-neutral-400">Add a file below to generate notes</label>
//               </div>
//               <button className="bg-black hover:bg-neutral-700 text-white py-2 px-4 rounded-md">
//                 Add File
//               </button>
//               <div className="w-full h-24 bg-gray-100 flex flex-col items-center justify-center rounded-md space-y-1">
//                 <h2 className="text-neutral-400 font-bold">Drag and drop file</h2>
//                 <p className="text-neutral-400 text-sm">Supports PDF, DOC, DOCX, and PPTX</p>
//               </div>
//             </div>
//           </div>

//           {/* Box 2 */}
//           <div className="flex-1 p-4 m-2 h-full flex flex-col space-y-4">
//             <h2 className="text-2xl font-semibold">Creating Notes</h2>
//             <h3 className="text-lg text-neutral-500">Untitled Note</h3>
//             <div className="flex-1 bg-black rounded-lg">
//               {/* Display OpenAI API response */}
//               {isLoading ? (
//                 <p className="text-gray-400 p-4">Loading...</p>
//               ) : error ? (
//                 <p className="text-red-400 p-4">{error}</p>
//               ) : (
//                 <p className="text-white p-4">{response}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
