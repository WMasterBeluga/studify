import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl justify-self-centercenter px-20">
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

          <h1 className="text-center text-8xl font-bold mt-8 mb-8 text-white">Study Less, Ace More</h1>
          <h2 className="text-center text-xl text-neutral-300">Ace your classes using your newest study companion</h2>
        </div>

        <div className="flex justify-center mt-8 mb-2">
          <div className="px-12 py-3 bg-white rounded-full text-center">
            <h2 className="font-semibold text-black">Sign up for free</h2>
          </div>
        </div>

        <div className="flex justify-center">
          <h4 className="text-sm">Free with ads. Get ad-free learning starting at $4/month.</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 justify-center my-8 mx-4">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-2xl font-semibold text-white">Solve</h1>
            <p className="text-neutral-100">Use our AI to solve your toughest homework problems</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-2xl font-semibold text-white">Study</h1>
            <p className="text-neutral-100">Use our AI to solve your toughest homework problems</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 h-40 px-7 py-7 rounded-xl">
            <h1 className="text-2xl font-semibold text-white">Learn</h1>
            <p className="text-neutral-100">Use our AI to solve your toughest homework problems</p>
          </div>
        </div>


        <div className="text-center justify-center text-xl font-thin">
          <h2>Trusted by 1,000+ students at these top universities</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-center mt-8">
            <div className="flex justify-center items-center">
              <Image src="/Harvard_University_shield.png" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/MIT_logo.svg.png" alt="MIT Logo" width={70} height={70} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/block-s-right.webp" alt="Harvard Shield" width={70} height={70} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/Seal_of_University_of_California,_Berkeley.svg.png" alt="MIT Logo" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/UCLA_Bruins_script_logo.png" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/Yale_University_logo.svg.png" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/NYU-Logo.png" alt="Harvard Shield" width={125} height={125} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/university-of-michigan-logo-55B0FE825E-seeklogo.com.png" alt="MIT Logo" width={55} height={55} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/pngtree-columbia-university-png-image_7775958.png" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/UniversityofPennsylvania_FullLogo_RGB-4_0.png" alt="MIT Logo" width={125} height={125} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/Cornell_University_Logo.png" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/kisspng-university-of-illinois-at-chicago-northwestern-uni-state-polytechnic-of-jember-5b3eccb721e153.5015009615308422951388.jpg" alt="Harvard Shield" width={65} height={65} className="object-contain"/>
            </div>
          </div>
        </div>

      
        <div className="mx-4 my-11">
          <h1 className="text-2xl font-normal text-white my-2">Solve</h1>
          <h2 className="text-3xl font-semibold text-white my-2">
            A world class tutor at your fingertips
          </h2>
          <div className="flex space-x-4 my-4">
            <span className="px-4 py-2 rounded-full bg-purple-950 text-purple-400 text-sm font-medium shadow-md hover:bg-purple-600 transition">
              Math
            </span>
            <span className="px-4 py-2 rounded-full bg-green-950 text-green-400 text-sm font-medium shadow-md hover:bg-green-600 transition">
              Science
            </span>
            <span className="px-4 py-2 rounded-full bg-orange-950 text-orange-400 text-sm font-medium shadow-md hover:bg-orange-600 transition">
              English
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-950 text-blue-400 text-sm font-medium shadow-md hover:bg-blue-600 transition">
              History
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-950 text-purple-400 text-sm font-medium shadow-md hover:bg-purple-800 transition">
              Language
            </span>
          </div>
          <div className="h-60 outline-1 outline-white border-white rounded-md">

          </div>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim in condimentum, suscipit taciti luctus sodales convallis primis nascetur. Posuere gravida mi convallis, dolor donec purus. Consequat interdum metus nunc ultrices vehicula! Ornare varius elit, parturient habitant integer sem risus proin nec? Convallis urna nascetur conubia litora vestibulum? Felis class risus nulla elit himenaeos magnis. Orci est augue nam dolor, curabitur varius. Est vitae integer facilisi vivamus elementum lectus potenti. Malesuada odio pharetra sollicitudin himenaeos lacinia odio. Elementum luctus accumsan aptent dictumst suspendisse luctus ullamcorper in amet. Rutrum vulputate penatibus ante ornare ligula ligula? Erat dictumst condimentum hendrerit habitasse a turpis venenatis amet. Eget enim integer erat feugiat posuere. Feugiat sapien ac augue vestibulum; est elementum ut.
          </p>
          <div>
          </div>
        </div>


        <div className="mx-4 my-11">
          <h1 className="text-2xl font-normal text-white my-2">
            Solve
          </h1>
          <h2 className="text-3xl font-semibold text-white my-2">
            A world class tutor at your fingertips
          </h2>
          <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim in condimentum, suscipit taciti luctus sodales convallis primis nascetur. Posuere gravida mi convallis, dolor donec purus. Consequat interdum metus nunc ultrices vehicula! Ornare varius elit, parturient habitant integer sem risus proin nec? Convallis urna nascetur conubia litora vestibulum? Felis class risus nulla elit himenaeos magnis. Orci est augue nam dolor, curabitur varius. Est vitae integer facilisi vivamus elementum lectus potenti. Malesuada odio pharetra sollicitudin himenaeos lacinia odio. Elementum luctus accumsan aptent dictumst suspendisse luctus ullamcorper in amet. Rutrum vulputate penatibus ante ornare ligula ligula? Erat dictumst condimentum hendrerit habitasse a turpis venenatis amet. Eget enim integer erat feugiat posuere. Feugiat sapien ac augue vestibulum; est elementum ut.
          </p>
        </div>
    
      </div>
    </div>
  );
}
