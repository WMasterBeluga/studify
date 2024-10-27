import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer"


export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-full px-4 lg:px-20">
        <div className="w-full"></div>
          <Navbar />
        <div className="mt-5">


        </div>
        <Footer />
      </div>
    </div>
  );
}
