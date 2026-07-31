import "./CakePreview.css";
import plate from "../assets/pins/blank.png";

export default function CakePreview({ tier, flavor, icing, decor, fruit, extras} ) {
  return (
    <div className="cake-preview">
      <img src={plate} className="plate" />
    </div>
  );
}
