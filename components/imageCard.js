import {useState, useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";

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
        <>
          <ImageContainer>
            <Image
              key={displayImage.index}
              alt={displayImage.title[0]}
              src={displayImage.edmPreview[0]}
              fill="true"
              objectFit="contain"
            />
          </ImageContainer>
          <div>
            <p>{displayImage.title[0]}</p>
            <p>{displayImage.dcCreator}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;
