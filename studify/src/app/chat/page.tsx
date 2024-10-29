import Image from "next/image";
import Link from 'next/link';
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-full px-4 lg:px-20">
        <Navbar />

        {/* Centered Content Starts Here */}
        <div className="flex flex-col items-center mt-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-black mb-6">Hi User</h1>
            <label htmlFor="options" className="block text-neutral-400">What do you want to do?</label>
          </div>

          {/* Responsive Boxes with Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 w-full">
            {/* Box 1: Solve */}
            <div className="border border-neutral-300 rounded-lg p-6 w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
              <Link href="/solve" className="text-center">
                <h2 className="text-xl font-semibold mb-2 text-black">Solve</h2>
                <p className="text-sm text-neutral-500">
                  Get step-by-step solutions to homework problems with AI assistance.
                </p>
              </Link>
            </div>

            {/* Box 2: Summarize */}
            <div className="border border-neutral-300 rounded-lg p-6 w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
              <Link href="/summarize" className="text-center">
                <h2 className="text-xl font-semibold mb-2 text-black">Summarize</h2>
                <p className="text-sm text-neutral-500">
                  Turn video lectures into concise, easy-to-read notes.
                </p>
              </Link>
            </div>

            {/* Box 3: Study */}
            <div className="border border-neutral-300 rounded-lg p-6 w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
              <Link href="/study" className="text-center">
                <h2 className="text-xl font-semibold mb-2 text-black">Study</h2>
                <p className="text-sm text-neutral-500">
                  Generate customized study guides from your class PDFs for focused learning.
                </p>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
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