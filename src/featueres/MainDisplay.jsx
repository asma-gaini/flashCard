import { Link } from "react-router-dom";
import { dataInformationSet } from "../utils/constants";
import { dataInformationFolder } from "../utils/constants";
import FoldersItem from "./display folders&sets/FoldersItem";
import SetsItem from "./display folders&sets/setsItem";
import "./mainDisplay.css";

function MainDisplay() {
  return (
    <div className="mainDisplay">
      <h2 className="header">your folders:</h2>
      <div className="displayFolders">
        {dataInformationFolder.map((folder) => (
          <FoldersItem folder={folder} key={folder.name} />
        ))}
      </div>
      <Link to={"./createFolder"} className="createNew">
        Create new folder
      </Link>

      <hr className="hrLine" />

      <h2 className="header">your sets:</h2>
      <div className="displaySets">
        {dataInformationSet.map((set) => (
          <SetsItem set={set} key={set.setName} />
        ))}
      </div>
      <Link to={"./createSet"} className="createNew">
        Create new set
      </Link>
    </div>
  );
}

export default MainDisplay;
