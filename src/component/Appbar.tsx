import { useState } from "react"
import { DiVim } from "react-icons/di"
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
const Appbar = () => {
  const [categories, setCategories] = useState<[]>([])
  const [showCategories, setShowCategories] = useState<boolean>()
  return (
    <nav>
      <div className="relative flex gap-4 p-4 justify-between items-center mb-2">

        <Link className="flex gap-2 justify-center items-center p-2" to="/" >
          <img className="w-8 " src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gVaKwk4G4WuuZid3EQQ_3wAAAA%26pid%3DApi&f=1&ipt=b04a63d456a42d63ee369706f6da941b48a258c38536854b1e2356edb622e7e3&ipo=images" alt="logo" />
          <h1 className="text-5xl font-bold tracking-light cursor-pointer">GIPHY</h1>
        </Link>
        {/* */}
        <div className="flex text-md font-bold gap-2 items-center ">

    
          <Link to="/" className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">Reactions</Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`} />

          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favorites" >Favorite GIFS</Link>
          </div>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight size={35} className="text-sky-400 block lg:hidden " />

          </button>
          </div>
          {showCategories && (
            <div className="absolute right-0 top-24 px-10 pt-6 pb-9 w-full gradient z-20" >
              <span> Categories</span>
              <hr />
              <div>
                <Link className="font-bold" to="/">Reactions</Link>
              </div>

            </div>
          )}

       

      </div>                                       
    </nav>
  )
}

export default Appbar