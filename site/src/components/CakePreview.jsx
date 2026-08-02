import "./CakePreview.css";
import plate from "../assets/plate.png";

export default function CakePreview({ tier, flavor, icing, decor, fruit, extras} ) {
  return (
    <div className="cake-preview">
      <div className="plate-wrapper">
        <img src={plate} className="plate" />

        <div className="cake-stack">
          {Array.from({ length: tier })
            .map((_, i) => i + 1)   
            .reverse()             
            .map((layer) => (
              <img
                key={layer}
                src={`src/assets/flavors/${flavor}-tier-${layer}.png`}
                className={`cake-layer-${layer}`}
              />
            ))}
        </div>

      </div>
    </div>

  );
}
