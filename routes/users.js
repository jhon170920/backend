import express from 'express';
import Users from '../models/users.js';
import bcrypt from 'bcrypt';


const router = express.Router();

// Ruta para crear un nuevo usuario


router.post('/register', async function (req, res){
    try {
        const{name, email, password} = req.body;
        const saltRounds = 10; // Número de rondas para generar el salt
        const hashedPassword = await bcrypt.hash(password, saltRounds); // Hashear la contraseña antes de guardarla en la base de datos
        const newUser = new Users({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: 'Usuario creado exitosamente'});
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario', error: error.message});
    }
});
export default router;