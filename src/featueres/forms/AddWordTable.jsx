import { useState } from "react";
import "./AddWordTable.css";

function AddWordTable({ closeAddWord, openTable }) {
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setWord("");
    setMean("");
  }
  return (
    <div className="bg">
      <div
        className={`popup ${openTable === false ? "hidePopup" : "showPopup"}`}
      >
        <div className="displayAddCard">
          <button type="button" className="closeBtn" onClick={closeAddWord}>
            ×
          </button>
          <table>
            <thead>
              <tr>
                <th scope="col">Word</th>
                <th scope="col">Mean</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="inputBox"
                    type="text"
                    placeholder="word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputBox"
                    type="text"
                    placeholder="mean"
                    value={mean}
                    onChange={(e) => setMean(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="addWordBtn" type="submit" onClick={handleSubmit}>
            add word
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWordTable;
