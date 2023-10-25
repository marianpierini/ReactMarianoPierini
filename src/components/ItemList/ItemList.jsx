import Item from "../Item/Item";
import clasess from "./ItemList.module.css"

const ItemList = ({productos}) => {
    return (
        <div className= {clasess.fondo}>
            {productos.map(prod => <Item key= {prod.id} {...prod}/>)}
        </div>
    )
} 

export default ItemList 