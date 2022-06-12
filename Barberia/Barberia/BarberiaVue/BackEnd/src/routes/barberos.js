//const express = require('express');


const express = require('express');
const router = express.Router();

const data = require('../../data/barberos')


router.get('/barberos', async (req, res) => {
    const barberos = await data.getBarberos();
    res.json(barberos);
   // res.send('ok')
});

router.post('/nuevobarbero', async (req, res) => {
    const barbero = req.body;
    const result = await data.addBarbero(barbero);
    res.json(result);
});

router.delete('/eliminarbarbero/:id', async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
     const barberoId = await data.deleteBarbero(_id);
    res.json(barberoId);
});

router.put('/actualizarbarbero/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    console.log( req.body);
    try{
        const barberoDb = await data.actualizarBarbero(_id, body, {new: true});
        res.json(barberoDb);
    }catch(error){
        return res.status(400).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
    res.json(barberoDb);
});

module.exports = router;