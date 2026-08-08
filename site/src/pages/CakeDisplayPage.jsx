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

    const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
      eager: true,
    });

    const getImage = (path) => images[`${path}`]?.default;
  
    return (
      <div className="big-box">
      <div className="back-arrow-box">
        <img
          src={getImage("/src/assets/pins/back-arrow.png")}
          className="back-btn"
          alt="back button"
          onClick={() => window.location.href = "/cake"}
        />
      </div>
      <div className="final-preview">
        <div className={`cake-preview-wrapper ${view=="side" ? "down" : ""}`}>
          <CakePreview
            tier={cake.tier}
            flavor={cake.flavor}
            icing={cake.icing}
            decor={cake.decor}
            fruit={cake.fruit}
            candle={cake.candle}
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
          {cake.card.message}
        </div>
      </div>
      </div>
    );
  }
  