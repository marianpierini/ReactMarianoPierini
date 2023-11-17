import { db } from "../firebase/firebaseConfig"
 import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
 
 export const getProductos = (productoCategoria) => {
    return new Promise ((resolve, reject) => {
        const productoRef = productoCategoria
        ? query(collection(db, "productos"), where("categoria", "==",productoCategoria))
        : collection(db, "productos")

        getDocs(productoRef)
        .then (querySnapshot => {
            const productosAdaptados = querySnapshot.docs.map(documentSnapshot => {
                const fields = documentSnapshot.data()
                return {
                    id: documentSnapshot.id,
                    ...fields
                }
            })
            resolve(productosAdaptados)
        })
        .catch(error => {
            reject(error)
        })

    })

}

export const getProductosById = (itemId) => {
    const productoRef = doc(db, "productos", itemId)
    return getDoc(productoRef)
        .then(documentSnapshot => {
            const fields = documentSnapshot.data()
            const productosAdaptados = {id:documentSnapshot.id, ...fields}
            return productosAdaptados
        })
        .catch (error =>{
            return error
        })

}