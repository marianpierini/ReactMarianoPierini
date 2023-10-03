import classes from "./Button.module.css"

const Button = ({label}) => {
    return (
        <button className= {classes.boton} >{label}</button>
    )
}

export default Button