import {useContext} from "react";
import {ImageContext} from "../../components/ImageContext";
import styled from "styled-components";

export default function Favorites() {
  const {toggleFavorite, favorites} = useContext(ImageContext);
  console.log(favorites);

  return (
    <>
      {favorites.map(favorite => {
        console.log(favorite.id);
        return (
          <CardContainer key={favorite.id}>
            <FavoriteContainer key={favorite.id}>
              <ImageContainer>
                <FavImage
                  src={favorite?.edmPreview[0]}
                  alt={favorite.title}
                  np
                  objectFit="contain"
                  fill="true"
                  layout="fill"
                  position="relative"
                />
                <DeleteButton onClick={() => toggleFavorite(favorite)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
                    />
                  </svg>
                </DeleteButton>
              </ImageContainer>
              <Details>
                <p>{favorite.title}</p>
                <p>{favorite.dcCreator}</p>
              </Details>
            </FavoriteContainer>
          </CardContainer>
        );
      })}
      <Spacer></Spacer>
    </>
  );
}
const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 4%;
  overflow: hidden;
`;

const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 4px solid black;

  width: 100%;
  align-items: center;
  border-radius: 25px;
  padding-top: 36px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: -62px;
  right: -30px;
  width: 80px;
  svg {
    padding: -10px;
  }

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

const FavImage = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin: 5% auto;
  position: relative;
`;

const Details = styled.article`
  height: 110px;
  margin: 0 4%;
`;

const Spacer = styled.div`
  padding-bottom: 16%;
`;
