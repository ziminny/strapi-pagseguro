import express from "express"
import {generateKey, generatePayment} from "./index"
import cors from "cors"
import { ConfigsPagseguro } from "./services/AxiosService"
const app = express()

app.use(cors())
app.use(express.json())
app.post('/',async (req , res) => {
  
  const configs:ConfigsPagseguro = {
    secreteKey:'9530D7E5F2974BDFA479B75C9E8CC2D5'
  } 
  
   const generateKeyResponse = await generateKey({...configs } ,req.body)
   const generatePaymentResponse = await generatePayment({...configs },generateKeyResponse)
   return res.json(generatePaymentResponse)
})


app.listen(4500,() => {
  console.log('Server Up');
  
})
