const productos = [
    {id: "1", nombre: "Camiseta Titular Seleccion Argentina", precio: 50000, stock: 25, categoria: "Camisetas", img: "https://www.thefutbolstore.com.ar/uploads/v2/product/hi/ARG2022_A.jpg", descripcion: "Camiseta titular de la selección Argentina, tricampeona del mundo", },
    {id: "2", nombre: "Camiseta Titular Boca Juniors", precio: 40000, stock: 16, categoria: "Camisetas", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ca099b1de264c99a6bec27a05e30d50_9366/Camiseta_Titular_Boca_Juniors_23-24_Ninos_Azul_HY0287_01_laydown.jpg", descripcion: "Equipación titular del club de la Ribera para la temporada 22/23.", },
    {id: "3", nombre: "Short Titular Fluminense", precio: 20000, stock: 10, categoria: "Shorts", img: "https://fluminense.vteximg.com.br/arquivos/ids/159692-1000-1000/short-jg2-umbro-11274-1.jpg?v=638305671143700000", descripcion: "Short titular del Flu para la temporada 22/23", }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(productos)
        },1000) 
        })
}

export const getProductosById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        },1000)
        
    })
}

export const getProductosByCategoria = (productoCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productoFiltrado = productos.filter((producto)=>producto.categoria === productoCategoria)
            resolve(productoFiltrado)
        },1000)
        
    })
}