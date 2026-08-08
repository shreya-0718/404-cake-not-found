import "./NavArrows.css";

export default function NavArrows({ back, forward, onClick }) {

  const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
    eager: true,
  });

  const getImage = (path) => images[`${path}`]?.default;

  return (
    <div className="nav-arrows">
      <img
        src={getImage("/src/assets/pins/back-arrow.png")}
        className="nav-btn1"
        alt="back button"
        onClick={() => {
          if (onClick) onClick("back");
          else window.location.href = back;
        }}
      />

      {forward && (
        <img
          src={getImage("/src/assets/pins/forward-arrow.png")}
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
