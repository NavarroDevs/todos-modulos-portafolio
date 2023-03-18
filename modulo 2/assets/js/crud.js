// import productos from "./productos.js"
// import Producto from "./Producto.js";


let productos = [
    {
      id: 1,
      nombre: "Arroz",
      descripcion:"El mejor Arroz tucapel grado 2 gran selecion 900 gr. tucapel, PRECIO 1600.",
      precio: 1600,
      descuento: 100,
      imagen: "./assets/img/productos/arroz-tucapel.webp",
      // direccion:"#staticBackdrop1",  
      stock: 3,
    },
    // ($('#producto1').modal())
    {
      id: 2,
      nombre: "Azucar Flor",
      descripcion: "El mas fino azucar, Azucar flor 500 g, PRECIO 1750.",
      precio: 1750,
      descuento: 50,
      imagen: "./assets/img/productos/azucar-flor.webp",
      // direccion:"cereales.html",
      stock:4,
    },
  
    {
      id: 3,
      nombre: "Chocolate Milo",
      descripcion:"El mas rico Chocolate en polvo, sobre chico de 28 gr, PRECIO 700.",
      precio: 700,
      descuento: 80,
      imagen: "./assets/img/productos/Milo-sobresito.webp",
      // direccion:"chocolates.html",
      stock:5,
    },
  
    {
      id: 4,
      nombre: "Crema de leche",
      descripcion:"Crema de leche nestle de lata, abre facil de 157 gr, PRECIO 1700.",
      precio: 1700,
      descuento: 10,
      imagen: "./assets/img/productos/Crema-leche.webp",
      stock:5,
    },
  
    {
      id: 5,
      nombre: "Coca-Cola 591 ml",
      descripcion: "Gaseosa Coca-Cola 591 ml. PRECIO 1400",
      precio: 1400,
      descuento: 200,
      imagen: "./assets/img/productos/Coca-cola-591ml.webp",
      stock:5,
    },
  
    {
      id: 6,
      nombre: "Agua cachantun con gas",
      descripcion: "Agua mineral cachantun con gas 1.6L, Precio 1200",
      precio: 1200,
      descuento: 100,
      imagen: "./assets/img/productos/Agua-cachantun-congas-1.6.webp",
      stock:5,
    },
  
    {
      id: 7,
      nombre: "Coca cola normal 350ml",
      descripcion: "Gaseosa Coca Cola normal 350 ml, precio 1100",
      precio: 1100,
      descuento: 150,
      imagen: "./assets/img/productos/coca-cola-350ml.webp",
      stock:5,
    },
  
    {
      id: 8,
      nombre: "Nectar manzana 1,5",
      descripcion: "Jugo Nectar light manzana watts 1,5, Precio 1900.",
      precio: 1900,
     descuento: 80,
      imagen: "./assets/img/productos/watts-manzana-1,5l.webp",
      stock:5,
    },
  
    {
      id: 9,
      nombre: "Cereal chocapic nestle",
      descripcion: "Bolsita de Cereal chocapic nestle de 30 gr, PRECIO 600.",
      precio: 600,
      descuento: 120,
      imagen: "./assets/img/productos/chocapic-30gr.webp",
      stock:5,
    },
  
    {
      id: 10,
      nombre: "Nestun 250 gr",
      descripcion: "Cereal nestun de 250 gr, 5 cereales, PRECIO 2300.",
      precio: 2300,
      descuento: 110,
      imagen: "./assets/img/productos/nestun-250g.webp",
      stock:5,
    },
  
    {
      id: 11,
      nombre: "Barra proteina 42g",
      descripcion:"Barra proteina snack yoghurt berries your goal 42 gr, PRECIO 1000.",
      precio: 1000,
      descuento: 90,
      imagen: "./assets/img/productos/barra de proteina 42g.webp",
      stock:5,
    },
  
    {
      id: 12,
      nombre: "Cereal estrellitas nestle",
      descripcion: "Cereal estrellitas nestle caja 330 gr,Precio 3500.",
      precio: 3500,
      descuento: 80,
      imagen: "./assets/img/productos/cereal estrellitas.webp",
      stock:5,
    },
  
    {
      id: 13,
      nombre: "Bonobon de leche",
      descripcion: "Bon o bon leche arcor 15 gr. PECIO 300",
      precio: 300,
      descuento: 120,
      imagen: "./assets/img/productos/bonobon.webp",
      stock:5,
    },
  
    {
      id: 14,
      nombre: "Chocolate costa rolls",
      descripcion: "Chocolate costa rolls blanco 140 grs, PRECIO 1600.",
      precio: 1600,
      descuento: 100,
      imagen: "./assets/img/productos/costarolls nuts.webp",
      stock:5,
    },
  
    {
      id: 15,
      nombre: "Kit kat 4 fingr",
      descripcion: "Kit kat 4 fingr milk 41.5 g, PRECIO 1100.",
      precio: 1100,
      descuento: 190,
      imagen: "./assets/img/productos/KITKAT.webp",
      stock:5,
    },
  
    {
      id: 16,
      nombre: "Orly chocolate frutilla",
      descripcion: "Orly chocolate frutilla ambrosoli 115 gr, PRECIO 1300.",
      precio: 1300,
    descuento: 100,
    imagen: "./assets/img/productos/orlyfrutilla.webp",
    stock:5,
    },
];

