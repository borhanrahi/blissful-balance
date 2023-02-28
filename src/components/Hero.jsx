import Image from "next/image";

function Hero() {
    return (
        <div>
            <div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" className="flex">
                  <img
                     src="https://i.ibb.co/LtKvW2W/Black-logo-no-background.png" alt="Black-logo-no-background" border="0"
                    className="w-auto h-8"
                  />
                </a>
              </div>
              <button className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <span className="w-fit">
                  <svg
                    className="block w-6 h-6"
                    
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 8h16M4 16h16"></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </span>
              </button>
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                  Features
                </a>
                <a
                  href="#"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                  Solutions
                </a>
                <a
                  href="#"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                  Resources
                </a>
                <a
                  href="#"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                  Pricing
                </a>
              </div>
              <a
                href="#"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full">
                Join Now
              </a>
            </div>
          </div>
        </header>
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  A social media for learners
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black sm:text-6xl lg:mt-8 xl:text-[80px]">
                  Where share & learn from the experts
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Grow your career fast with right mentor.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400">
                  <span className="text-black">Join for free </span>
                </a>
                <p className="mt-5 text-gray-600">
                  <span className="mr-2.5">Already joined us? </span>
                  <a
                    href="#"
                    className="text-black transition-all duration-200 hover:underline">
                    Log in
                  </a>
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  className="w-full"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
    );
}

export default Hero;