import { useState } from "react";
import "./CakeOptionsPanel.css";

export default function CakeOptionsPanel() {
  const [category, setCategory] = useState("flavor");

  return (
    <div className="options-panel">
      <div className="category-row">
        <button className="category-btn" className={`category-btn ${category === "flavor" ? "active" : ""}`} onClick={() => setCategory("flavor")}>Flavor</button>
        <button className="category-btn" className={`category-btn ${category === "icing" ? "active" : ""}`} onClick={() => setCategory("icing")}>Icing</button>
        <button className="category-btn" className={`category-btn ${category === "decor" ? "active" : ""}`} onClick={() => setCategory("decor")}>Decor</button>
        <button className="category-btn" className={`category-btn ${category === "fruit" ? "active" : ""}`} onClick={() => setCategory("fruit")}>Fruit</button>
        <button className="category-btn" className={`category-btn ${category === "extra" ? "active" : ""}`} onClick={() => setCategory("extra")}>Extras!</button>
      </div>

      <div className="options-area">
        {category === "flavor" && (
          <div className="flavor-options">
            
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