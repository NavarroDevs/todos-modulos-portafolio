const {Pool }= require('pg');
const bcrypt = require('bcrypt');

const config = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_DATABASE|| "tienda",
    port: process.env.DB_PORT || 5432
}

const pool = new Pool(config);

const registroUsuario = async(name, email, password) => {
    const salt = await bcrypt.genSalt(10)
    const cryptedPassword = await bcrypt.hash(password, salt) 
    let consulta = "INSERT INTO usuarios(name, email, password) VALUES($1, $2, $3)"
    let resultado = await pool.query(consulta, [name, email, cryptedPassword]) 
    return resultado.rows[0]
}

const getUsuarioByEmailAndPassword = (email, password) => {
    return new Promise(async (resolve, reject) => {

        let consulta = "SELECT id, name, email, password from USUARIOS WHERE email = $1";
    let resultado = await  pool.query(consulta, [email])
    let usuario = resultado.rows[0]
    if(usuario){
        const isValid = await bcrypt.compare(password, usuario.password);
        if(isValid){
            delete usuario.password;
            console.log(usuario)
            resolve(usuario);
        }else{
            reject("Contraseña no coincide");
        }
    }else {
        reject("Usuario no existe");
    }

    })
}


module.exports= {
    registroUsuario,
    getUsuarioByEmailAndPassword 
}