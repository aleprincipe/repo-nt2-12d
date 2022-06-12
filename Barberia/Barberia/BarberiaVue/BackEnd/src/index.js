const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//barberos
app.use('/api', require('./routes/barberos'))
app.use('/api', require('./routes/servicios'))

//lista como bdd
const lista = [{ codigo: 1, desc: "corte" }, { codigo: 2, desc: "pelu" }]
//este sistema simula un solo usuario(monousuario)
const usuario ={email:'usuario@test.com',password:'123456'}

app.post('/api/login', (req, res) => {
  console.log(req.body)
  if(req.body && req.body.email == usuario.email && req.body.password == usuario.password){
    res.json(req.body);
  }else{
    res.sendStatus(400);
  }
  res.json(req.body);
})



app.get('/api/test', (req, res) => {
  res.send('ok')
})

app.get('/api/lista', (req, res) => {
  res.json(lista)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/producto', (req, res) => {
  req.body.codigo = parseInt(req.body.codigo);
  lista.push(req.body);
  res.json(req.body);
});


app.delete('/api/producto', (req, res) => {

});

module.exports = app;