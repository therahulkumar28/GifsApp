import { useState } from "react"
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2"
import {useEffect} from 'react'
import { Link } from "react-router-dom"
import { GifContextType, GifState } from "../context/gif-context"

const Appbar = () => {
  const [categories, setCategories] = useState<any[]>([])
  const [showCategories, setShowCategories] = useState<boolean>()

  const {gf , filter , setFilter , favorites ,setFavorites } = GifState<GifContextType>();

  const fetchGifCategories =async () => {
      const {data} = await gf.categories() ;
      setCategories(data)
  }
  useEffect(()=>{
    fetchGifCategories();
  },[])

  return (
    <nav>
      <div className="relative flex gap-4 p-4 justify-between items-center mb-2">

        <Link className="flex gap-2 justify-center items-center p-2" to="/" >
          <img className="w-8 " src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gVaKwk4G4WuuZid3EQQ_3wAAAA%26pid%3DApi&f=1&ipt=b04a63d456a42d63ee369706f6da941b48a258c38536854b1e2356edb622e7e3&ipo=images" alt="logo" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">GIPHY</h1>
        </Link>
      
        <div className="flex text-md font-bold gap-2 items-center ">
            {categories.slice(0,5)?.map((category:any)=>{
              return (
                <Link key={category.name} to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                >{category.name}</Link>
              );
            })}
    
          <Link to="/" className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">Reactions</Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`} />

          </button>
         { favorites.length>0 && 
          <div className="h-9 text-xs md:text-base bg-gray-700 pt-1 px-6 cursor-pointer rounded">
            <Link to="/favorites" >Favorite GIFs</Link>
          </div>
          }
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight size={35} className="text-sky-400 block lg:hidden " />

          </button>
          </div>
          {showCategories && (
            <div className="absolute right-0 top-24 px-10 pt-6 pb-9  mx-4 w-full gradient z-20" >
              <span className="text-3xl font-extrabold"> Categories</span>
              <hr className="bg-gray-100 opacity-50 my-5"/>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
               { 
               categories.map((category) =>{
                return(
                  <Link className="font-bold" key={category.name}  to={`/${category.name_encoded}`}>{category.name}</Link>
                )
               })
               
               
               }
              </div>

            </div>
          )}

       

      </div>                                       
    </nav>
  )
}

export default Appbar