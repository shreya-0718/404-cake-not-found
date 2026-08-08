import { useState } from "react";
import "./CakeOptionsPanel.css";

export default function CakeOptionsPanel({tier, setTier, flavor, setFlavor, icing, setIcing, decor, setDecor, fruit, setFruit, candle, setCandle, view, setView, card, setCard}) {
  const [category, setCategory] = useState("flavor");

  const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
    eager: true,
  });

  const getImage = (path) => images[`${path}`]?.default;

  const toggleDecor = (item) => {
    if (decor.includes(item)) {
        setDecor(decor.filter((d) => d !== item));   
    } else {
        setDecor([...decor, item]);                  
    }
    };

  const candleImages = import.meta.glob(
    "/src/assets/candles/*.png",
    { eager: true }
  );

  const candles = Object.entries(candleImages)
  .filter(([path]) => !path.includes("all-candles-preview")) 
  .map(([path, module]) => {
    const file = path.split("/").pop();          
    const name = file.replace("-candle-removebg-preview.png", ""); 
    return { name, src: module.default };
  });


  return (
    <div className="options-panel">
      <div className="category-row">
        <button
            className={`category-btn ${category === "flavor" ? "active" : ""}`}
            onClick={() => {
            setCategory("flavor");
            setView("side");
            }}
        >
            Flavor
        </button>

        <button
            className={`category-btn ${category === "icing" ? "active" : ""}`}
            onClick={() => {
            setCategory("icing");
            setView("side");
            }}
        >
            Icing
        </button>

        <button
            className={`category-btn ${category === "decor" ? "active" : ""}`}
            onClick={() => {
            setCategory("decor");
            setView("side");
            }}
        >
            Decor
        </button>

        <button
            className={`category-btn ${category === "fruit" ? "active" : ""}`}
            onClick={() => {
            setCategory("fruit");
            setView("top");
            }}
        >
            Fruit
        </button>

        <button
            className={`category-btn ${category === "card" ? "active" : ""}`}
            onClick={() => {
            setCategory("card");
            }}
        >
            Card
        </button>
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
                        <img
                            src={getImage(`/src/assets/flavors/vanilla-tier-1.png`)}
                            className="button-cakes"
                        />
                        Vanilla
                    </button>

                    <button
                    className={`btn ${flavor === "chocolate" ? "active" : ""}`}
                    onClick={() => setFlavor("chocolate")}
                    >
                        <img
                            src={getImage(`/src/assets/flavors/chocolate-tier-1.png`)}
                            className="button-cakes"
                        />
                    Chocolate
                    </button>

                    <button
                    className={`btn ${flavor === "strawberry" ? "active" : ""}`}
                    onClick={() => setFlavor("strawberry")}
                    >
                        <img
                            src={getImage(`/src/assets/flavors/strawberry-tier-1.png`)}
                            className="button-cakes"
                        />
                    Me :)
                    </button>

                    <button
                    className={`btn ${flavor === "lemon" ? "active" : ""}`}
                    onClick={() => setFlavor("lemon")}
                    >
                        <img
                            src={getImage(`/src/assets/flavors/lemon-tier-1.png`)}
                            className="button-cakes"
                        />
                    Lemon
                    </button>

                    <button
                    className={`btn ${flavor === "redvelvet" ? "active" : ""}`}
                    onClick={() => setFlavor("redvelvet")}
                    >
                        <img
                            src={getImage(`/src/assets/flavors/redvelvet-tier-1.png`)}
                            className="button-cakes"
                        />
                    Red Velvet
                    </button>
                </div>
                </div>

            </div>
            )}

        {category === "icing" && (
          <div className="icing-options">
                <div className="section">
                <h3 className="section-title">Pick Icing Color</h3>

                <div className="buttons">
                    <button
                    className={`btn ${icing === "pink" ? "active" : ""}`}
                    onClick={() => setIcing("pink")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/pink-tier-1.png`)}
                            className="button-cakes"
                        />
                        Pastel Pink
                    </button>

                    <button
                    className={`btn ${icing === "blue" ? "active" : ""}`}
                    onClick={() => setIcing("blue")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/blue-tier-1.png`)}
                            className="button-cakes"
                        />
                        Pastel Blue
                    </button>

{/*reminder to change the colors of the ones below next time*/}
                    <button
                    className={`btn ${icing === "cream" ? "active" : ""}`}
                    onClick={() => setIcing("cream")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/cream-tier-1.png`)}
                            className="button-cakes"
                        />
                        Cream
                    </button>

                    <button
                    className={`btn ${icing === "purple" ? "active" : ""}`}
                    onClick={() => setIcing("purple")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/purple-tier-1.png`)}
                            className="button-cakes"
                        />
                        Lavender
                    </button>

                    <button
                    className={`btn ${icing === "green" ? "active" : ""}`}
                    onClick={() => setIcing("green")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/green-tier-1.png`)}
                            className="button-cakes"
                        />
                        Mint Green
                    </button>

                    <button
                    className={`btn ${icing === "yellow" ? "active" : ""}`}
                    onClick={() => setIcing("yellow")}
                    >
                        <img
                            src={getImage(`/src/assets/icing/yellow-tier-1.png`)}
                            className="button-cakes"
                        />
                        Lemon
                    </button>
                </div>
                </div>
          </div>
        )}

        {category === "decor" && (
          <div className="decor-options">
                <div className="section">
                <h3 className="section-title">Pick Decorations!</h3>

                <div className="buttons">
                    <button
                    className={`btn ${decor.includes("ruffles") ? "active" : ""}`}
                    onClick={() => toggleDecor("ruffles")}
                    >
                        <img
                            src={getImage(`/src/assets/decor/ruffles-tier-1.png`)}
                            className="button-cakes"
                        />
                        Ruffles
                    </button>

                    <button
                    className={`btn ${decor.includes("bottom-border") ? "active" : ""}`}
                    onClick={() => toggleDecor("bottom-border")}
                    >
                        <img
                            src={getImage(`/src/assets/decor/border-bottom.png`)}
                            className="button-cakes"
                        />
                        Bottom Border
                    </button>

                    <button
                    className={`btn ${decor.includes("border") ? "active" : ""}`}
                    onClick={() => toggleDecor("border")}
                    >
                        <img
                            src={getImage(`/src/assets/decor/border-tier-3.png`)}
                            className="button-cakes"
                        />
                        Upper Borders
                    </button>

                    <button
                    className={`btn ${decor.includes("roses") ? "active" : ""}`}
                    onClick={() => toggleDecor("roses")}
                    >
                        <img
                            src={getImage(`/src/assets/decor/roses-tier-2.png`)}
                            className="button-cakes"
                        />
                        Rosettes
                    </button>
                </div>
                </div>

                <div className="section">
                <h3 className="section-title">Pick your candle!!</h3>

               <div className="buttons">
                    {candles.map(c => (
                        <button
                        key={c.name}
                        className={`btn candle-btn ${candle === c.name ? "active" : ""}`}
                        onClick={() => setCandle(c.name)}
                        >
                        <img src={c.src} alt={c.name} className="candle-img" />
                        </button>
                    ))}
                </div>

                </div>
          </div>
        )}

        {category === "fruit" && (
          <div className="fruit-options">
                <div className="section">
                <h3 className="section-title">Pick a fruit topping!</h3>

                <div className="buttons">
                    <button
                    className={`btn ${fruit=="strawberry" ? "active" : ""}`}
                    onClick={() => setFruit("strawberry")}
                    >
                        <img
                            src={getImage(`/src/assets/fruits/strawberry.png`)}
                            className="button-cakes"
                        />
                        Strawberry
                    </button>

                    <button
                    className={`btn ${fruit=="blueberry" ? "active" : ""}`}
                    onClick={() => setFruit("blueberry")}
                    >
                        <img
                            src={getImage(`/src/assets/fruits/blueberry.png`)}
                            className="button-cakes"
                        />
                        Blueberry
                    </button>

                    <button
                    className={`btn ${fruit=="cherry" ? "active" : ""}`}
                    onClick={() => setFruit("cherry")}
                    >
                        <img
                            src={getImage(`/src/assets/fruits/cherry.png`)}
                            className="button-cakes"
                        />
                        Cherry
                    </button>

                    <button
                    className={`btn ${fruit=="banana" ? "active" : ""}`}
                    onClick={() => setFruit("banana")}
                    >
                        <img
                            src={getImage(`/src/assets/fruits/banana.png`)}
                            className="button-cakes"
                        />
                        Banana
                    </button>

                    <button
                    className={`btn ${fruit=="orange" ? "active" : ""}`}
                    onClick={() => setFruit("orange")}
                    >
                        <img
                            src={getImage(`/src/assets/fruits/orange.png`)}
                            className="button-cakes"
                        />
                        Orange
                    </button>
                    
                </div>
                </div>
          </div>
        )}

        {category === "card" && (
            <div className="card-options">
                <textarea
                className="card-textarea"
                placeholder="Write your card message..."
                value={card.message}
                onChange={(e) => setCard({ message: e.target.value })}
                />
            </div>
        )}

      </div>

    <div className="buttons">
    <button
    className={`btn ${view=="side" ? "active" : ""}`}
    onClick={() => setView("side")}
    >
        Side
    </button> 
    <button
    className={`btn ${view=="top" ? "active" : ""}`}
    onClick={() => setView("top")}
    >
        Top
    </button>        
    </div>
    </div>
    
  );
}