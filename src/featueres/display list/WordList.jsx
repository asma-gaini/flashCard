import { useParams } from "react-router-dom";
import { dataInformation } from "../../utils/constants";
import "./listOfSong.css";
import FrontOfCard from "../back&front Card/FrontOfCard";

function WordList() {
  const { folderId, setId, setName } = useParams();
  const fId = parseInt(folderId);
  const sId = parseInt(setId);
  const songName = setName;

  const selectedFolder = dataInformation.find((f) => f.folderId === fId);
  const SelectedSet = selectedFolder.set.find((s) => s.setId == sId);
  const words = Object.entries(SelectedSet.word).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <div>
      {/* <p>folder id: {fId}</p>
      <p>{songName}</p>
      <p>set id: {sId}</p> */}
      {words?.map((d) => (
        <FrontOfCard key={d.key} word={d.key} mean={d.value} />
      ))}
    </div>
  );
}

export default WordList;
