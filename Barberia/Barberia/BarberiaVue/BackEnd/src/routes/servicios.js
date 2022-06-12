
const express = require('express');
const router = express.Router();

const data = require('../../data/servicios')


router.get('/servicios', async (req, res) => {
    const servicios = await data.getServicios();
    res.json(servicios);
   // res.send('ok')
});

router.delete('/eliminarservicio/:id', async (req, res) => {
    const _id = req.params.id;
     const barberoId = await data.deleteServicio(_id);
    res.json(barberoId);
});

module.exports = router;