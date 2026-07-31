import "./CakePage.css";
import NavArrows from "../components/NavArrows";
import CakeOptionsPanel from "../components/CakeOptionsPanel";
import CakePreview from "../components/CakePreview";

export default function CakePage() {
  const [tier, setTier] = useState(null);
  const [flavor, setFlavor] = useState("vanilla");
  const [icing, setIcing] = useState(null);
  const [decor, setDecor] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [extras, setExtras] = useState([]);

  return (
    <div className="cake-page">
      <NavArrows back="/" forward="/flowers" />

      <div className="cake-layout">
        <CakePreview
          tier={tier}
          flavor={flavor}
          icing={icing}
          decor={decor}
          fruit={fruit}
          extras={extras}
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
          extras={extras}
          setExtras={setExtras}
        />
      </div>
    </div>
  );
}
