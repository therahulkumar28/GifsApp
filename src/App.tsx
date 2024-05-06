import { BrowserRouter , Routes , Route } from "react-router-dom"
import Category from "./component/Category"
import Homepage from "./pages/Homepage"

function App() {
 

  return (
    <div  className="bg-gray-900 w-full h-full text-white min-h-screen">
       <BrowserRouter  >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:category" element={<Category/>} />
          <Route path="/search/:query" element={<Category/>} />
          <Route path="/:type/:slug" element={<Category/>} />
          <Route path="/favourites" element={<Category/>} />
        </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
