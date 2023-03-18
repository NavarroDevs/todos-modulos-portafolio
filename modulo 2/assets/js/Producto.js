let productosStorage = JSON.parse(localStorage.getItem("crud")) || [];

export default class Producto{
    constructor(id, nombre = "", descripcion = " ", precio = 999999,descuento="", stock = 0){
        this.id = id;
        this.nombre = nombre;
        this.descripcion= descripcion
        this.precio = precio;
        this.descuento = descuento;
        this.stock = stock;
    }

    getProducts(){
        productosStorage = productosStorage = JSON.parse(localStorage.getItem("productos")) || []
        return productosStorage;
    }
    getProduct(){
        productosStorage = JSON.parse(localStorage.getItem("productos")) || []
        return productosStorage.find(producto => producto.id == this.id);
    }
    deleteProduct(){
        productosStorage = JSON.parse(localStorage.getItem("productos")) || []
        productosStorage = productosStorage.filter(producto => producto.id != this.id)
        localStorage.setItem("productos", JSON.stringify(productosStorage))
        return productosStorage;
    }
    updateProduct(){
        productosStorage = JSON.parse(localStorage.getItem("productos")) || []
        let producto = productosStorage.find(producto => producto.id ==this.id)
        producto.nombre= this.nombre;
        producto.descripcion= this.descripcion;
        producto.precio = this.precio;
        producto.stock = this.stock;
        localStorage.setItem("productos", JSON.stringify(productosStorage))
        return producto;
    }
    addProduct(){
        productosStorage = JSON.parse(localStorage.getItem("productos")) || []
        productosStorage.push(
            {
                id: this.id,
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio, 
                descuento: this.descuento, 
                stock: this.stock
            }
            )
            localStorage.setItem("productos", JSON.stringify(productosStorage))
        return productosStorage
    }
}