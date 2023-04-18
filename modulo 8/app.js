import express from 'express'
import cors from 'cors'
import { create } from 'express-handlebars'
import {sumarHelper,restarHelper,fechaHelper} from './helpers/helpers.js'



import * as path from 'path'
import { fileURLToPath } from 'url'

// -------------------------------------------------
// ------------------- RUTAS -----------------------
// -------------------------------------------------

import viewsRoutes from './routes/views.routes.js'

import productsRoutes from './routes/productos.routes.js'
import carroRoutes from './routes/carro.routes.js'
import vantasRoutes from './routes/ventas.routes.js'
import cookieParser from 'cookie-parser';

import apiUsuario from './routes/usuario.routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Ruta de autenticación
import authRoutes from './routes/auth.routes.js';



const app = express()

// -------------------------------------------------
// ------------------- MIDLEWARE -------------------
// -------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())



// -------------------------------------------------
// ------------------- SERVIDOR --------------------
// -------------------------------------------------
app.use(viewsRoutes)
app.use('/api/v1', productsRoutes)
app.use('/api/v1', carroRoutes)
app.use(apiUsuario);
app.use('/api/v1', vantasRoutes)
app.use(cookieParser());
app.listen(3000, () => { console.log('Servidor en http://localhost:3000') })

// -------------------------------------------------
// ---------------- MIDLEWARE RUTAS ----------------
// -------------------------------------------------
// Agrega las rutas de autenticación al middleware de la aplicación
app.use(authRoutes);
// CARPETA DE IMAGENES
app.use('/imagenes', express.static(__dirname + '/assets/img'))
// CARPETA DE ESTILOS
app.use('/css', express.static(__dirname + '/assets/css'))
// CARPETA DE SCRIPTS
app.use('/js', express.static(__dirname + '/assets/js'))







  // Definimos la extensión a utilizar
// -------------------------------------------------
// ------------------- HANDLEBARS-------------------
// -------------------------------------------------


const hbs = create({
  helpers: {
    sumarHelper,
    restarHelper,
    fechaHelper
  },
  partialsDir: [
    'views/partials/'
  ]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, './views'))

export default app
