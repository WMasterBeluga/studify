import Image from "next/image";
import Link from 'next/link';
import Navbar from "/src/app/Navbar.tsx";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-full px-20">
        <div className="w-full"></div>

        <div className="mt-5">
          <Navbar />

          {/* Neutral Box Starts Here */}
          <div className="flex justify-center mt-8">
            <div className="bg-neutral-900 rounded-lg w-full h-[600px]">
              <div className="flex flex-wrap h-full">
                {/* Left Half */}
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-col h-full justify-between">
                    {/* Dropdown Menu */}
                    <div>
                      <h1 className="text-3xl font-semibold text-white mb-6">Studify AI</h1>
                      <label htmlFor="options" className="block text-neutral-500">What do you want to do?</label>
                      <select
                        id="options"
                        className="mt-4 block w-full bg-neutral-800 rounded-md text-white py-3 px-3 focus:outline-none appearance-none"
                      >
                        <option className="text-white">Solve</option>
                        <option className="text-white">Generate Study Guide</option>
                        <option className="text-white">Explain Notes</option>
                      </select>
                    </div>

                    {/* Upload Button and Send Button */}
                    <div className="flex items-center mt-4">
                      <button className="bg-white hover:bg-neutral-300 text-black font-semibold py-3 px-4 rounded-full flex-grow">
                        Upload Image/PDF
                      </button>
                      <button className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                    </div>
                  </div>
                </div>
                {/* Right Half */}
                <div className="w-full md:w-1/2 p-8">
                  <div className="bg-neutral-800 rounded-md p-4 h-full">
                    <p className="text-neutral-500">Awaiting question</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Neutral Box Ends Here */}
        </div>
      </div>
    </div>
  );
}
