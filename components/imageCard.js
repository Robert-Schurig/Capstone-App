import {useState, useEffect} from "react";
import Image from "next/image";

export default function ImageCard() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [displayImage, setDisplayImage] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.europeana.eu/record/v2/search.json?media=true&profile=minimal&query=Painting&theme=art&reusability=open&qf=IMAGE_COLOUR:%22TRUE%22&rows=100&wskey=hanozzle"
    )
      .then(res => res.json())
      .then(serverData => {
        setDataArray(serverData.items);
        setLoading(false);
        setDisplayImage(randomizeImage(serverData.items));
      });
  }, []);
  console.log(dataArray);

  function randomizeImage(dataArray) {
    const randomIndex = Math.round(Math.random() * dataArray.length);
    const randomImage = dataArray[randomIndex];
    return randomImage;
  }

  if (isLoading) return <p>Loading...</p>;
  if (!dataArray) return <p>No data</p>;
  return (
    <>
      {displayImage ? (
        <div>
          <Image
            key={displayImage.index}
            alt={displayImage.title[0]}
            src={displayImage.edmPreview[0]}
            width={800}
            height={500}
          />
          <p>{displayImage.title[0]}</p>
          <p>{displayImage.dcCreator}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
