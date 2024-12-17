import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
<div>
<BrowserRouter>
<NavBar></NavBar>
<Routes>

  <Route path="/categoria/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a COMPRAGAMER"} />} />
  <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a COMPRAGAMER"} />} />
  <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
  <Route path="*" element={ <div>Error 404</div> } />
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
