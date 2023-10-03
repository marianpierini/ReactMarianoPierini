import classes from "./NavBar.module.css"
import logo from "./assets/logo.jpg"
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (


        <nav className={classes.navBar}>
            <div>
                <img className= {classes.logo} src= {logo} alt="" />
            </div>
            <div>
            <Button  label="Inicio"/>
            
            <Button label= "Camisetas"/> 

            <Button label= "Shorts"/> 

            <Button label= "Nosotros"/> 

            <Button label= "Contacto"/>
            </div>
            <div>
            <CartWidget/>   
            </div>
           
            
        </nav>
    )
}

export default NavBar