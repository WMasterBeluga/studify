import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-full max-w-screen-2xl px-4  lg:px-20">
      <Navbar />

      {/* Centered Login Box */}
      <div className="flex-grow flex justify-center items-center w-full px-4 sm:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-sm md:max-w-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Login</h2>
          
          {/* Google Login Button */}
          <button className="flex items-center justify-center w-full bg-black hover:bg-neutral-300 text-white font-semibold py-2 px-4 rounded-md mb-4">
            <Image src="/Google_Icons-09-512.webp" alt="Google Icon" width={30} height={30} className="mr-2" />
            Login with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Email and Password Login */}
          <form className="text-left">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
            />

            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md">
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline text-sm">Forgot Password?</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
