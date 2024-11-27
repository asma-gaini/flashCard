import { Link } from "react-router-dom";
import "./displayFolderOset.css";

function SetsItem({ set }) {
  //biaym az esm set b folder beresim
  return (
    <div>
      <Link className="setBox" to={`./set/${set.setId}/${set.setName}`}>
        {set.setName}
      </Link>
    </div>
  );
}

export default SetsItem;
