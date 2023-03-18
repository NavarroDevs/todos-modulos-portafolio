let productosCarro = [];

if (localStorage.getItem("productos2")) {
  productosCarro = JSON.parse(localStorage.getItem("productos2"));
  console.log(productosCarro);
  actualizarCarro(productosCarro);
}

cargarProductos(productos2);

function cargarProductos(listadoProductos) {
  let acumulador = "";
  listadoProductos.forEach((producto2) => {
    let template = `
   
    <div class="col-sm-12 col-md-3 col-lg-3">
    <div class="container text-center mt-1">
    <div class="row text-center mt-1">
   
   
    
     
   
    <div class="card text-white bg-secondary mb-3 card border-primary mb-3" style="width: 18rem">
    
        <img src="${
          producto2.imagen
        }" class="card-img-top" alt=$(producto2.nombre)>
        <div class="card-body">
          <h5 class="card-title">${producto2.nombre}</h5>
          <p class="card-text">${producto2.descripcion}</p>
          <p class="card-text">Precio Normal: $ ${producto2.precio}</p>
          <p class="card-text text-info">Descuento: - $ ${
            producto2.descuento
          }</p>
          <p class="card-text text-warning">Precio final: $ ${
            producto2.precio - producto2.descuento
          }</p>
          <a class="btn btn-primary" data-id="${
            producto2.id
          }" onclick="addToCart('${producto2.id}')">Comprar</a>
          <!-- Button trigger modal -->
          
          </div>
          <button type="button"  class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
            Mas detalles
            </button> 
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
  let productoEncontrado = productosCarro.find(
    (producto2) => producto2.id == id
  );
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
  localStorage.setItem("productos2", JSON.stringify(listadoProductos));

  const valorInicial = 0;
  const sumaProductos = listadoProductos.reduce(
    (acumulador, producto2) => acumulador + producto2.cantidad,
    valorInicial
  );

  document.querySelector("#cantidad-productos").innerText = sumaProductos;
}

// se carga la tabla del carrito
cargarProductos();
