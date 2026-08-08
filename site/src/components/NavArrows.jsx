import "./NavArrows.css";

export default function NavArrows({ back, forward, onClick }) {
  return (
    <div className="nav-arrows">
      <img
        src="/src/assets/pins/back-arrow.png"
        className="nav-btn1"
        alt="back button"
        onClick={() => {
          if (onClick) onClick("back");
          else window.location.href = back;
        }}
      />

      {forward && (
        <img
          src="/src/assets/pins/forward-arrow.png"
          className="nav-btn2"
          alt="forward button"
          onClick={() => {
            if (onClick) onClick("forward");
            else window.location.href = forward;
          }}
        />
      )}
    </div>
  );
}
