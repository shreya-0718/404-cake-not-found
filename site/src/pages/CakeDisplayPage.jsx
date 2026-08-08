import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import CakePreview from "../components/CakePreview";
import "./CakeDisplayPage.css";

export default function CakeDisplayPage() {
  const { id } = useParams();

  const [cake, setCake] = useState(null);
  const [view, setView] = useState("side");

  const [volume, setVolume] = useState(0);
  const [listening, setListening] = useState(false);

  const [candleLit, setCandleLit] = useState(true);
  const [blowing, setBlowing] = useState(false);

  const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp,mp4,webm}", {
    eager: true,
  });

  const getImage = (path) => images[`/src/assets/${path}`]?.default;

  useEffect(() => {
    supabase
      .from("cakes")
      .select("*")
      .eq("id", id)
      .then(({ data }) => setCake(data[0]));
  }, [id]);

  useEffect(() => {
    async function startMic() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const mic = audioContext.createMediaStreamSource(stream);
        mic.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        setListening(true);

        function checkVolume() {
          analyser.getByteFrequencyData(dataArray);
          const avg = dataArray.reduce((a, b) => a + b) / dataArray.length;
          setVolume(avg);
          requestAnimationFrame(checkVolume);
        }

        checkVolume();
      } catch (err) {
        console.error("Mic error:", err);
      }
    }

    startMic();
  }, []);

  useEffect(() => {
    if (!cake?.candle) return;
    if (!candleLit || blowing) return;

    if (volume > 10) {
      setBlowing(true);

      setTimeout(() => {
        setCandleLit(false);
        setBlowing(false);
      }, 4000);
    }
  }, [volume, candleLit, blowing, cake]);
  if (!cake) {
    return (
      <div className="centered">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="big-box">
      <div className="back-arrow-box">
        <img
          src={getImage("fruits/strawberry.png")}
          className="home-btn"
          alt="home"
          onClick={() => (window.location.href = "/cake")}
        />
      </div>

      <div className="final-preview">
        <div className={`cake-preview-wrapper ${view === "side" ? "down" : ""}`}>

          <div className={'cake-and-candle'}>
          {cake.candle && view=="side" && (
            <div className="candle-flame-wrapper">
              {candleLit && !blowing && (
                <>
                  <p className="blow-text">Blow into the mic to blow the candle!</p>
                  <video
                    src={getImage("candles/flame-loop.webm")}
                    autoPlay
                    loop
                    className={`candle-flame candle-${cake.tier}`}
                  />
                </>
              )}

              {blowing && (
                <>
                <p className="blow-text">Blow into the mic to blow the candle!</p>

                <video
                  src={getImage("candles/blowout.webm")}
                  autoPlay
                  className={`candle-flame candle-${cake.tier}`}
                />
                </>
              )}
            </div>
          )}

          <CakePreview
            tier={cake.tier}
            flavor={cake.flavor}
            icing={cake.icing}
            decor={cake.decor}
            fruit={cake.fruit}
            candle={cake.candle}
            view={view}
          />
        </div>
          <div className="view-toggle">
            <button
              className={view === "side" ? "active" : ""}
              onClick={() => setView("side")}
            >
              Side
            </button>

            <button
              className={view === "top" ? "active" : ""}
              onClick={() => setView("top")}
            >
              Top
            </button>
          </div>
        </div>

        <div className="card-message">
          {cake.card?.message}
        </div>
      </div>
    </div>
  );
}
