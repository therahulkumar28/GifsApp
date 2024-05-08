import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, ReactNode, useContext, useState } from "react";

export  interface GifContextType {
    gf: any;
    gifs: any[];
    setGifs: React.Dispatch<React.SetStateAction<any[]>>;
    filter: any;
    setFilter: React.Dispatch<React.SetStateAction<any>>;
    favorites: any[];
    setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
}

const Gifcontext = createContext<GifContextType | undefined>(undefined);

interface GifProviderProps {
    children: ReactNode;
}

const GifProvider = ({ children }: GifProviderProps) => {
    const [gifs, setGifs] = useState<any[]>([]);
    const [filter, setFilter] = useState<any>("gifs");
    const [favorites, setFavorites] = useState<any[]>([]);

    const apiKey = "";
    const gf:any = new GiphyFetch( apiKey );

    const gifContextValue: GifContextType = {
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        setFavorites
    };

    return <Gifcontext.Provider value={gifContextValue}>{children}</Gifcontext.Provider>;
};

export const GifState = () => {
    return useContext(Gifcontext)
}

export default GifProvider;
