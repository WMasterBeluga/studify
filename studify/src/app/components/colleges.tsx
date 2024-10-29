"use-client";
import Image from "next/image";


export default function colleges() {
  return (
    <div className="text-center justify-center text-lg sm:text-xl font-normal">
          <h2 className="font-semibold">Trusted by <span className="text-blue-500">1000+</span> students at these top universities</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 justify-center mt-8">
          
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
                src="/Cal_logo.png"
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
                width={85}
                height={85}
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
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

          </div>
        </div>
  );
}


