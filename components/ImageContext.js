import {createContext} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const ImageContext = createContext();

const ImageContextProvider = props => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = favorite => {
    if (favorites.includes(favorite)) {
      setFavorites(favorites.filter(item => item.id !== favorite.id));
      // If(item.id === favorite.id) {return false}
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  return (
    <ImageContext.Provider value={{favorites, toggleFavorite}}>
      {props.children}
    </ImageContext.Provider>
  );
};

export {ImageContext, ImageContextProvider};
