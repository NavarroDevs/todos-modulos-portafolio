import { Usuario } from "./models/Usuario.model.js";
import { Producto } from "./models/Producto.model.js";

const users = [
  { name: "Andres", email: "andres@mail.com", password: '123456' },
  { name: "Maiete", email: "mate@mail.com", password: '123456' },
  { name: "cris", email: "ctpd@mail.com", password: '123456' }
]

const products = [
  {sku: "1132f",nameProduct: "Arroz tucapel",description: "es un arroz entero tipo 1",image: "prod_1.webp",det1: "Alimento en estado solido",det2: "granos enteros",det3: "envasado para ser cocinado",value: 1500,discount: 10,stock: 100},
  {sku: "1556k",nameProduct: "Azucar flor",description: "Azucar fina especial",image: "prod_2.webp",det1: "Alimento en estado solido",det2: "Envasado en chile",det3: "especial para tragos y bebidas",value: 1600,discount: 200,stock: 120},
  {sku: "1456g",nameProduct: "Crema de leche",description: "Crema de leche en lata para postres",image: "prod_3.webp",det1: "Alimento en estado solido",det2: "Envasado en chile",det3: "para los mejores postres y recetas",value: 1200,discount: 0,stock: 109},
  {sku: "2567h",nameProduct: "Coca cola 350 ml",description: "Coca cola en lata de 350 ml",image: "prod_4.webp",det1: "Alimento en estado liquido",det2: "Envasado en chile",det3: "bebida gaseosa azucarada",value: 1100,discount: 150,stock: 109},
  {sku: "2557f",nameProduct: "Watts Manzana",description: "Jugo de 1,5 litro",image: "prod_5.webp",det1: "Alimento en estado liquido",det2: "Envasado en chile",det3: "Bebida de frutas naturales",value: 1900,discount: 30,stock: 109},
  {sku: "2656j",nameProduct: "Coca cola 591 ml",description: "Coca cola de 591 ml, gaseosa",image: "prod_6.webp",det1: "Alimento en estado liquido",det2: "Envasado en chile",det3: "bebida gaseosa azucarada",value: 1300,discount: 20,stock: 200},
  {sku: "3132f",nameProduct: "Estrellitas",description: "cereal a base de maiz",image: "prod_7.webp",det1: "Cereales solidos",det2: "Envasado en chile",det3: "Cereal para ser combinado con leche",value: 3900,discount: 100,stock: 100},
  {sku: "3556k",nameProduct: "Chocapic",description: "Cereal achocolatado para desayunos",image: "prod_8.webp",det1: "Cereales solidos",det2: "Hecho en: China",det3: "Creal achocolate con azucar",value: 4000,discount: 200,stock: 40},
  {sku: "3456g",nameProduct: "Nestun",description: "Cereal especial para Bebes",image: "prod_9.webp",det1: "Cereales solidos",det2: "Hecho en: China",det3: "Cereal para preparar atoles",value: 2500,discount: 45,stock: 300},
  {sku: "4567h",nameProduct: "orly",description: "Barra de chocolate negro",image: "prod_10.webp",det1: "Barra rigida chocolate grande",det2: "Hecho en: China",det3: "Chocolate oscuro con frutilla",value: 2500,discount: 150,stock: 300},
  {sku: "4557f",nameProduct: "Kit kat",description: "Barra de chocolate",image: "prod_11.webp",det1: "Barra rigida chocolate chica",det2: "Hecho en: China",det3: "chocolate negro barra chica",value: 1500,discount: 300,stock: 200},
  {sku: "4656j",nameProduct: "Rolls",description: "Bolitas de chocolate",image: "prod_12.webp",det1: "Bolas de chocolate",det2: "Hecho en: China",det3: "galletas en bolitas con baño de chocolate",value: 1600,discount: 0, stock: 10}
]

const chargeUsers = async () => {
  for (let index = 0; index < users.length; index++) {
    const [user, created] = await Usuario.findOrCreate({
      where: { name: users[index].name },
      defaults: {
        name    : users[index].name,
        email   : users[index].email,
        password: users[index].password
      }
    });
  }
}

const chargueProducts = async () => {
  for (let index = 0; index < products.length; index++) {
    const [product, created] = await Producto.findOrCreate({
      where: { sku: products[index].sku },
      defaults: {
        sku         : products[index].sku,
        nameProduct : products[index].nameProduct,
        description : products[index].description,
        image       : products[index].image,
        det1        : products[index].det1,
        det2        : products[index].det2,
        det3        : products[index].det3,
        value       : products[index].value,
        discount    : products[index].discount,
        stock       : products[index].stock
      }
    });
  }
}

export const cargarSemillas = () => {
  chargeUsers();
  chargueProducts();
}