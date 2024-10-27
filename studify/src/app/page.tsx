// src/app/page.tsx
import Image from "next/image";
import Navbar from "./components/Navbar"; 
import Colleges from "./components/colleges"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-2xl px-4  lg:px-20">
        <Navbar />

        {/* Hero Section */}
        <div className="mt-5 sm:mt-10 md:mt-15 lg:mt-20">
        <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mt-8 mb-8 text-black">
          Study <span className="text-blue-500">Less</span>, Ace <span className="text-blue-500">More</span>
        </h1>

          <h2 className="text-center font-base text-sm sm:text-md md:text-lg text-neutral-400">
            Instantly solve your homework, summarize and transribe lectures, and create study guides from any document. Say hello to your all in one study companion.
          </h2>
        </div>

        {/* Sign Up Button */}
        <div className="flex justify-center mt-8 mb-2">
          <div className="px-8 py-3 bg-blue-500 rounded-full text-center">
            <h2 className="font-semibold text-white text-xs sm:text-sm md:text-base">Sign up for free</h2>
          </div>
        </div>

        {/* Subtext */}
        <div className="flex justify-center">
          <h4 className="text-xs sm:text-sm text-center text-neutral-400">
            Free with ads. Get ad-free learning starting at $4/month.
          </h4>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:gap-8 justify-center mt-2 sm:mt-10 mb-14  mx-4">
          <div className=" h-20 sm:h-40 px-7 py-7 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-semibold text-black mb-3">Solve</h1>
            <p className="text-neutral-400 text-xs sm:text-base">
              Conquer your toughest homework challenges with our powerful AI assistant.
            </p>
          </div>
          <div className="h-20 sm:h-40 px-7 py-7 rounded-xl ">
            <h1 className="text-xl sm:text-2xl font-semibold text-black mb-3">Study</h1>
            <p className="text-neutral-400 text-xs sm:text-base">
              Elevate your study sessions—experience personalized learning with intelligent AI guidance.
            </p>
          </div>
          <div className=" h-20 sm:h-40 px-7 py-7 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-semibold text-black mb-3">Summarize</h1>
            <p className="text-neutral-400 text-xs sm:text-base">
              Unlock insights effortlessly as our AI converts videos into concise notes.
            </p>
          </div>
        </div>

        {/* Trusted Universities Section */}
        <Colleges />

        {/* Solve Section */}
        <div className="mx-4 my-11">
          <h1 className="text-lg sm:text-xl font-base text-black my-2">Solve</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black my-2">
            A world-class tutor at your fingertips
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-purple-400 text-purple-700 text-xs sm:text-xs font-medium shadow-md hover:bg-purple-600 transition">
              Powered by GPT-4o mini
            </span>
           
          </div>
          <p className="text-sm sm:text-base text-neutral-400">
           Tackle your toughest homework with AI-powered precision. Our advanced solver, powered by GPT-4o mini, breaks down complex problems step-by-step, providing detailed explanations that strengthen your understanding. From math to science and beyond, it’s designed to make learning more effective and less stressful, giving you the tools to excel.
          </p>
        </div>

        {/* Study Section */}
        <div className="mx-4 my-11">
          <h1 className="text-lg sm:text-xl font-base text-black my-2">Study</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black my-2">
            Personalized Study Sessions Tailored Just for You
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-green-300 text-green-700 text-xs sm:text-xs font-medium shadow-md hover:bg-green-600 transition">
              Creates Study Guides
            </span>


          </div>
          <p className="text-sm sm:text-base text-neutral-400">
            Transform your study sessions with a custom AI-powered approach. Our intelligent assistant crafts study plans tailored to your needs, focusing on areas for growth. Using adaptive learning technology, it generates study guides and materials that optimize your time and boost confidence. Enjoy a smarter, more effective way to reach your academic goals.          </p>
        </div>

        {/* Learn Section */}
        <div className="mx-4 my-11">
          <h1 className="text-lg sm:text-xl font-base text-black my-2">Summarize</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black my-2">
            Effortless Video-to-Text Summaries
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-orange-300 text-orange-700 text-xs sm:text-xs font-medium shadow-md hover:bg-orange-600 transition">
              Summarizes Textbooks
            </span>


          </div>
          <p className="text-sm sm:text-base text-neutral-400">
            Turn complex videos into concise, understandable summaries with our AI-powered tool. Designed to simplify learning, it captures the key points and insights from any video, delivering clear notes and summaries that enhance comprehension and retention. Using advanced natural language processing, our platform adapts to your needs, making video content accessible and engaging for effective learning.          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
