import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    
      <div>
    
        <div>
          <h1>
            Build Your Ideal <br /> 
            Development Stack
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div>
            <button>Explore Technologies</button>
            <button>Learn More</button>
          </div>
        </div>

    
        <div>
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    
  );
}

export default Hero;