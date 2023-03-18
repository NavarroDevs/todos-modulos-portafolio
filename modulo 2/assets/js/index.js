let productosCarro = [];

if (localStorage.getItem("productos")) {
  productosCarro = JSON.parse(localStorage.getItem("productos"));
  console.log(productosCarro);
  actualizarCarro(productosCarro);
}

cargarProductos(productos);

///FUNCION ENCARGADA DE CARGAR PRODUCTOS
function cargarProductos(listadoProductos) {
  let acumulador = "";
  listadoProductos.forEach((producto) => {
    let template = `
    <div class="col-sm-12 col-md-3 col-lg-3">
    <div class="container text-center mt-1">
    <div class="row text-center mt-1">
    <div class="card text-white bg-secondary mb-3 card border-primary mb-3" style="width: 18rem">
    
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">Precio Normal: $ ${producto.precio}</p>
          <p class="card-text text-info">Descuento: - $ ${
            producto.descuento
          }</p>
          <a  id="btn-AddDate"  href=$("#staticBackdrop1").modal("show")  class="btn btn-info" target="_blank">Ver más</a>

        <a class="btn btn-primary" data-id="${producto.id}" onclick="addToCart('${producto.id}')">Comprar</a>
            <!-- Button trigger modal -->
            
            
          </div>
        
          </div>
  
          
      </div>
      
      </div>
    <div class="card text-center">
      <div class="card-header">
        <a href="#" class="btn btn-secondary btn-sm">↑ Top</a>
      </div>
    </div>
  
  </div>

  
    
    `;
    acumulador += template;
  });
  document.querySelector("#productos .row").innerHTML = acumulador;
}

function addToCart(id) {
  let objProducto = {
    id,
    cantidad: 1,
  };
  let productoEncontrado = productosCarro.find((producto) => producto.id == id);
  if (productoEncontrado) {
    productoEncontrado.cantidad = productoEncontrado.cantidad + 1;
  } else {
    productosCarro.push(objProducto);
  }

  actualizarCarro(productosCarro);

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto agregado correctamente.",
    showConfirmButton: false,
    timer: 1500,
  });
}

function actualizarCarro(listadoProductos) {
  localStorage.setItem("productos", JSON.stringify(listadoProductos));

  const valorInicial = 0;
  const sumaProductos = listadoProductos.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    valorInicial
  );

  document.querySelector("#cantidad-productos").innerText = sumaProductos;
}

// se carga la tabla del carrito
// cargarProductos();
