import "./Projects.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="mb-small">My Projects</h2>
      <Fade left>
        <div className="projects-content mb-medium">
          <div className="projects-text">Text</div>

          <div className="projects-image">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
            >
              <img
                className="projects-photo"
                src="./laptop-1.jpg"
                alt="laptop"
              />
            </Tilt>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="projects-content mb-medium">
          <div className="projects-image">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
            >
              <img
                className="projects-photo"
                src="./laptop-2.jpg"
                alt="laptop"
              />
            </Tilt>
          </div>
          <div className="projects-text">Text</div>
        </div>
      </Fade>
      <Fade left>
        <div className="projects-content mb-medium">
          <div className="projects-text">Text</div>

          <div className="projects-image mb-medium">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
            >
              <img
                className="projects-photo"
                src="./laptop-3.jpg"
                alt="laptop"
              />
            </Tilt>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
