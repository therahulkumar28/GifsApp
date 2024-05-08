import Appbar from "../component/Appbar";
import Filter_gif from "../component/Filter_gif";
import Gif from "../component/Gif";
import Gif_search from "../component/Gif_search";
import { GifContextType, GifState } from "../context/gif-context";
import {useEffect } from 'react'


const Homepage = () => {
    const {gf, gifs , setGifs , filter} = GifState<GifContextType>();
    const fetchTrendingGIFs = async () => {
        const {data} = await gf .trending({
            limit:20,
            type : filter,
            rating : "g"
        })
        setGifs(data);
    }
    useEffect(()=>{
        fetchTrendingGIFs();
    } , [filter])
    return (
    <div className="bg-gray-900 w-full h-full text-white min-h-screen">
       <Appbar/>
       <Gif_search/>
       <Filter_gif showTrending/>
       <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 " >
        {
            gifs.map((gif:any)=>{
                return (<Gif gif={gif}  key={gif.title}/>)
            })        }
        
       </div>
        
    </div>
    )
}

export default Homepage;