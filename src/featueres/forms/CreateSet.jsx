import { useState } from "react";
import "./createFolder.css";
import AddWordTable from "./AddWordTable";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

function CreateSet() {
  const [folderName, setFolderName] = useState("");
  const [description, setDescription] = useState("");
  const [openTable, setOpenTable] = useState(false);

  function openAddWord(e) {
    e.preventDefault();
    setOpenTable(true);
  }

  function closeAddWord(e) {
    e.preventDefault();
    setOpenTable(false);
  }

  return (
    <>
      <div className="formBox ">
        <div className="containBox">
          <h1>Create new set:</h1>
          <br />
          <form action="">
            <h4>Folder name:</h4>
            <input
              type="text"
              placeholder="Plaese enter folder name  "
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
            <h4>Description:</h4>
            <input
              type="text"
              placeholder="Add description...  "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button className="addCard" onClick={openAddWord}>
              Add new card
            </button>

            <br />
            <button className="createbtn" type="submit">
              Create set
            </button>
          </form>
        </div>
      </div>
      <AddWordTable closeAddWord={closeAddWord} openTable={openTable} />
    </>
  );
}

export default CreateSet;
