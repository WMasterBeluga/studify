"use client";

import Image from "next/image";
import Link from 'next/link';
import Input from "../components/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center" style={{ marginTop: '-25vh' }}>
      {/* Exit Button */}
      <Link href="/chat" className="fixed top-4 right-4 md:top-6 md:right-6 bg-neutral-200 hover:bg-neutral-300 text-black p-2 rounded-full">
        X
      </Link>

     
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-black mb-6">Solve</h1>
        <label htmlFor="options" className="block text-neutral-400">Add your questions below to solve</label>
      </div>

      {/* Input Component */}
      <Input />
    </div>
  );
}



{/* Upload Button and Send Button 
                    <div className="flex items-center mt-4">
                      <button className="bg-black hover:bg-neutral-300 text-white font-semibold py-3 px-4 rounded-full flex-grow">
                        Upload File
                      </button>
                      <button className="ml-2 bg-green-400 hover:bg-green-300 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                    </div> */}