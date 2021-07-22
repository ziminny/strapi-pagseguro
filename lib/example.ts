import express from "express"
import {generateKey, generatePayment} from "./index"
import { ConfigsPagseguro } from "./services/AxiosService"

const app = express()

app.use(express.json())
app.post('/',async (req , res) => {
  
   const configs:ConfigsPagseguro = {
    secreteKey:'your key'
  } 
  
   const generateKeyResponse = await generateKey({...configs } , req.body)
   const generatePaymentResponse = await generatePayment(
         {...configs } , generateKeyResponse)
   return res.json(generatePaymentResponse)
})

app.listen(3000,() => {
  console.log('Server Up');
})
