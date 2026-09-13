



import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
     <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
    
        <div>
          <h1 className="text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl lg:text-6xl">
            Build Your Ideal 
            <br /> 
           
           <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>


          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">Explore Technologies</button>
            <button className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100">Learn More</button>
          </div>
        </div>

    
        <div className="flex justify-center md:justify-end">
          <img src={heroImage} alt="Hero Image"    className="w-full max-w-md object-contain lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;