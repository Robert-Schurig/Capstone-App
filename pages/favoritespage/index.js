import {useContext} from "react";
import Image from "next/legacy/image";
import {ImageContext} from "../../components/ImageContext";

export default function FavoritesPage() {
  const {favorites} = useContext(ImageContext);
  console.log(favorites);
  return (
    // <p>Hallo</p>
    <div>
      {favorites.map(favorite => {
        return (
          <article key={favorite.id}>
            <p>{favorite.title}</p>
            <Image
              // key={index}
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
