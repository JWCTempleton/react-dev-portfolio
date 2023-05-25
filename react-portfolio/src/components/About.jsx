import "./About.css";
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <div className="about-section" id="about">
          <Fade left>

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
          <p>I am comfortable working with React for front end development and have been learning about back end development. This includes working with Express as well as database design with both relational (postgres) as well as non-relational (mongo) databases.</p>
        </div> 
      </div>
      </Fade>

    </div>
  );
};

export default About;
