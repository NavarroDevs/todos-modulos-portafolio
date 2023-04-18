Pedro navarro

portafolio modulo 8



El proyecto de e-comerce en esta etapa se le agrego el funcionamiento del registro y login de usuarios, complementando y haciendo mas funcional el proyecto que se ha venido desarrollando desde el modulo 2, 
en este modulo  utilize la siguiente tecnologia 

cors - Control de acceso HTTP,este mecanismo o política de seguridad me permite controlar las peticiones HTTP asíncronas que se pueden realizar desde un navegador a un servidor con un dominio diferente de la página cargada originalmente, lo instale para el desarrollo del proyecto.

express - Framework WEB, Este framework backend gratuito y de código abierto para Node.js. gracias a sus herramientas y a la versatilidad de su uso, Su enfoque minimalista, su alta escalabilidad, su velocidad y su rendimiento general son sólo algunas de las razones por las cuales me permitió el desarrollo del proyecto y que lo pueda dejar escalable para agregar nuevos módulos en el futuro.
sequelize:Permite mapear las tablas de la base de datos

pg - Cliente Postgres

pg-hstore - Serializando y Deserializando JSON de consultas Postgres

bcrypt: función de hashing de passwords 

bcryptjs: Bcrypt convierte una contraseña simple en caracteres de longitud fija llamados hash.

cookie-parser: Para el manejo de cookies a través de Express.js es necesario utilizar el middleware cookie-parser

dotenv: nos permite crear un archivo dentro de nuestro código y en el agregar todos los datos que queremos ocultar del programa y luego asignarles una variable para poder usarlas en el programa

express-handlebars:Existen diversos motores de plantillas que podría haber usado en Node, pero me gusta Handlebars por su sencillez. No tienes necesidad de usar otro lenguaje, como ocurre con Jade, y eso lo veo una ventaja, sobre todo cuando quieres hacer un código limpio y de calidad, pero no quieres invertir tiempo en aprender nada nuevo, me facilito hacer varias vistas crear el navbar para todo el proyecto sin necesidad de estar cargándolo en cada página, desarrollar el footer y el navbar por separado y llamarlo en todas las paginas en cuanto a sencillez y robustes por eso fue mi elección.

moment:Esta librería la utilize para manejar todo lo referente a fechas, sus formatos hacer peticiones con now() y  almacenar las fechas correctamente y en un formato estandar a lo largo del proyecto 

pg-cursor: Se uso para leer de manera eficiente grandes conjuntos de resultados sin cargar todo el conjunto de resultados en la memoria antes de tiempo.

uuid:  lo uso para generar cadenas aleatorias y criptográficamente seguras.

   -jsonwebtoken v: 9.0.0: me permitió dar seguridad en uso del login ya que el mismo se define un mecanismo para poder propagar entre dos partes, y de forma segura, la identidad de un determinado usuario, además con una serie de claims o privilegios. Estos privilegios están codificados en objetos de tipo JSON, que se incrustan dentro de del payload o cuerpo de un mensaje que va firmado digitalmente.
-Boosptra: Se utilizo el el uso de botones, navbar o barra de navegación, creación de formularios.

html: para maquetacion

realizando el frontend con vistas usando handlebars, y base de datos con pg Postgres, tambien se utilizo el ORM sequelize. de manera de conjuagar toda la tecnoligia para crear una tienda con carro de compras vista de productos vendidos, actualizacion de productos, eliminacion de productos e informacion de productos.

link git hub

https://github.com/pedrinchixx/portafolio-entrega-8.git





