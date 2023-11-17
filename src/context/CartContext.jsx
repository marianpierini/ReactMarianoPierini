import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[] 
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    console.log(cart)

    const addItem = (item, quantity) =>{
        if (!isInCart (item.id)) {
            setCart ((prev) => [...prev, {...item,quantity}])
        } else {
            console.error("El producto ya fue agregado al carrito")
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)

    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const calcularTotal = () => {
        return cart.reduce((total, producto) => {
          return total + producto.precio * producto.quantity
        }, 0)
      }

      const totalQuantity = () => {
        return cart.reduce((totalProductos, producto) => {
          return totalProductos + producto.quantity;
        }, 0);
      }

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem ,clearCart, calcularTotal,totalQuantity}}>
            {children}
        </CartContext.Provider>

    )
}