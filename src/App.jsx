import { Route, Routes } from "react-router-dom"
import Category from "./pages/Category"
import SubCategory from "./pages/Subcategory"
import Offerings from "./pages/Offerings"




const App = () => {
  return (
    <Routes>
      <Route path='/category' element={<Category/>}/>
      <Route path='/category/:id' element={<SubCategory/>}/> //From category to sub-category
      <Route path='/subcategory/:id' element={<Offerings/>}/> //From the Sub-category page to the offerings page
      <Route path='/category/:id/offerings' element={<Offerings/>}/> //From the Category page directly to the offerings page bypassing sub-category
  </Routes>
  )
}

export default App
