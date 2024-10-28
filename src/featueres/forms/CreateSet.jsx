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
                <div className="content">
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
                          <input type="text" placeholder="word" />
                        </td>
                        <td>
                          <input type="text" placeholder="mean" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
