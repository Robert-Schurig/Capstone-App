import {createContext, useEffect, useState} from "react";

const ImageContext = createContext();

const ImageContextProvider = props => {
  const [favorites, setFavorites] = useState([]);

  // add function with a proper check if the favorite to be stored is already in your state variable
  const addFavorite = favorite => {
    const savedFavorite = favorites.find(fav => fav.id === favorite.id);
    console.log(savedFavorite);
    if (savedFavorite) {
      return;
    }

    // if (inFavorites.length === 0 || favorites.length === 0) {
    setFavorites([...favorites, favorite]);
    // }
  };

  // this useEffect is just for testing purposes as it logs your favorites state variable...
  useEffect(() => {
    if (favorites.length > 0) {
      console.log("favorites in ImageContext: ", favorites);
    } else {
      console.log("favorites not set");
    }
  }, [favorites]);

  return (
    <ImageContext.Provider value={{favorites, addFavorite}}>
      {props.children}
    </ImageContext.Provider>
  );
};

export {ImageContext, ImageContextProvider};
