import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductosById } from "../../services/firestore/productos";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect (() => {
        getProductosById (itemId)
        .then (response => {
            setProductos(response)
        })
        .catch (error => {
            console.log(error)
        })
        

       
    },[itemId])

    return (
        <div>
            <ItemDetail {...productos}/>
        </div>
    )

}

export default ItemDetailContainer