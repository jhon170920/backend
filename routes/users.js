import express from 'express';
import Users from '../models/users.js';

const router = express.Router();

// Ruta para crear un nuevo usuario

router.post('/register', async function (req, res){
    try {
        const{name, email, password} = req.body;
        const newUser = new Users({
            name,
            email,
            password
        });
        await newUser.save();
        res.status(201).json({message: 'Usuario creado exitosamente'});
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario', error: error.message});
    }
});
export default router;