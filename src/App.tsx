import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./pages/Category"
import Homepage from "./pages/Homepage"
import GifProvider from "./context/gif-context"
import Searchpage from "./pages/Searchpage"
import Single_gif_page from "./pages/Single_gif_page"



function App() {


  return (

    <div className="bg-gray-900 w-full h-full text-white min-h-screen">
      <GifProvider>
        <BrowserRouter  >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/search/:query" element={<Searchpage />} />
            <Route path="/:type/:slug" element={<Single_gif_page />} />
            <Route path="/favourites" element={<Category />} />
          </Routes>
        </BrowserRouter>
      </GifProvider>

    </div>

  )
}

export default App
