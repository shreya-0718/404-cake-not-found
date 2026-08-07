import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import CakePreview from "../components/CakePreview";
import "./FinalPreview.css";

export default function CakeDisplayPage() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);

  useEffect(() => {
    supabase
      .from("cakes")
      .select("*")
      .eq("id", id)
      .then(({ data }) => setCake(data[0]));
  }, [id]);

  const [view, setView] = useState("side");
  
    if (!cake) {
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
          src="src/assets/pins/back-arrow.png"
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
            extras={extras}
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
      </div>
      </div>
    );
  }
  