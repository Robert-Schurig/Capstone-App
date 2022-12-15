import {useState, useEffect} from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import {useContext} from "react";
import {ImageContext} from "./ImageContext";

export default function ImageCard() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [displayImage, setDisplayImage] = useState(null);
  const [reload, setReload] = useState(true);
  const [random, setRandom] = useState(0);
  const {addFavorite} = useContext(ImageContext);

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

          setReload(!reload);
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
  }, []);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * dataArray.length));
  }, [reload]);

  useEffect(() => {
    setDisplayImage(dataArray[random]);
  }, [random]);

  if (isLoading) return <p>Loading...</p>;
  if (!dataArray) return <p>No data</p>;
  return (
    <div>
      {displayImage && (
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
          <Details>
            <p>{displayImage.title[0]}</p>
            <p>{displayImage.dcCreator}</p>
          </Details>
        </>
      )}

      <ButtonContainer>
        <ReloadButton
          onClick={() => {
            setReload(!reload);
          }}
        >
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
        </ReloadButton>

        <LikeButton
          onClick={() => {
            addFavorite(displayImage);
            setReload(!reload);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
            />
          </svg>
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

const Details = styled.div`
  display: block;
  height: 110px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 60px;
`;

const ReloadButton = styled.button`
  border: none;
  background: none;

  path {
    transition: 0.5s;
  }
  transition: 0.5s;
  :active {
    transform: scale(0.8);
    transition: 0.5s;
    path {
      fill: darkviolet;
      transition: 0.5s;
    }
  }
`;

const LikeButton = styled.button`
  border: none;
  background: none;
  path {
    transition: 0.5s;
  }
  transition: 0.5s;
  :active {
    transform: scale(0.8);
    transition: 0.5s;
    path {
      stroke: darkviolet;
      transition: 0.5s;
    }
  }
`;