import "./createFolder.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function CreateSet() {
  return (
    <div className="formBox ">
      <div className="containBox">
        <h1>Create new set:</h1>
        <br />
        <form action="">
          <h4>Folder name:</h4>
          <input type="text" placeholder="Plaese enter folder name  " />
          <h4>Description:</h4>
          <input type="text" placeholder="Add description...  " />
          <br />
          <Popup
            trigger={<button className="addCard">Add new card</button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">Welcome to GFG!!!</div>
                <div>
                  <button onClick={() => close()}>Close modal</button>
                </div>
              </div>
            )}
          </Popup>
          <br />
          <button className="createbtn" type="submit">
            Create set
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateSet;
