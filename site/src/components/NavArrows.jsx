import "./NavArrows.css";

export default function NavArrows({back, forward}) {
  return (
    <div className="nav-arrows">
      <img src="src/assets/pins/back-arrow.png" className="nav-btn1" alt="back button" onClick={() => window.location.href = back}>
      </img>

      <img src="src/assets/pins/forward-arrow.png" className="nav-btn2" alt="fwd button" onClick={() => window.location.href = forward}>
      </img>
    </div>
  );
}
