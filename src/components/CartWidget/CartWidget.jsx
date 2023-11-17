import classes from "./CartWidget.module.css"
import cart from "./assets/cart.png"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to= "/cart" >
        <div className={classes.borde}>
            <img className= {classes.cart} src= {cart} alt="" />
            {totalQuantity()}
        </div>
        </Link>
        

    )
}

export default CartWidget 