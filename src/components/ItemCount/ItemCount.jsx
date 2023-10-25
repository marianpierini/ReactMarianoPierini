import { useState } from "react";
import classes from "./ItemCount.module.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity,setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity + 1)}
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div >
        <div className={classes.botonera}>
            <button className={classes.boton} onClick={decrement} >-</button>
            <h4>{quantity}</h4>
            <button className={classes.boton} onClick={increment} >+</button>
            
        </div>
        <div className={classes.botonera}> 
         <button className={classes.boton} onClick={()=> onAdd(quantity)} disable={!stock}>Agregar al Carrito</button>
        </div>
        </div>
    )

}

export default ItemCount