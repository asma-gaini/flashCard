import { Link } from "react-router-dom";
import "./displayFolderOset.css";

function SetsItem({ set }) {
  return (
    <div>
      <Link className="setBox" to="/">
        {set.setName}
      </Link>
    </div>
  );
}

export default SetsItem;
