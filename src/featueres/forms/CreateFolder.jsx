import { dataInformationSet } from "../../utils/constants";
import "./createFolder.css";

function CreateFolder() {
  return (
    <div className="formBox ">
      <div className="containBox">
        <h1>Create new folder:</h1>
        <br />
        <form action="">
          <h4>Folder name:</h4>
          <input type="text" placeholder="Plaese enter folder name  " />
          <h4>please enter your set:</h4>
          <select id="sets">
            {dataInformationSet.map((set) => (
              <option key={set.setName}>{set.setName}</option>
            ))}
          </select>
          <h4>Description:</h4>
          <input type="text" placeholder="Add description...  " />
          <br />
          <button className="createbtn" type="submit">Create folder</button>
        </form>
      </div>
    </div>
  );
}

export default CreateFolder;
