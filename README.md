# todos-modulos-portafolio

REPOSITORIO DE PORTAFOLIOS:

Anexo de todos los portafolios desarrollados en cada uno de los modulos de aprendisaje, donde se construt¿yern los portafolios de acuerdo a los temas abarcados en cada uno de los modulos, aqui una breve descripcion de los temas abarcados:

modulo 1: no tenia entregable de modulos teoria y proyectos chicos.

modulo 2: Creacionde un fronted para una tienda de e-comerce. La tienda contiene su barra de navegacion y links para navegar, lista de productos con imagenes, botones de compra, link a carro de compras y footer con informacion de la tienda.

modulo 3: Continuacion del desarrollo que se inicio en el modulo 2, donde se desarollo la lógica del carro de compras, agregar, eliminar productos, aplicar descuentos, sumar total de los productos en carrito de compras. Asi como tambien desaroollo del ingreso de usuarios a travez de un login, como una parte independiente del proycto o branch del mismo usuarios registrados en el archivo son: nombre: "Pedro", password: "123456" y nombre: "Carlos",  password: "123456". pudiendose registrar muchos mas o crear una pagina de registro.

modulo 4: Continuando con la consecusion del modulo 3 en este modulo se agragan las sigueintes funcionalidades, desarrollo de la logica de inventario profundizando en el uso de arreglos, uso de herramientas de javascrip para manejar informacion. utilizando state management, localstorage como fuente de almacenamiento. 

modulo 5: Desarrollo de bases de datos, creación de un modelo de base de datos donde se ejecutan operaciones que simulan los procesos de compra del frontend y el registro/creacion de usuarios del mismo, se guarda la informacion de compra de cada usuario. se diseña el diagrama de entidad relacion, despues de cargar tablas en la base de datos con PgAdmin se realizan consultas como: actualizar precios de los productos a -20% por concepto de oferta de verano,listar todos los productos con stock critico menor o igual a 5 unidades, simular la compra de almenos 3 productos, calculando su subtotal, agregar el iva y mostrar el total de la compra. se muestra el total de la venta de diciembre del 2022,  se lista el comportamiento de compra del usuario que mas realizo compras durante el 2022. 

modulo 6:En este modulo se trabajo con: Manipulacion de archivos File System, manejo de rrores, construcion de una api RESful, manejo de codigos de estado http, utilizacion de paquetes de npm como: nodemon, uuid entre otros, esto llevando la continuacion del proyecto del modulo 4. Aqui se utilizo Node Express para la realizacion de los requerimientos del proyecto. 

de los requerimientos arealizados a groso modo fueron la creacion de un boton comprar en el carrito de compras lo que  genera una peticion post esperando que el servidor registre una nueva post/venta esta funcion asincrona que registra la venta en un archivo JSON(VENTAS.JSON), se crea la API RES con:
get/productos: Devuelve todos los productos almacenadoen en el archivo json.
Post/productos: registra un producto y lo almacena en el archivo json(productos.json).
put productos recibe los datos del producto que se haga en la consulta.
delete/productos: recibe el id de un producto registrado y lo elimina.
get/ventas devuelve todas las ventas almacenadas(ventas.json)
