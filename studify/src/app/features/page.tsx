import Link from 'next/link';

export default function Features() {
  return (
    <div className="px-10">
      <div className="w-full"></div>

      <div className="mt-5">

        <nav className="flex justify-between items-center p-4 text-white rounded-lg">
          <h1 className="font-semibold">Studify</h1>
          <ul className="flex space-x-8">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="features" className="hover:text-gray-300">Features</Link></li>
            <li><Link href="chat" className="hover:text-gray-300">Sign up (Chat)</Link></li>
            <li><a href="#contact" className="hover:text-gray-300">Login</a></li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-center mt-8 mb-2">
        
      </div>
    </div>
  );
}