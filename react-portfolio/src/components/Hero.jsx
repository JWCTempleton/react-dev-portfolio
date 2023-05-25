import "./Hero.css";

// #FFFF00, #00FFFF, #FF00FF

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-paragraph">
          Hi, I'm <span className="text-background">Jacob Templeton</span>...
          <br />
          your next web developer.
        </p>
        <div className="button-section">
          <a href="#about">
            <button className="button">About Me</button>
          </a>
          <button className="button">My Projects</button>
        </div>
      </div>
      <svg
        class="background--custom"
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
          style={{ animation: "path1 9.5s linear infinite alternate" }}
        />
        <path
          fill="#FF00FF"
          fill-opacity="0.2"
          d="M-100 -100L200 -100L200 20L-100 20Z"
          style={{ animation: "path2 11s linear infinite alternate" }}
        />
      </svg>
    </div>
  );
};

export default Hero;
