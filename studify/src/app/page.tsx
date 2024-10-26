// src/app/page.tsx
import Image from "next/image";
import Navbar from "./Navbar"; // Adjust the path if necessary

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-2xl px-4 md:px-10 lg:px-20">
        <Navbar />

        {/* Hero Section */}
        <div className="mt-5">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-8 mb-8 text-white">
            Study Less, Ace More
          </h1>
          <h2 className="text-center text-lg sm:text-xl text-neutral-300">
            Ace your classes using your newest study companion
          </h2>
        </div>

        {/* Sign Up Button */}
        <div className="flex justify-center mt-8 mb-2">
          <div className="px-8 py-3 bg-white rounded-full text-center">
            <h2 className="font-semibold text-black">Sign up for free</h2>
          </div>
        </div>

        {/* Subtext */}
        <div className="flex justify-center">
          <h4 className="text-xs sm:text-sm text-center text-neutral-300">
            Free with ads. Get ad-free learning starting at $4/month.
          </h4>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 justify-center my-8 mx-4">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">Solve</h1>
            <p className="text-neutral-100 text-sm sm:text-base">
              Conquer your toughest homework challenges with our powerful AI assistant
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">Study</h1>
            <p className="text-neutral-100 text-sm sm:text-base">
              Elevate your study sessions—experience personalized learning with intelligent AI guidance
            </p>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">Learn</h1>
            <p className="text-neutral-100 text-sm sm:text-base">
              Unlock new insights effortlessly as our AI transforms complex topics into clear understanding
            </p>
          </div>
        </div>

        {/* Trusted Universities Section */}
        <div className="text-center justify-center text-lg sm:text-xl font-normal">
          <h2>Trusted by 1,000+ students at these top universities</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 justify-center mt-8">
            {/* University Logos */}
            <div className="flex justify-center items-center">
              <Image
                src="/Harvard_University_shield.png"
                alt="Harvard University Shield"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/MIT_logo.svg.png"
                alt="MIT Logo"
                width={55}
                height={55}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/block-s-right.webp"
                alt="Stanford University Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/Seal_of_University_of_California,_Berkeley.svg.png"
                alt="UC Berkeley Seal"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/UCLA_Bruins_script_logo.png"
                alt="UCLA Bruins Logo"
                width={55}
                height={55}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/Yale_University_logo.svg.png"
                alt="Yale University Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/NYU-Logo.png"
                alt="NYU Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/university-of-michigan-logo-55B0FE825E-seeklogo.com.png"
                alt="University of Michigan Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/pngtree-columbia-university-png-image_7775958.png"
                alt="Columbia University Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                alt="University of Pennsylvania Logo"
                width={85}
                height={85}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/Cornell_University_Logo.png"
                alt="Cornell University Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/kisspng-university-of-illinois-at-chicago-northwestern-uni-state-polytechnic-of-jember-5b3eccb721e153.5015009615308422951388.jpg"
                alt="University of Illinois at Chicago Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

          </div>
        </div>

        {/* Solve Section */}
        <div className="mx-4 my-11">
          <h1 className="text-xl sm:text-2xl font-normal text-white my-2">Solve</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white my-2">
            A world-class tutor at your fingertips
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-purple-950 text-purple-400 text-xs sm:text-sm font-medium shadow-md hover:bg-purple-600 transition">
              Powered by GPT-4o mini
            </span>
            {/* Add other tags similarly */}
            {/* ... */}
          </div>
          <p className="text-sm sm:text-base text-neutral-300">
            Master your toughest homework problems with AI precision. Our advanced AI solver tackles complex assignments effortlessly, breaking down even the most challenging problems step by step. This empowers you to grasp difficult concepts and excel academically. By providing detailed solutions and explanations, it enhances your understanding and problem-solving skills, making learning more effective and less stressful. Powered by cutting-edge artificial intelligence and machine learning algorithms, our solver analyzes and solves problems across various subjects, giving you the edge you need to succeed.
          </p>
        </div>

        {/* Study Section */}
        <div className="mx-4 my-11">
          <h1 className="text-xl sm:text-2xl font-normal text-white my-2">Study</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white my-2">
            Personalized Study Sessions Tailored Just for You
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-green-950 text-green-400 text-xs sm:text-sm font-medium shadow-md hover:bg-green-600 transition">
              Creates Study Guides
            </span>
            {/* Add other tags similarly */}
            {/* ... */}
          </div>
          <p className="text-sm sm:text-base text-neutral-300">
            Elevate your study sessions with personalized learning tailored just for you. Our intelligent AI assistant creates customized study plans by analyzing your strengths and areas for improvement. This optimizes your study time by focusing on the topics that matter most to you, boosting retention and confidence. Utilizing adaptive learning technology and data analytics, we deliver study guides and practice materials that maximize your learning efficiency. Experience a smarter way to study that adjusts to your unique learning style, helping you achieve better results in less time.
          </p>
        </div>

        {/* Learn Section */}
        <div className="mx-4 my-11">
          <h1 className="text-xl sm:text-2xl font-normal text-white my-2">Learn</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white my-2">
            Transform Complex Topics into Clear, Understandable Concepts
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="px-4 py-2 rounded-full bg-orange-950 text-orange-400 text-xs sm:text-sm font-medium shadow-md hover:bg-orange-600 transition">
              Summarizes Textbooks
            </span>
            {/* Add other tags similarly */}
            {/* ... */}
          </div>
          <p className="text-sm sm:text-base text-neutral-300">
            Transform complex topics into clear, understandable concepts with our AI-powered learning platform. Unlock a deeper understanding of your coursework as we simplify complicated subjects by providing clear explanations and interactive resources. This enhances comprehension by presenting information in an easy-to-digest format, aiding long-term retention. Employing natural language processing and interactive AI, our platform delivers content that adapts to your needs, making learning engaging and accessible. Embrace a more intuitive learning experience that empowers you to master any subject with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
