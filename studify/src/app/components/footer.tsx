"use client";

export default function footer() {
    return (
        <div className="">
            <h1 className="mx-4 mt-32 md:mt-48 text-2xl font-semibold"></h1>
            <footer className="text-black py-10 px-4 sm:px-4 text-left mt-16 md:mt-24">
                <div className="max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    <div>
                        <h4 className="font-semibold text-black mb-4">Studify</h4>
                        <ul className="space-y-0 sm:space-y-1 md:space-y-2">
                            <li><a href="#" className="hover:text-neutral-400">TikTok</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Instagram</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Twitter</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Discord</a></li>
                        </ul>
                    </div>
                    {/* Company Section */}
                    <div>
                        <h4 className="font-semibold text-black mb-4">Company</h4>
                        <ul className="space-y-0 sm:space-y-1 md:space-y-2">
                            <li><a href="#" className="hover:text-neutral-400">About Us</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Careers</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Become an affiliate</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Groups & Clubs</a></li>
                        </ul>
                    </div>


                    {/* Resources Section */}
                    <div>
                        <h4 className="font-semibold text-black mb-4">Resources</h4>
                        <ul className="space-y-0 sm:space-y-1 md:space-y-2">
                            <li><a href="#" className="hover:text-neutral-400">Guides</a></li>
                            <li><a href="#" className="hover:text-neutral-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Posts</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Support</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h4 className="font-semibold text-black mb-4">Legal</h4>
                        <ul className="space-y-0 sm:space-y-1 md:space-y-2">
                            <li><a href="#" className="hover:text-neutral-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-neutral-400">Data Processing</a></li>
                        </ul>
                    </div>

                    
                </div>
                <div className="mt-8 text-center pt-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Studify. All rights reserved.</p>
                </div>
            </footer>
        </div>
        
    );
}
