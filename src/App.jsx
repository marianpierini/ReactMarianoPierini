import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Contacto from './components/Contacto/Contacto'
function App() {
 

  return (
      <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting1={"Bienvenidos a Tienda Deportiva MDQ"} greeting2={"Nuestros productos"}/> }></Route>
          <Route path='/categoria/:productoCategoria' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/categoria/:productoCategoria/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h1>Pagina No Encontrada!!</h1>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>
        </CartProvider>
        </BrowserRouter>
        
        
         
      </div>
      
       
      
      
  
    
  )
}

export default App
