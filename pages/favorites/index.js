import {useContext} from "react";
import {ImageContext} from "../../components/ImageContext";
import styled from "styled-components";

export default function Favorites() {
  const {toggleFavorite, favorites} = useContext(ImageContext);

  return (
    <>
      {favorites.map(favorite => {
        console.log(favorite.id);
        return (
          <FavoriteContainer key={favorite.id}>
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
            </ImageContainer>
            <Details>
              <p>{favorite.title}</p>
              <p>{favorite.dcCreator}</p>
            </Details>
          </FavoriteContainer>
        );
      })}
      <Spacer></Spacer>
    </>
  );
}

const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
  width: 100%;
  align-items: center;
  overflow: hidden;
  border-radius: 25px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  display: flex;

  align-self: flex-end;

  width: 100%;
  justify-content: flex-end;

  svg {
    width: 20%;
    margin: -2% -3% 0 0;

    path {
      transition: 0.5s;
    }
    transition: 0.5s;
    :active {
      transform: scale(0.8);
      transition: 0.5s;
      path {
        fill: var(--color7s);
        transition: 0.5s;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  margin: -2% auto 2% auto;
  position: relative;
`;

const FavImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 2px 8px black;
`;

const Details = styled.article`
  margin: 0 4%;
  font-family: "AnotherTypewriter";
`;

const Spacer = styled.div`
  padding-bottom: 16%;
`;
