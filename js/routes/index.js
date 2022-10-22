const express = require('express')
const router = express.Router();


router.post("/send-mail",(req,res) =>{
    const {name,email,phone,message} = req.body
    res.send("Enviado")
})

module.exports = router;
