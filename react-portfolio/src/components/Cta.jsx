import "./Cta.css";
import { Fade } from "react-awesome-reveal";

const Cta = () => (
  <div className="call">
    <Fade cascade damping={0.2} duration={2500}>
      <h2 className="call-title">Contact</h2>

      <p className="call-content">
        Please feel free to contact me, I'd love to talk more.
      </p>
      <p className="call-content">jacob.templeton@gmail.com</p>
    </Fade>
  </div>
);

export default Cta;
