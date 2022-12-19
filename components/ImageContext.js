import {createContext} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const ImageContext = createContext();

const ImageContextProvider = props => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // add function with a proper check if the favorite to be stored is already in your state variable
  const addFavorite = favorite => {
    const savedFavorite = favorites.find(fav => fav.id === favorite.id);

    if (savedFavorite) {
      return;
    }

    setFavorites([...favorites, favorite]);
    // }
  };

  return (
    <ImageContext.Provider value={{favorites, addFavorite}}>
      {props.children}
    </ImageContext.Provider>
  );
};

export {ImageContext, ImageContextProvider};
