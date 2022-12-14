import {useState, useEffect} from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import likeIcon from "../public/likeIcon.svg";
import likeIconFilled from "../public/likeIconFilled.svg";
import {useContext} from "react";
import {ImageContext} from "./ImageContext";

export default function ImageCard() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [displayImage, setDisplayImage] = useState(null);
  const {addFavorite} = useContext(ImageContext);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getImages = async () => {
      try {
        const response = await fetch(
          "https://api.europeana.eu/record/v2/search.json?media=true&profile=minimal&query=Painting&theme=art&reusability=open&qf=IMAGE_COLOUR:%22TRUE%22&rows=100&wskey=hanozzle"
        );
        if (response.ok) {
          const serverData = await response.json();
          setDataArray(serverData.items);
          setLoading(false);
          setDisplayImage(randomizeImage(serverData.items));
        } else {
          throw new Error(
            "Fetch fehlgeschlagen mit Status: ${response.status}"
          );
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    getImages();
  }, [reload]);

  function randomizeImage(dataArray) {
    const randomIndex = Math.round(Math.random() * dataArray.length);
    const randomImage = dataArray[randomIndex];
    return randomImage;
  }

  if (isLoading) return <p>Loading...</p>;
  if (!dataArray) return <p>No data</p>;
  return (
    <div>
      {displayImage ? (
        <>
          <ImageContainer>
            <Image
              key={displayImage.index}
              alt={displayImage.title[0]}
              src={displayImage.edmPreview[0]}
              width={500}
              height={300}
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
        <DeleteButton onClick={() => setReload(!reload)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
            />
          </svg>
        </DeleteButton>

        <LikeButton onClick={() => addFavorite(displayImage)}>
          <Image src={likeIcon} alt="Like Icon" height={80} width={80} />
          <Image
            src={likeIconFilled}
            alt="Like Icon Filled"
            height={80}
            width={80}
          />
        </LikeButton>
      </ButtonContainer>
    </div>
  );
}

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 60px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
`;

const LikeButton = styled.button`
  border: none;
  background: none;
`;
