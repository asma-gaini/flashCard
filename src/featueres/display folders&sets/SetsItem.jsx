import { Link } from "react-router-dom";
import "./displayFolderOset.css";

function SetsItem({ set, folder }) {
  // console.log(folder.folderName);
  return (
    <div>
      {/* <p>{folder.folderName}</p> */}
      <Link
        className="setBox"
        to={`folder/${folder.folderId}/set/${set.setId}/${set.setName}`}
      >
        {set.setName}
      </Link>
    </div>
  );
}

export default SetsItem;
