import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Intro from "./pages/Intro.jsx";
import CakePage from "./pages/CakePage.jsx"
{/* import Flowers from "./pages/Flowers.jsx";
import Card from "./pages/Card.jsx";
import Gift from "./pages/Gift.jsx"*/}
import FinalPreview from "./pages/FinalPreview.jsx";
import CakeDisplayPage from "./pages/CakeDisplayPage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/cake" element={<CakePage />} />
      {/*<Route path="/flowers" element={<Flowers />} />
      <Route path="/card" element={<Card />} />
      <Route path="/gift" element={<Gift />} />
      */}
      <Route path="/share" element={<FinalPreview />} />
      <Route path="/cake/:id" element={<CakeDisplayPage />} />

    </Routes>
  </BrowserRouter>
);
