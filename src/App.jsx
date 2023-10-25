import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
 

  return (
      <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting1={"Bienvenidos a Tienda Deportiva MDQ"} greeting2={"Productos Destacados"}/> }></Route>
          <Route path='/categoria/:productoCategoria' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/categoria/:productoCategoria/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h1>Pagina No Encontrada</h1>}></Route>
        </Routes>
        </BrowserRouter>
        
        
         
      </div>
      
       
      
      
  
    
  )
}

export default App
