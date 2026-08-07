import { useState } from "react";
import supabase from "../supabaseClient";

export default function Share({ cakeData }) {
  const [link, setLink] = useState("");

  async function handleShare() {
    const { data, error } = await supabase
      .from("cakes")
      .insert(cakeData)
      .select();

    if (error) {
      console.error(error);
      return;
    }

    const id = data[0].id;
    const url = `${window.location.origin}/cake/${id}`;
    setLink(url);
  }

  return (
    <div className="share-box">
      {!link && (
        <button className="share-btn" onClick={handleShare}>
          Share Cake
        </button>
      )}

      {link && (
        <div className="share-result">
          <p>Your link:</p>
          <input value={link} readOnly />
        </div>
      )}
    </div>
  );
}
