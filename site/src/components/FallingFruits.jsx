import strawberry from "../assets/fruits/strawberry.png";
import blueberry from "../assets/fruits/blueberry.png";
import banana from "../assets/fruits/banana.png";
import cherry from "../assets/fruits/cherry.png";
import orange from "../assets/fruits/orange.png";

import "./FallingFruits.css";

const fruits = [strawberry, blueberry, banana, cherry, orange];

export default function FallingFruits() {
  return (
    <div className="falling-fruits">
      {Array.from({ length: 30 }).map((_, i) => {
        const img = fruits[i % fruits.length];
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 4;
        const delay = Math.random() * 2;
        const size = 40 + Math.random() * 10;

        return (
          <img
            key={i}
            src={img}
            className="fruit"
            style={{
              left: `${left}vw`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              width: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
}
