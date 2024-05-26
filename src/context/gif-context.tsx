import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export  interface GifContextType {
    gf: any;
    gifs: any[];
    setGifs: React.Dispatch<React.SetStateAction<any[]>>;
    filter: any;
    setFilter: React.Dispatch<React.SetStateAction<any>>;
    favorites: any[];
    setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    addToFavorites : void ;
}

const Gifcontext = createContext<GifContextType | undefined>(undefined);

interface GifProviderProps {
    children: ReactNode;
}

const GifProvider = ({ children }: GifProviderProps) => {
    const [gifs, setGifs] = useState<any[]>([]);
    const [filter, setFilter] = useState<any>("gifs");
    const [favorites, setFavorites] = useState<any[]>([]);

    const addToFavorites = (id:any) => {
        if(favorites.includes(id)){
            const updatedFavourites = favorites.filter((itemId) => itemId !== id)
            localStorage.setItem('favoriteGIFs' , JSON.stringify(updatedFavourites))
            setFavorites(updatedFavourites)
        }else{
            const updatedFavourites = [...favorites] ;
            updatedFavourites.push(id);
            localStorage.setItem("favoriteGIFs" , JSON.stringify(updatedFavourites))
            setFavorites(updatedFavourites)
        }
    }
    useEffect(()=>{
        const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
        setFavorites(favorites)
    },[])
    // const apiKey = "qwKpUBGISX9SEZ5vH4jT0B2hzk7FOfaP";
    const gf:any = new GiphyFetch( apiKey );

    const gifContextValue: GifContextType = {
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        setFavorites ,
        addToFavorites ,
    };

    return <Gifcontext.Provider value={gifContextValue}>{children}</Gifcontext.Provider>;
};

export const GifState = () => {
    return useContext(Gifcontext)
}

export default GifProvider;
