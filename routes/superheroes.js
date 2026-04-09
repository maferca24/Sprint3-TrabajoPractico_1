import express from 'express';
const router=express.Router();

//Obtener todos los superheroes
router.get('/',(req,res)=>{
    res.send('Aqui está la lista de todos los superheroes');
});

//Obtener un superheroe específico por ID
router.get('/:id', (req, res)=>{
    const{id}=req.params;
    res.send('Aqui esá la información del superheroe con ID: ${id}');
})

// Crear un nuevo superheroe
router.post('/',(req, res)=>{
    const nuevoSuperheroe=req.body;
    res.send('Nuevo superheroe creado con los datos: ${JSON.stringify(nuevoSuperheroe)}');
});

//Actualizar un superheroe por ID
router.put('/:id', (req, res)=>{
    const{id}=req.params;
    const datosActualizados=req.body;
    res.send('Superheroe con ID: ${id} ha sido actualizado con los datos: ${JSON.stringify(datosActualizados)}');
});

//Eliminar un superheroe por ID
router.delete('/:id', (req,res)=>{
    const{id}=req.params;
    res.send('Superheroe con ID:{id} ha sido elimninado');
});
 export default router;
