import { useParams } from "react-router-dom";
import { dataInformationSet } from "../../utils/constants";

function ListOfWord() {
  const { setId, songName } = useParams();
  const id = parseInt(setId);
  const name = songName;

  // console.log("name song:  " + name);
  // const S1 = console.log("s1:  " + dataInformationSet[id - 1].word);
  // const S2 = dataInformationSet[id - 1].word.map((song) => {
  //   const arr = Object.entries(song);
  //   console.log("s2:  " + arr);
  // });
  // const S3 = dataInformationSet[id - 1].word.map((song) =>
  //   Object.entries(song).map((songItem) => {
  //     songItem[0] === name && console.log("s3:   " + songItem[1]);
  //   })
  // );
  // const S4 = dataInformationSet[id - 1].word.map((song) =>
  //   Object.entries(song).map((songItem) => {
  //     songItem[0] === name &&
  //       console.log(
  //         "s4: s3Array:   " +
  //           Object.entries(songItem[1]) +
  //           " / lenght: " +
  //           Object.entries(songItem[1]).length
  //       );
  //   })
  // );
  // const S5 = dataInformationSet[id - 1].word.map((song) =>
  //   Object.entries(song).map((songItem) => {
  //     songItem[0] === name &&
  //       Object.entries(songItem[1]).map(([word, mean]) =>
  //         console.log(
  //           "s5:  " +
  //             [word, mean] +
  //             "  / s5 wordName:  " +
  //             word +
  //             "  / s5 wordMean:  " +
  //             mean
  //         )
  //       );
  //   })
  // );

  const selectedSet = dataInformationSet.find((s) => s.setId == id);
  const selectedWord = selectedSet.word.find((w) => w.songName === songName);
  const selectedLyrics = selectedWord[selectedWord.songName];

  const parsed = Object.entries(selectedLyrics).map(([key, value]) => ({
    key,
    value,
  }));

  console.log({
    dataInformationSet,
    id,
    parsed,
  });

  return (
    //     <div>
    //       {dataInformationSet[id - 1].word.map((song) =>
    //         Object.entries(song).map((songItem) => {
    //           songItem[0] === name &&
    //             Object.entries(songItem[1]).map(([word, mean]) => (
    //               <p key={word}>
    //                 wordName: {word} & wordMean: {mean}
    //               </p>
    //             ));
    //         })
    //       )}
    // <p>{name}</p>
    //       {/* {S5.map((word) => (
    //         <p>
    //           wordkey: {word[0]} & wordMean: {word[1]}
    //         </p>
    //       ))} */}
    //     </div>

    <div>
      {parsed?.map((d) => (
        <p>
          Key : {d.key} and value : {d.value}
        </p>
      ))}
      <p>{name}</p>
    </div>
  );
}

export default ListOfWord;
