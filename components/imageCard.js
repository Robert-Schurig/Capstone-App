import {useState, useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import deleteIcon from "../public/deleteIcon.svg";
import likeIcon from "../public/likeIcon.svg";

export default function ImageCard() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [displayImage, setDisplayImage] = useState(false);
  const [favorite, setFavorite] = useState([]);

  function addFavorite(index) {
    if (favorite.includes(index)) {
      const newFavorite = favorite.filter(favIndex => favIndex !== index);
      setFavorite(newFavorite);
    } else {
      setFavorite([...favorite, index]);
    }
  }

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

  function randomizeImage(dataArray) {
    const randomIndex = Math.round(Math.random() * dataArray.length);
    const randomImage = dataArray[randomIndex];
    return randomImage;
  }

  if (isLoading) return <p>Loading...</p>;
  if (!dataArray) return <p>No data</p>;
  return (
    <main>
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

      <ButtonContainer>
        <Button>
          <Image
            src={deleteIcon}
            alt="Delete Icon"
            height={80}
            width={80}
            objectFit="contain"
          />
        </Button>

        <Button onClick={() => addFavorite(favorite)}>
          <Image
            src={likeIcon}
            alt="Like Icon"
            height={80}
            width={80}
            objectFit="contain"
          />
        </Button>
      </ButtonContainer>
    </main>
  );
}

const Main = styled.main`
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 60px;
`;

const Button = styled.button`
  border: none;
  background: none;
`;
