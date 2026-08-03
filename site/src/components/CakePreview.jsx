import "./CakePreview.css";
import plate from "../assets/plate.png";
import { useState } from "react";

export default function CakePreview({ tier, flavor, icing, decor, fruit, extras, view}) {

  const [plateDimmed, setPlateDimmed] = useState(false);


  return (
    <div className="cake-preview">
      <div className="plate-wrapper">

        <img
          src={plate}
          className="plate"
          onClick={() => setPlateDimmed(!plateDimmed)}
          style={{ opacity: plateDimmed ? 0.5 : 1 }}
        />
        {!icing && (
          <>
        {tier >= 1 && (
          <img
            src={`src/assets/flavors/${flavor}-tier-1.png`}
            className="cake-img cake-tier-1"
          />
        )}
        {tier >= 2 && (
          <img
            src={`src/assets/flavors/${flavor}-tier-2.png`}
            className="cake-img cake-tier-2"
          />
        )}
        {tier >= 3 && (
          <img
            src={`src/assets/flavors/${flavor}-tier-3.png`}
            className="cake-img cake-tier-3"
          />
          
        )}</>)}

        {/* --- ICING --- */}
        {icing && tier >= 1 && (
          <img
            src={`src/assets/icing/${icing}-tier-1.png`}
            className="icing-img icing-tier-1"
          />
        )}
        {icing && tier >= 2 && (
          <img
            src={`src/assets/icing/${icing}-tier-2.png`}
            className="icing-img icing-tier-2"
          />
        )}
        {icing && tier >= 3 && (
          <img
            src={`src/assets/icing/${icing}-tier-3.png`}
            className="icing-img icing-tier-3"
          />
        )}

        {/* --- DECOR --- */}
        {decor.includes("ruffles") && tier >= 1 && (
          <img
            src={`src/assets/decor/ruffles-tier-1.png`}
            className="decor-img decor-ruffles-1"
          />
        )}
        {decor.includes("ruffles") && tier >= 2 && (
          <img
            src={`src/assets/decor/ruffles-tier-2.png`}
            className="decor-img decor-ruffles-2"
          />
        )}
        {decor.includes("ruffles") && tier >= 3 && (
          <img
            src={`src/assets/decor/ruffles-tier-3.png`}
            className="decor-img decor-ruffles-3"
          />
        )}

        {decor.includes("border") && tier >= 1 && (
          <img
            src={`src/assets/decor/border-tier-1.png`}
            className="decor-img decor-border-1"
          />
        )}
        {decor.includes("border") && tier >= 2 && (
          <img
            src={`src/assets/decor/border-tier-2.png`}
            className="decor-img decor-border-2"
          />
        )}
        {decor.includes("border") && tier >= 3 && (
          <img
            src={`src/assets/decor/border-tier-3.png`}
            className="decor-img decor-border-3"
          />
        )}

        {decor.includes("roses") && tier >= 1 && (
          <img
            src={`src/assets/decor/roses-tier-1.png`}
            className="decor-img decor-roses-1"
          />
        )}
        {decor.includes("roses") && tier >= 2 && (
          <img
            src={`src/assets/decor/roses-tier-2.png`}
            className="decor-img decor-roses-2"
          />
        )}
        {decor.includes("roses") && tier >= 3 && (
          <img
            src={`src/assets/decor/roses-tier-3.png`}
            className="decor-img decor-roses-3"
          />
        )}

        {/* --- BOTTOM BORDER --- */}
        {decor.includes("bottom-border") && (
          <img
            src={`src/assets/decor/border-bottom.png`}
            className="decor-bottom"
          />
        )}

      </div>
    </div>
  );
}
