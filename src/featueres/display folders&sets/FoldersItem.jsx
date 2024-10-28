import { Link } from "react-router-dom";
import "./displayFolderOset.css";

function FoldersItem({ folder }) {
  return (
    <div>
      <Link className="folderBox" to="/">{folder.name}</Link>
    </div>
  );
}

export default FoldersItem;
