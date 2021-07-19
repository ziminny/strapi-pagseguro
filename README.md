 

<p align="center">
  <img src="https://raw.githubusercontent.com/ziminny/strapi-pagseguro/main/readme-images/logo.png"/>
</p>

## Sobre
Strapi-pagseguro é um pacote node que  facilita a integração com o pagseguro , você só insere o token e pronto . 

## Versão pagseguro
Atualmente na versão 4.0 
https://dev.pagseguro.uol.com.br/v4.0/docs

## Instalação

~~~bash
 yarn add strapi-pagseguro
~~~
ou

~~~bash
  npm -i strapi-pagseguro
~~~

## Iniciando

### JS

~~~javascript
const express = require("express")
const { generatePayment,generateKey } = require("strapi-pagseguro")

const app = express()
app.use(express.json())

app.post('/',async (req , res) => {
  
  const configs = {
    secreteKey:'your key'
  } 
   const generateKeyResponse = await generateKey({...configs } , req.body)
  
 const generatePaymentResponse = await generatePayment(
                {...configs } , generateKeyResponse)

   return res.json(generatePaymentResponse)
})

app.listen(4000, () => console.log( ‘Server up port 4500’ ) )
~~~

### TS
import express from ‘express’
import { generateKey , generatePayment } from ‘./index’
import { ConfigsPagseguro } from ‘./services/AxiosService’

const app = express()

app.use(express.json())
app.post('/' , async ( req , res ) => {
  
  const configs: ConfigsPagseguro = {
    secreteKey: 'your key'
  } 
  
   const generateKeyResponse = await generateKey({...configs } , req.body)

   const generatePaymentResponse = await generatePayment(
         { ...configs } , generateKeyResponse )

   return res.json(generatePaymentResponse)
})

app.listen(3000,() =>  console.log( 'Server Up' ) )

