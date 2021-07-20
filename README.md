 

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

app.listen(4000, () => console.log( 'Server up' ) )
~~~

### TS
~~~typescript
import express from ‘express’
import { generatePayment,generateKey }  from "strapi-pagseguro"
import { ConfigsPagseguro } from "strapi-pagseguro/dist/services/AxiosService"

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
~~~

## Requisição

### Um exemplo do tipo esperado 

~~~json
{
  "reference_id" : "ex-00001",
  "description": "Motivo da cobrança",
  "amount": {
    "value": 20000,
    "currency": "BRL"
  },
  "payment_method": {
    "type": "CREDIT_CARD",
    "installments": 1,
    "capture": true,
    "card": {
      "number": "4111111111111111",
      "exp_month": "03",
      "exp_year": "2026",
      "security_code": "123",
      "store": true,        
      "holder": {
        "name": "Jose da Silva"
      }
    }
  }
}
~~~

## Resposta

### Tipo de resposta

~~~json
{
  "id": "CHAR_0B849515-F169-4B23-ADD5-0FAE432D280E",
  "reference_id": "ex-00001",
  "status": "PAID",
  "created_at": "2021-07-19T20:21:05.274-03:00",
  "paid_at": "2021-07-19T20:21:06.747-03:00",
  "description": "Motivo da cobrança",
  "amount": {
    "value": 1000,
    "currency": "BRL",
    "summary": {
      "total": 1000,
      "paid": 1000,
      "refunded": 0
    }
  },
  "payment_response": {
    "code": "20000",
    "message": "SUCESSO",
    "reference": "1626736866747"
  },
  "payment_method": {
    "type": "CREDIT_CARD",
    "installments": 1,
    "capture": true,
    "card": {
      "id": "CARD_DA7EE050-3927-41DB-B287-34A46D9C6ECC",
      "brand": "visa",
      "first_digits": "411111",
      "last_digits": "1111",
      "exp_month": "3",
      "exp_year": "2026",
      "holder": {
        "name": "Jose da Silva"
      }
    },
    "soft_descriptor": "sellervirtual"
  },
  "notification_urls": [],
  "links": [
    {
      "rel": "SELF",
      "href": "https://sandbox.api.pagseguro.com/charges/CHAR_0B849515-F169-4B23-ADD5-0FAE432D280E",
      "media": "application/json",
      "type": "GET"
    },
    {
      "rel": "CHARGE.CANCEL",
      "href": "https://sandbox.api.pagseguro.com/charges/CHAR_0B849515-F169-4B23-ADD5-0FAE432D280E/cancel",
      "media": "application/json",
      "type": "POST"
    }
  ]
}
~~~
