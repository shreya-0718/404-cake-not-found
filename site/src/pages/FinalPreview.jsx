import { useLocation } from "react-router-dom";
import { useState } from "react";
import CakePreview from "../components/CakePreview";
import Share from "../components/Share";
import "./FinalPreview.css";
import NavArrows from "../components/NavArrows";

export default function FinalPreview() {
  const { state } = useLocation();
  const cakeData = state || {};

  const tier = cakeData.tier || 1;
  const flavor = cakeData.flavor || "vanilla";
  const icing = cakeData.icing || null;
  const decor = cakeData.decor || [];
  const fruit = cakeData.fruit || null;
  const candle = cakeData.candle || null;
  const card = cakeData.card || {};

  const [view, setView] = useState("side");

  if (!state) {
    return (
      <div className="centered">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="big-box">
    <div className="back-arrow-box">
      <img
        src="/src/assets/pins/back-arrow.png"
        className="back-btn"
        alt="back button"
        onClick={() => window.location.href = "/cake"}
      />
    </div>
    <div className="final-preview">
      <div className={`cake-preview-wrapper ${view=="side" ? "down" : ""}`}>
        <CakePreview
          tier={tier}
          flavor={flavor}
          icing={icing}
          decor={decor}
          fruit={fruit}
          candle={candle}
          view={view}
        />

        <div className="view-toggle">
          <button
            className={view === "side" ? "active" : ""}
            onClick={() => setView("side")}
          >
            Side
          </button>

          <button
            className={view === "top" ? "active" : ""}
            onClick={() => setView("top")}
          >
            Top
          </button>
        </div>
      </div>

      <div className="card-message">
        {card.message}
      </div>

      <Share cakeData={{ tier, flavor, icing, decor, fruit, candle, card }} />
    </div>
    </div>
  );
}
