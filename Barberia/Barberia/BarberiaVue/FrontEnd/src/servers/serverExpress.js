import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Barberia');
});

app.listen(PORT, () => {
     console.log
     ((`Server express levantado en el puerto: ${PORT}`));
});
