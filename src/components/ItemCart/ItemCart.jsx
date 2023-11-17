import classes from "./ItemCart.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({id, nombre, precio, quantity,}) => {
    const {removeItem} = useContext(CartContext)
   
return (
<div className= {classes.itemCart}>
    <p>ID: {id}</p>
    <h4>{nombre}</h4>
    <p>Unidades: {quantity}</p>
    <span>Precio: ${precio}</span>
    <h4>Total: ${(quantity*precio)}</h4>
    <button  className={classes.boton} onClick={() => removeItem(id)}>X</button>
</div>
)
}

export default ItemCart