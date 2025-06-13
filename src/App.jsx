import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/banner'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from "react-toastify"
import Footer from './components/Footer/Footer';

function AppContent() {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      {location.pathname === "/" && (
        <h1 className="greeting">Bienvenidos a MUNDOGAMER</h1>
      )}
      <Banner />
      <ToastContainer theme="dark" position="bottom-center" />
      <Routes>
        <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={ <div>Error 404</div> } />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;