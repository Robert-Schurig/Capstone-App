import {createContext, useState} from "react";

export const ImageContext = createContext(null);

export function addFavorite(likeImage) {
  const [favorite, setFavorite] = useState([]);

  if (favorite.length === 0 || !favorite.filter(likeImage)) {
    setFavorite([...favorite, likeImage]);
    // const newFavorite = favorite.filter(favIndex => favIndex !== index);
    // setFavorite(newFavorite);
  }

  function addFavorite(likeImage) {
    if (favorite.includes(likeImage)) {
      const newFavorite = favorite.filter(favID => favID !== id);
      setFavorite(newFavorite);
    } else {
      setFavorite([...favorite, id]);
    }
  }
  const value = {likeImage};

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}

export default ImageContext;
