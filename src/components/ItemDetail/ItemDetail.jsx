import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { createContext, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id,nombre, precio,stock,img, descripcion, }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, nombre, precio
    }
    addItem(item, quantity)

  }
  
    return (
      <div className={classes.centrar}>
        <div className={classes.columna}>
            <div> 
                <h2>
                    {nombre}
                </h2>
            </div>
             <div>
               <img className= {classes.imagen} src={img} alt={img} />
             </div>
               <div>
                
                <h3>Precio: ${precio}</h3>
                <h4>{descripcion}</h4>
                
              </div>
                <footer>
                  { quantityAdded > 0 ? 
                  <>
                  <Link className={classes.boton} to= "/cart">Terminar compra</Link>
                  <Link className={classes.boton} to= "/">Seguir Comprando</Link>
                  </>
                                    
                  : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                  }
                </footer>
                    
        </div>
      </div>
    )
}

export default ItemDetail