const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const morgan = require('morgan');

//traemos la conexión
require('./database/conexion');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
 app.use(cors()); 

//Traemos las rutas
app.use('/api', require('./routes/consultasRouter'));

app.get('/', (req, res) =>{
    res.send('Conectado al Back')
});

app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el puerto ${PORT}`);
})
