const Consulta = require('../models/consultasModels');
const nodemailer = require('nodemailer')



const obtenerConsultas = async (req, res) => {

    try {
        const consultas = await Consulta.find();
        res.json(consultas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Nuestros mejores ingenieros están trabajando para solucionar la cosa esta')
    }
    
}
    
const crearConsultas = async (req, res) => {
    
    try {
        const {  nombre, email, whatsapp, fecha_ingreso, fecha_salida, mensaje } = req.body;
        let consultas = new Consulta(req.body);

        await consultas.save();
        res.send(consultas);
        console.log(consultas);

        //enviar mail de bienvenida 
        
    } catch (error) {
        console.log(error);
        /*res.status(500).send('Nuestros mejores ingenieros están trabajando para solucionar la cosa esta')*/
    }
    
}
    
const actualizarConsultas = (req, res) => {
    res.json({
        saludos: 'Actualicé las consultas'
    })
}
    

const eliminarConsultas = (req, res) => {
    res.json({
        saludos: 'Eliminé las consultas'
    })
}

module.exports = {
    obtenerConsultas,
    crearConsultas,
    actualizarConsultas,
    eliminarConsultas
}