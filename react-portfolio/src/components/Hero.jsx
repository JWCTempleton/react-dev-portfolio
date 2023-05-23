import "./Hero.css";

// #FFFF00, #00FFFF, #FF00FF

const Hero = () => {
  return (
    <div class="hero">
      <div class="hero-text">
        <h2>Hi, I'm Jacob Templeton</h2>
      </div>
      <svg
        class="background--custom"
        id="demo"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFF00"
          fill-opacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 50Z"
          style={{ animation: "path0 5s linear infinite alternate" }}
        />
        <path
          fill="#00FFFF"
          fill-opacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 50Z"
          style={{ animation: "path1 12.5s linear infinite alternate" }}
        />
        <path
          fill="#FF00FF"
          fill-opacity="0.2"
          d="M-100 -100L200 -100L200 20L-100 20Z"
          style={{ animation: "path2 30s linear infinite alternate" }}
        />
      </svg>
    </div>
  );
};

export default Hero;
