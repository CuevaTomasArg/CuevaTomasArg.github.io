const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router();
const { google } = require("googleapis")

router.post("/send-mail",(req,res) =>{
    const {name,email,phone,message} = req.body
    const contentHtml = `
    <h1>Formulario nodemailer</h1>
    <ul>
        <li>name: ${name}</li>
        <li>mail: ${email}</li>
        <li>whatsapp: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;
    const CLIENT_ID="199459798785-nockb0uc9tqcjus28t304dljblbkg5f9.apps.googleusercontent.com"
    const CLIENT_SECRET="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"
    const REDIRECT_URI = "https://developers.google.com/oauthplayground"
    const  REFRESH_TOKEN = "1//04k96k7umTKR6CgYIARAAGAQSNwF-L9IrEE6BNmR27_4LBkGZc8AZ0JE7bIH_hwKM7An4Ejqfyu8Hq-6dZbMLq2Fc7gVtGCeoCJE"

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

    async function sendMail(){
        try{
            const accesToken =await oAuth2Client.getAccessToken()
            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    type:"OAuth2",
                    user:"cuevatomass02@gmail.com",
                    clientId:CLIENT_ID,
                    clientSecret:CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken:accesToken
                },
            });
            const mailOptions = {
                from: "Portfolio - web",
                to:"cuevatomass02@gmail.com",
                subject: "Cuevatomass Portfolio - web",
                html: contentHtml,
            }
            const result = await transporter.sendMail(mailOptions)
            return result
        }
        catch(err){
            console.log(err)
        }
        sendMail().then((result) => res.status(200).send("enviado")).catch((error) => console.log(error.message))
    }


})

module.exports = router;
