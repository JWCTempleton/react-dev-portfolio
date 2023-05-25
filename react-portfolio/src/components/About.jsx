import "./About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-div">
        <div className="about-img-section">
          <img
            className="about-img"
            src="./jwct-profile-pic.jpeg"
            alt="profile-pic"
          />
        </div>
        <div className="about-text-section">
          <p>I graduated Summa Cum Laude from Saint Mary's College of California with a B.S. in Business Administration. In my senior year I was accepted into the Technology, Engineering, and Business program which introduced me to a brand new world of web design.</p><br />
          <p>While my experience thus far has mostly involved working with front-end technologies, I am learning as much as possible about databases and other back-end technolgies with the ultimate goal of becoming a full-stack web developer.</p>
        </div> 
      </div>
    </div>
  );
};

export default About;
