import styled from "styled-components";
import {useState, useEffect} from "react";
import Image from "next/legacy/image";

export default function Favorites(favorite) {
  const [favImages, setFavImages] = useState([]);

  useEffect(() => {
    if (favorite.length === 0) {
      setFavImages([]);
    } else {
      fetch(
        "https://api.europeana.eu/record/v2/search.json?media=true&profile=minimal&query=Painting&theme=art&reusability=open&qf=IMAGE_COLOUR:%22TRUE%22&rows=100&wskey=hanozzle"
      )
        .then(response => response.json())
        .then(favImages => setFavImages(favImages));
      console.log(response);
    }
  }, [favorite]);

  return (
    <div>
      {favImages.map(favImage => {
        return (
          <article key={favImage.index}>
            <p>{favImage.title}</p>
            <Image
              key={favImage.index}
              src={favImage.edmPreview[0]}
              alt={favImage.title[0]}
              fill="true"
              objectFit="contain"
            />
          </article>
        );
      })}
    </div>
  );
}
