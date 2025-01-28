import Image from "next/image";

export default function Home() {
  return (
    <div id="hero" className="bg-black h-screen relative">
      <div className="container mx-auto relative z-[3] px-8 lg:px-0">
        <div className="flex items-center justify-center md:justify-end py-4">
          {/* Get Help Button */}
        </div>
        <div className="hero__text md:h-[50vh] flex flex-col justify-center">
          <div className="text-lg lg:text-2xl text-white">Welcome to</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 font-bold text-white">Name</h2>
        </div>
      </div>
      <div className="absolute bottom-10 md:left-0 w-full z-[3]">
        <div className="container mx-auto relative px-8 lg:px-0">
          <div className="flex flex-col md:flex-row md:items-stretch justify-between">
              <div className="md:w-1/2 lg:w-1/3 bg-white rounded-lg text-center border border-gray-200">
                <div className="p-4">
                  <div className="mt-4 mb-8 text-gray-500 md:my-4">WelcomeText</div>
                  <div className="my-2 text-4xl text-gray-500 font-handwritten">Warmly</div>
                  <div className="mt-2 text-sm text-gray-500">Host Name</div>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-2/3 relative z-[4]">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {/* Buttons */}
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white/0 to-white absolute inset-0 z-[2]"></div>
      <div className="absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-t from-black/20 to-black/20 mb-0"></div>
      <Image 
        src="https://placehold.co/1920x1080"
        fill={true}
        objectFit="cover"
        alt=""
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <footer className="text-center mt-4 mx-auto absolute bottom-2 left-0 w-full z-[3] text-sm">Powered by Homebook Hub</footer>
    </div>
  );
}
