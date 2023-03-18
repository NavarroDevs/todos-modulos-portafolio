$(".page-header ul a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

// este es el compuesto de jquery
// $("selector").accion

$(function () {
  $("#primero").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#segundo").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#tercero").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#cuarto").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#quinto").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#sexto").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#septimo").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#octavo").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#noveno").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimo").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimouno").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimodos").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimotres").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimocuatro").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimocinco").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");
  });

  $("#decimoseis").click(function () {
    alert("¡Su Producto Fue agregado correctamente al carrito!");


	
  });
});
