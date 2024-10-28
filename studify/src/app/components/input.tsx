// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full py-2 px-3 md:py-4 md:px-20">
      <div className="max-w-screen-lg mx-auto flex items-center space-x-2 md:space-x-4">
        
        {/* Upload Button  */}
        <button className="hidden md:inline text-neutral-500 hover:text-neutral-700 p-2 rounded-full text-sm md:text-base">
          Upload File
        </button>

        {/*Input Box */}
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-grow border border-neutral-300 rounded-full py-2 px-3 text-sm md:text-base focus:outline-none focus:border-blue-400"
        />

        {/* Send Buton */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
