import { useParams } from "react-router-dom";
import { dataInformationSet } from "../../utils/constants";

function ListOfWord() {
  const { setId } = useParams();

  return (
    <div>
  
    
          {dataInformationSet.map(
            (setItem) =>
              setItem.setId === setId && setItem.word.map((song)=><p>
                {/* bayadye kar konm k ahanga ro neshon bede k ba click bere ro kalemat */}
              </p>)
          )}
    
      {setId}
    </div>
  );
}

export default ListOfWord;
