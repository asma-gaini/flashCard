import { Link, useParams } from "react-router-dom";
import { dataInformationSet } from "../../utils/constants";
import "./listOfSong.css";

function ListOfSong() {
  const { setId } = useParams();
  console.log(typeof setId);
  const id = parseInt(setId);
  console.log(typeof id);

  return (
    <div className="songsBox">
      {dataInformationSet.map(
        (setItem) =>
          setItem.setId === id &&
          setItem.word.map((song) => (
            <div>
              <Link className="songBox" to="/">
                {song.songName}
              </Link>
            </div>
          ))
      )}
    </div>
  );
}

export default ListOfSong;
