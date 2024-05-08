import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./component/Category"
import Homepage from "./pages/Homepage"
import GifProvider from "./context/gif-context"
import Searchpage from "./pages/Searchpage"
//import dotenv from 'dotenv';
//dotenv.config();

function App() {


  return (

    <div className="bg-gray-900 w-full h-full text-white min-h-screen">
      <GifProvider>
        <BrowserRouter  >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/search/:query" element={<Searchpage />} />
            <Route path="/:type/:slug" element={<Category />} />
            <Route path="/favourites" element={<Category />} />
          </Routes>
        </BrowserRouter>
      </GifProvider>

    </div>

  )
}

export default App
