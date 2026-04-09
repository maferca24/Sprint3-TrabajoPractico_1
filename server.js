import express from 'express';
import superheroesRouter from './routes/superheroes.js';

const app=express();

//Middleware para manejar JSON en el cuerpo de las solicitudes
app.use(express.json());

//Asignamos el módulo de rutas al prefijo '/superheroes'
app.use('/superheroes', superheroesRouter);

const PORT=3000;
app.listen(PORT, ()=>
console.log('Servidor corriendo en el puerto ${PORT}'));
