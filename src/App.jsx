import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from "react-toastify"
import Footer from './components/Footer/Footer';

function App() {
  return (
<div>
<BrowserRouter>
<CartProvider>
<NavBar></NavBar>
<ToastContainer theme="dark" position="bottom-center" />
<Routes>

  <Route path="/categoria/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a MUNDOGAMER"} />} />
  <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a MUNDOGAMER"} />} />
  <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="*" element={ <div>Error 404</div> } />
  </Routes>
  <Footer />
  </CartProvider>
  </BrowserRouter>
</div>
  )
}

export default App
