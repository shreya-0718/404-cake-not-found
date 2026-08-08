import "./CakePage.css";
import NavArrows from "../components/NavArrows";
import CakeOptionsPanel from "../components/CakeOptionsPanel";
import CakePreview from "../components/CakePreview";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CakePage() {
  const [tier, setTier] = useState(1);
  const [flavor, setFlavor] = useState("vanilla");
  const [icing, setIcing] = useState(null);
  const [decor, setDecor] = useState([]);
  const [fruit, setFruit] = useState(null);
  const [candle, setCandle] = useState(null);
  const [card, setCard] = useState({ message: "" });
  const [view, setView] = useState("side");

  const navigate = useNavigate();

  return (
    <div className="cake-page">
      <NavArrows
        back="/"
        forward="/share"
        onClick={(direction) => {
          if (direction === "forward") {
            navigate("/share", {
              state: {
                tier,
                flavor,
                icing,
                decor,
                fruit,
                candle,
                card
              }
            });
          } else {
            navigate("/");
          }
        }}
      />

      <div className="cake-layout">
        <CakePreview
          tier={tier}
          flavor={flavor}
          icing={icing}
          decor={decor}
          fruit={fruit}
          candle={candle}
          view={view}
          card={card}
        />

        <CakeOptionsPanel
          tier={tier}
          setTier={setTier}
          flavor={flavor}
          setFlavor={setFlavor}
          icing={icing}
          setIcing={setIcing}
          decor={decor}
          setDecor={setDecor}
          fruit={fruit}
          setFruit={setFruit}
          candle={candle}
          setCandle={setCandle}
          view={view}
          setView={setView}
          card={card}
          setCard={setCard}
        />
      </div>
    </div>
  );

  navigate("/final", { state: {
    tier,
    flavor,
    icing,
    decor,
    fruit,
    candle,
    card
  }});
}

