import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import Gif from "../component/Gif";
import { HiMiniChevronUp, HiMiniChevronDown, HiMiniHeart } from 'react-icons/hi2';
import FollowOn from "../component/Follow_on";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { IoCodeSharp } from "react-icons/io5";

interface RouteParams {
  type: string;
  slug: any;
  [key: string]: string | undefined;
}

const contentType: string[] = ["Stickers", "Gif", "Text"];

const Single_gif_page = () => {
  const { gf } = GifState();
  const { type, slug } = useParams<RouteParams>();
  const [gif, setGif] = useState<any>({});
  const [relatedGif, setRelatedGif] = useState<any[]>([]);
  const [readMore, setReadMore] = useState(false);

  const { addToFavorites, favorites } = GifState();
  const shareGif = () => {};

  const EmbedGif = () => {};

  const fetchGif = async () => {
    const gifId = slug.split("-");
    const { data: gifData } = await gf.gif(gifId[gifId.length - 1]);
    const { data: relatedData } = await gf.related(gifId[gifId.length - 1], {
      limit: 10,
    });
    setGif(gifData);
    setRelatedGif(relatedData);
  };

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    fetchGif();
  }, [type, slug]);

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <div>
            <div className="flex gap-1 ">
              <img src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">
                  {gif?.user?.display_name}
                </div>
                <div className="faded-text">
                  @{gif?.user?.username}
                </div>
              </div>
            </div>
          </div>
        )}
        {gif?.user?.description && (
          <p className="py-4 whitespace-pre-line text-sm text-gray-400">
            {readMore ? gif?.user?.description : `${gif?.user?.description.slice(0, 100)}...`}
            <div className="flex items-center faded-text cursor-pointer" onClick={() => setReadMore(!readMore)}>
              {!readMore ? (
                <>
                  Read less <HiMiniChevronUp size={20} />
                </>
              ) : (
                <>
                  Read more <HiMiniChevronDown size={20} />
                </>
              )}
            </div>
          </p>
        )}
        <FollowOn />
        <div className="divider"></div>
        {gif?.source && (
          <div className="flex items-center text-sm font-bold gap-1">
            <HiOutlineExternalLink size={25} />
            <a href={gif.source} target="_blank" className="truncate">
              {gif.source}
            </a>
          </div>
        )}
      </div>
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div>{gif.title}</div>
            <Gif gif={gif} hover={false} />
            <div className="flex sm:hidden gap-1">
              <img src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">
                  {gif?.user?.display_name}
                </div>
                <div className="faded-text">
                  @{gif?.user?.username}
                </div>
              </div>
              <button className="ml-auto" onClick={shareGif}>
                <FaPaperPlane size={25} />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-5 mt-6"></div>
          <button onClick={() => addToFavorites(gif.id)}
            className="flex gap-5 items-center font-bold text-lg">
            <HiMiniHeart size={30} className={`${favorites.includes(gif.id) ? "text-red-500" : ""}`} />
            Favourite
          </button>
          <button onClick={shareGif} className="flex gap-6 items-center font-bold text-lg">
            <FaPaperPlane size={30} />
            Share
          </button>
          <button onClick={EmbedGif} className="flex gap-6 items-center font-bold text-lg">
            <IoCodeSharp size={30} />
            Embed
          </button>
        </div>
        <div>
          <span className="font-extrabold">Related GIFs</span>
          <div className="columns-2 md:columns-3 gap-2">
            {relatedGif.map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_gif_page;
