 

<p align="center">
  <img src="https://raw.githubusercontent.com/ziminny/strapi-pagseguro/main/readme-images/logo.png"/>
</p>

## Instalação

`bash
 yarn add strapi-pagseguro
`
ou

´bash
  npm -i strapi-pagseguro
´

##Iniciando

´jsvascript
const express = require("express")

const app = express()
app.use(express.json())

app.post('/',async (req , res) => {
  
  const configs = {
    secreteKey:'your key'
  } 
   const generateKeyResponse = await generateKey({...configs } ,req.body)
   const generatePaymentResponse = await generatePayment({...configs },generateKeyResponse)
   return res.json(generatePaymentResponse)
})

app.listen(4500, () => console.log("Server up port 4500"))
´

