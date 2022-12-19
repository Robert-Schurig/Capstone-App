import {useContext} from "react";
import Image from "next/legacy/image";
import {ImageContext} from "../../components/ImageContext";
import styled from "styled-components";

export default function Favorites() {
  const {favorites} = useContext(ImageContext);

  return (
    <>
      {favorites.map(favorite => {
        return (
          <>
            <FavoriteContainer key={favorite.id}>
              <Image
                src={favorite.edmPreview[0]}
                alt={favorite.title}
                // height={300}
                // width={500}
                objectFit="contain"
                fill="true"
                layout="fill"
              />
            </FavoriteContainer>
            <Details>
              <p>{favorite.title}</p>
              <p>{favorite.dcCreator}</p>
            </Details>
          </>
        );
      })}
    </>
  );
}

const FavoriteContainer = styled.div`
  display: block;
  position: relative;
  height: 400px;
  width: 100%;

  overflow: hidden;
`;

// const Display = styled.article`
//   position: relative;
// `;

const Details = styled.article`
  display: block;
  height: 110px;
  margin-bottom: 25px;
`;
