import "./Projects.css";
import Tilt from "react-parallax-tilt";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="mb-small">My Projects</h2>
      <Slide direction={"left"} duration={800}>
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
      </Slide>
      <Slide direction={"right"} duration={800}>
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
      </Slide>
      <Slide direction={"left"} duration={800}>
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
      </Slide>
    </div>
  );
};

export default Projects;
