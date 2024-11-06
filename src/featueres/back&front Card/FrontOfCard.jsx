import { useState } from "react";
import { Link } from "react-router-dom";

function FrontOfCard({ word, mean }) {
  const [showMean, setShowMean] = useState(false);

  function showingMean(mean) {
    if (showMean) {
      setShowMean(false);
    } else {
      setShowMean(true);
    }
  }

  return (
    <div>
      <button onClick={() => showingMean(mean)}>{word}</button>
      {showMean === true && <p>{mean}</p>}
    </div>
  );
}

export default FrontOfCard;
