"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white py-2 md:py-4 rounded-lg">
      <div className="max-w-screen-lg mx-auto flex items-center">

        {/* Combined Input and Button */}
        <div className="relative w-full border border-neutral-300  rounded-full overflow-hidden">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full py-3 px-6 text-sm md:text-base focus:outline-none rounded-full pr-14 bg-neutral-50"
          />
          
          {/* Send Button */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
