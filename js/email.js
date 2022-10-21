//Requerimos el paquete
import { createTransport } from 'nodemailer';
 
const nodemailer = require('nodemailer');
const password = "2373153644548521Santiago44548521"
//Creamos el objeto de transporte
var transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'cuevatomass02@gmail.com',
    pass: password
  }
});

var mensaje = "Hola desde nodejs...";

var mailOptions = {
  from: 'cuevatomass02@gmail.com',
  to: 'tomasssantiagocueva@gmail.com',
  subject: 'test de nodejs',
  text: mensaje
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});
