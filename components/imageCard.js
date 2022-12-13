import {useState, useEffect} from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import deleteIcon from "../public/deleteIcon.svg";
import deleteIconFilled from "../public/deleteIconFilled.svg";
import likeIcon from "../public/likeIcon.svg";
import likeIconFilled from "../public/likeIconFilled.svg";
import {useContext} from "react";
import {ImageContext} from "./ImageContext";

export default function ImageCard() {
  // const {setFavorite} = useContext(ImageContext);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [displayImage, setDisplayImage] = useState(null);
  const {addFavorite} = useContext(ImageContext);

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

  console.log(displayImage);
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
        <DeleteButton>
          <Image
            className="inactiveicon"
            src={deleteIcon}
            alt="Delete Icon"
            height={100}
            width={100}
          />
          <Image
            className="activeicon"
            src={deleteIconFilled}
            alt="Delete Icon Filled"
            height={100}
            width={100}
          />
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

  .activeicon {
    display: none;
  }
  /*
  :hover .inactiveicon {
    visibility: hidden;
  }
  .activeicon {
    visibility: visible;
  } */
`;

const LikeButton = styled.button`
  border: none;
  background: none;
`;

/* .icon:nth-child(1) {
    :hover {
      display: none;
    }
  }
  .icon:nth-child(2) {
    :hover {
      display: block;
    }
  } */
