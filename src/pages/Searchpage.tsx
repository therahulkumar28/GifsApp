import { useParams  } from "react-router-dom";
import Appbar from "../component/Appbar"
import Gif_search from "../component/Gif_search";
import { GifState } from "../context/gif-context";
import {useState , useEffect} from 'react'
import Filter_gif from "../component/Filter_gif";
import Gif from "../component/Gif";

const Searchpage = () => {
    const [searchResult , setSearchResult] = useState<any[]>([]);
    const {gf  , filter } = GifState();
    const {query} = useParams();
    const fetchSearchResults = async ()=>{
        const {data} = await gf.search(query,{
            sort : "relevant",
            lang : "en",
            type :filter,
            limit : 20 
        })
        setSearchResult(data);
        
    }
    useEffect ( ()=>{
        fetchSearchResults()
    }, [filter])
  return (
    <div >
        <Appbar/>
        <Gif_search/>
        <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
        <Filter_gif alignLeft={true} /> 
        {
            searchResult.length > 0 ? (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
                    {
                        searchResult.map((gif)=>(
                            <Gif gif={gif} key={gif.id} />
                        ))
                    }
                </div>
            ) :(
                    <span>No GIFs is found for{query}. Try searching for Stickers instead?</span>
            )
        }
    </div>
  )
}

export default Searchpage;