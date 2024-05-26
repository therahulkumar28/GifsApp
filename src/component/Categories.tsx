import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import Gif from "./Gif";
import FollowOn from "./Follow_on";

const Categories = () => {
    const [Results, setResults] = useState<any[]>([]);
    const { gf } = GifState();
    const { category } = useParams();

    const fetchResults = async () => {
        const { data } = await gf.gifs(category, category);
        setResults(data);
    };

    useEffect(() => {
        fetchResults();
    }, [category]);

    return (
        <div className="flex flex-col sm:flex-row gap-5 my-4">
            <div className="sm:w-72 w-full">
                {Results.length > 0 && <Gif gif={Results[0]} hover={false} />}
                <span className="text-gray-400 text-sm pt-2">
                    Don&apos;t tell it to me, GIF it to me!
                </span>
                <FollowOn />
                </div>
                <div className="divider" />
                <div>
                    <h2 className="text-4xl pb-1 font-extrabold capitalize">
                        {category?.split("-").join("&")} GIFs
                    </h2>
                    <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
                        @{category}
                    </h2>
                    {Results.length > 0 && (
                        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                            {Results.slice(1).map((gif) => (
                                <Gif gif={gif} key={gif.id} />
                            ))}
                        </div>
                    )}
                </div>
           
        </div>
    );
};

export default Categories;
