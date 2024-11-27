import { Link, useParams } from "react-router-dom";
import { dataInformationSet } from "../../utils/constants";
import "./listOfSong.css";

function ListOfSong() {
  const { setId } = useParams();
  // console.log(typeof setId);
  const id = parseInt(setId);
  // console.log(typeof id);

  return (
    <div className="songsBox">
      {dataInformationSet.map(
        (setItem) =>
          setItem.setId === id &&
          setItem.word.map((song) => (
            <div>
              {/* noghte aval address ru nazar vagarna address tu url 2 bar tekrar mishe va error mide bet */}
              <Link className="songBox" to={`/set/${setId}/${song.songName}`}>
                {song.songName}
              </Link>
            </div>
          ))
      )}
    </div>    
  );
}

export default ListOfSong;
