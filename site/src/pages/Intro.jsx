import "./Intro.css";
import FallingFruits from "../components/FallingFruits";

export default function Intro() {
  return (
    <div className="intro-container">
      <FallingFruits/>

      <h1 className="intro-title">
        welcome to
        <br />
        your bakery in the cloud!
      </h1>

      <p className="intro-subtitle">
        make something adorable :3
      </p>

      <img className="intro-button"         
      onClick={() => window.location.href = "/cake"}
      src="../assets/pins/next.png" 
      alt="next button"></img>

    </div>
  );
}
