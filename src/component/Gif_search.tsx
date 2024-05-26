import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const Gif_search = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const searchGIFs = async () => {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-14 py-2 text-xl text-black rounded-bl rounded-tl border border-gray-300 outline-none"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-16 mr-2 top-1/2 transform -translate-y-1/2 p-1"
        >
          <HiMiniXMark size={22} />
        </button>
      )}
      <button
        onClick={searchGIFs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={25} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default Gif_search;
