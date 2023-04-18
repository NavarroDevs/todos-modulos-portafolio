import { Usuario } from '../models/Usuario.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar usuarios' });
  }
};

export const getUsuariosView = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.render('usuarios', { usuarios });
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar usuarios' });
  }
};

export const countUsuarios = async (req, res) => {
  try {
    const count = await Usuario.count();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error al contar usuarios' });
  }
};



export const createUsuario = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Cifra la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crea el usuario con la contraseña cifrada
    const usuario = await Usuario.create({ name, email, password });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};


export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await Usuario.update({ name, email, password }, { where: { id } });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.destroy({ where: { id } });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'error al eliminar el usuario' });
  }
};


// login usuario
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({ where: { email } });


   const validPassword = await Usuario.findOne({ where: { password } });

 console.log(user);
 console.log(validPassword);


    if (!user) {
      return res.status(404).json({ message: 'Usuario o Correo no existe' });
    }
        
    if (!validPassword) {
      return res.status(401).json({ message: 'Clave Invalida' });
     
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Emitir una cookie con el token
    res.cookie('jwt', token, { httpOnly: true, secure: true });

    // Envía la respuesta con el token
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};




