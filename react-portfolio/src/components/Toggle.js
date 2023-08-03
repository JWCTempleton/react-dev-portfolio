import "./Toggle.css";
const Toggler = () => {
  return (
    <div className="toggler">
      <p className="toggler--light">Light</p>
      <div className="toggler--slider">
        <div className="toggler--slider--circle"></div>
      </div>
      <p className="toggler--dark">Dark</p>
    </div>
  );
};

export default Toggler;
