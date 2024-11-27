import { Link, useParams } from "react-router-dom";
import { dataInformation } from "../../utils/constants";
import "./displayFolderOset.css";

function FolderItem() {
  const { folderId } = useParams();
  const fId = parseInt(folderId);
  const selectedFolder = dataInformation.find((f) => f.folderId === fId);
  console.log(selectedFolder);

  return (
    <div>
      {selectedFolder.set.map((set) => (
        <Link className="setBox" to={`./set/${set.setId}/${set.setName}`}>
          {set.setName}
        </Link>
      ))}
    </div>
  );
}

export default FolderItem;