function cargarTabla(listaProductos){ 
    let cuerpoTabla = document.querySelector(".section_mantenedor_productos tbody");
    cuerpoTabla.innerHTML = "";
   
    let acumuladorFilas = "";
    listaProductos.forEach(producto => {
        acumuladorFilas += `
                <tr>
                    <th >${producto.id}</th>
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.descuento}</td>
                    <td>${producto.stock}</td>
                </tr>
        `
    });
    cuerpoTabla.innerHTML = acumuladorFilas;


}

function buscarProducto(id){
    let producto = new producto(id);
    return producto.getProduct();
}

crud_form.addEventListener("submit", (event)=>{
    event.preventDefault();
})


//funcion que capture evento del input crud_id

let inputId = document.getElementById("crud_id");
inputId.addEventListener("change", (event) =>{
    event.preventDefault();
    let id =  inputId.value;

    let producto = buscarProducto(id);
    if(producto){
        crud_nombre.value = producto.nombre;
        crud_descripcion.value = producto.descripcion;
        crud_precio.value = producto.precio;
        crud_descuento.value = producto.descuento;
        crud_stock.value = producto.stock;
    }else{
        crud_nombre.value = "";
        crud_descripcion.value = "";
        crud_precio.value = 0;
        crud_descuento.value = 0;
        crud_stock.value = 0;

    }
})

//AGREGAR PRODUCTOS
document.getElementById("btn-agregar").addEventListener("click", (event)=> {
    event.preventDefault();
    let id = crud_id.value;
    let nombre = crud_nombre.value;
    let descripcion = crud_descripcion.value;
    let precio = crud_precio.value;
    let descuento = crud_descuento.value;
    let stock = crud_stock.value;
    
    let nuevoProducto = new Producto(id, nombre, descripcion, precio,descuento, stock);
    if(nuevoProducto.getProduct()){
        alert("Ya existe un producto con dicho ID.")
    }else{
        nuevoProducto.addProduct();
        cargarTabla(nuevoProducto.getProducts());
    } 
})

//ELIMINAR PRODUCTOS
document.getElementById("btn-eliminar").addEventListener("click", (event)=> {
    event.preventDefault();
    let id = crud_id.value;
    
    let producto = new Producto(id);
    if(producto.getProduct()){
        let respuesta = confirm("Está seguro que quiere eliminar el producto con ID: " + producto.id);
        if(respuesta){
            producto.deleteProduct();
        cargarTabla(producto.getProducts());
        }
        
    }else{
        alert("El producto que intenta eliminar no existe en la BD.")
    }
    
})

//MODIFICAR PRODUCTOS
document.getElementById("btn-modificar").addEventListener("click", (event)=> {
    event.preventDefault();
    let id = crud_id.value;
    let nombre = crud_nombre.value;
    let descripcion = crud_descripcion.value;
    let precio = crud_precio.value;
    let descuento = crud_descuento.value;
    let stock = crud_stock.value;
    
    let producto= new Producto(id, nombre, descripcion, precio,descuento, stock);
    if(producto.getProduct()){
        producto.updateProduct();
        cargarTabla(producto.getProducts());
    }else{
        alert("El producto que intenta actualizar no existe en la BD.")
    } 
})

function main(){
    let productosStorage = JSON.parse(localStorage.getItem("producto"));
    if(!productosStorage){
        productosStorage = productos;
        localStorage.setItem("producto", JSON.stringify(productosStorage))
    }

    cargarTabla(productosStorage);
    
    document.querySelector("#cantidad-productos").innerText = sumaProductos;

}







main();