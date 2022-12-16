import {useContext} from "react";
import Image from "next/legacy/image";
import {ImageContext} from "../../components/ImageContext";

export default function Favorites() {
  const {favorites} = useContext(ImageContext);

  return (
    <div>
      {favorites &&
        favorites.map(favorite => {
          return (
            <article key={favorite.id}>
              <p>{favorite.title}</p>
              <Image
                src={favorite.edmPreview[0]}
                alt={favorite.title}
                height={300}
                width={500}
              />
            </article>
          );
        })}
    </div>
  );
}
