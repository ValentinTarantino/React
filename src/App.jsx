import './App.css'
import NavBar from  '../components/navbar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


function App() {


  return (
<div>
  <NavBar></NavBar>
  <ItemListContainer greeting="¡Bienvenido a Compra Gamer!"  />
</div>
  )
}

export default App
