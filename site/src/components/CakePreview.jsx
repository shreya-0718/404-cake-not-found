import "./CakePreview.css";
import plate from "../assets/plate.png";
import { useState } from "react";

export default function CakePreview({ tier, flavor, icing, decor, fruit, candle, view}) {

  const [plateDimmed, setPlateDimmed] = useState(false);


  return (
    <div className="cake-preview">
      
      {view==="side" && (
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

        {decor.includes("bottom-border") && (
          <img
            src={`src/assets/decor/border-bottom.png`}
            className="decor-bottom"
          />
        )}

        {fruit && tier >= 1 && (
          <img
            src={`src/assets/fruits/${fruit}-side.png`}
            className={`fruit-side fruit-side-${tier}`}
          />
        )}

      </div>
      )}

      {view === "top" && (
    <div className="top-wrapper">
    
    {decor.includes("bottom-border") && (
      <img
        src="src/assets/top-decor/border-top-bottom.png"
        className="top-decor top-bottom-border"
      />
    )}

    {!icing && tier >= 1 && (
      <img
        src={`src/assets/top-view/${flavor}-flavor-top.png`}
        className="top-cake top-cake-1"
      />
    )}

    {icing && tier >= 1 && (
      <img
        src={`src/assets/top-view/${icing}-icing-top.png`}
        className="top-cake top-cake-1"
      />
    )}

    {decor.includes("border") && tier >= 1 && (
      <img
        src="src/assets/top-decor/border-top-1.png"
        className="top-decor top-border-1"
      />
    )}

    {!icing && tier >= 2 && (
      <img
        src={`src/assets/top-view/${flavor}-flavor-top.png`}
        className="top-cake top-cake-2"
      />
    )}

    {icing && tier >= 2 && (
      <img
        src={`src/assets/top-view/${icing}-icing-top.png`}
        className="top-cake top-cake-2"
      />
    )}

    {decor.includes("border") && tier >= 2 && (
      <img
        src="src/assets/top-decor/border-top-2.png"
        className="top-decor top-border-2"
      />
    )}

    {decor.includes("border") && tier >= 3 && (
      <img
        src="src/assets/top-decor/border-top-3.png"
        className="top-decor top-border-3"
      />
    )}

    {!icing && tier >= 3 && (
      <img
        src={`src/assets/top-view/${flavor}-flavor-top.png`}
        className="top-cake top-cake-3"
      />
    )}

    {icing && tier >= 3 && (
      <img
        src={`src/assets/top-view/${icing}-icing-top.png`}
        className="top-cake top-cake-3"
      />
    )}


    {fruit && (
      <img
        src={`src/assets/fruits/${fruit}-top.png`}
        className={`fruit-top-${tier}`}
      />
    )}

  </div>
)}

    </div>
  );
}
