import { useState } from "react";
import "./CakeOptionsPanel.css";

export default function CakeOptionsPanel({tier, setTier, flavor, setFlavor, icing, setIcing, decor, setDecor, fruit, setFruit, extras, setExtras}) {
  const [category, setCategory] = useState("flavor");

  return (
    <div className="options-panel">
      <div className="category-row">
        <button className={`category-btn ${category === "flavor" ? "active" : ""}`} onClick={() => setCategory("flavor")}>Flavor</button>
        <button className={`category-btn ${category === "icing" ? "active" : ""}`} onClick={() => setCategory("icing")}>Icing</button>
        <button className={`category-btn ${category === "decor" ? "active" : ""}`} onClick={() => setCategory("decor")}>Decor</button>
        <button className={`category-btn ${category === "fruit" ? "active" : ""}`} onClick={() => setCategory("fruit")}>Fruit</button>
        <button className={`category-btn ${category === "extra" ? "active" : ""}`} onClick={() => setCategory("extra")}>Extras!</button>
      </div>

      <div className="options-area">
        {category === "flavor" && (
            <div className="flavor-options">

                <div className="section">
                <h3 className="section-title">Select Tier(s)</h3>

                <div className="buttons">
                    <button
                    className={`btn btn-large ${tier === 1 ? "active" : ""}`}
                    onClick={() => setTier(1)}
                    >
                    1
                    </button>

                    <button
                    className={`btn btn-large ${tier === 2 ? "active" : ""}`}
                    onClick={() => setTier(2)}
                    >
                    2
                    </button>

                    <button
                    className={`btn btn-large ${tier === 3 ? "active" : ""}`}
                    onClick={() => setTier(3)}
                    >
                    3
                    </button>
                </div>
                </div>

                <div className="section">
                <h3 className="section-title">Select Flavor</h3>

                <div className="buttons">
                    <button
                    className={`btn ${flavor === "vanilla" ? "active" : ""}`}
                    onClick={() => setFlavor("vanilla")}
                    >
                    Vanilla
                    </button>

                    <button
                    className={`btn ${flavor === "chocolate" ? "active" : ""}`}
                    onClick={() => setFlavor("chocolate")}
                    >
                    Chocolate
                    </button>

                    <button
                    className={`btn ${flavor === "strawberry" ? "active" : ""}`}
                    onClick={() => setFlavor("strawberry")}
                    >
                    Strawberry
                    </button>

                    <button
                    className={`btn ${flavor === "lemon" ? "active" : ""}`}
                    onClick={() => setFlavor("lemon")}
                    >
                    Lemon
                    </button>

                    <button
                    className={`btn ${flavor === "redvelvet" ? "active" : ""}`}
                    onClick={() => setFlavor("redvelvet")}
                    >
                    Red Velvet
                    </button>
                </div>
                </div>

            </div>
            )}

        {category === "icing" && (
          <div className="icing-options">
            
          </div>
        )}

        {category === "decor" && (
          <div className="decor-options">
            
          </div>
        )}

        {category === "fruit" && (
          <div className="fruit-options">
            
          </div>
        )}

        {category === "extra" && (
          <div className="extra-options">
            
          </div>
        )}
      </div>
    </div>
  );
}