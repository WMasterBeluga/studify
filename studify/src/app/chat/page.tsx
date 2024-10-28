import Image from "next/image";
import Link from 'next/link';
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-full px-4 lg:px-20">
        <div className="w-full"></div>
          <Navbar />
        <div className="mt-5">
          

          {/* Neutral Box Starts Here */}
          <div className="flex justify-center mt-8">
            <div className="border-0 rounded-lg w-full h-[600px]">
              <div className="flex flex-wrap h-full">
                {/* Left Half */}
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-col h-full justify-between">
                    {/* Dropdown Menu */}
                    <div>
                      <h1 className="text-3xl font-semibold text-black mb-6">Hi User</h1>
                      <label htmlFor="options" className="block text-neutral-400">What do you want to do?</label>
                      <select
                        id="options"
                        className="mt-4 block w-full border border-neutral-300 bg-white rounded-md text-neutral-500 py-3 px-3 focus:outline-none appearance-none"
                      >
                        <option className="text-black">Solve</option>
                        <option className="text-black">Summarize Lecture</option>
                        <option className="text-black">Generate Study Guide</option>
                      </select>
                    </div>

                    {/* Upload Button and Send Button */}
                    <div className="flex items-center mt-4">
                      <button className="bg-black hover:bg-neutral-300 text-white font-semibold py-3 px-4 rounded-full flex-grow">
                        Upload File
                      </button>
                      <button className="ml-2 bg-green-400 hover:bg-green-300 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                    </div>
                  </div>
                </div>
                {/* Right Half */}
                <div className="w-full md:w-1/2 p-8">
                  <div className="border-neutral-300 rounded-md p-4 h-full border">
                    <p className="text-neutral-400">Awaiting question</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Neutral Box Ends Here */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
