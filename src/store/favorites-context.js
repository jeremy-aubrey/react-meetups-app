import { createContext, useState }  from 'react';

const FavoritesContext = createContext({ 
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = () => {}
    const removeFavoriteHander = () => {}
    const itemIsFavtorite = () => {}
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}