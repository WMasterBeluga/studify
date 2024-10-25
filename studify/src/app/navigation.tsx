export default function Navigation() {
    return (
      <div className="px-10">
        <div className="w-full"></div>
  
        <div className="mt-5">
  
          <nav className="flex justify-between items-center p-4 text-white rounded-lg">
            <h1 className="font-semibold">Studify</h1>
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-300">Sign up</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }