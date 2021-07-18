import { PaymentMethod, RequestParamsPagseguro } from "../interfaces/requests";
import { ResponsePagseguro } from "../interfaces/responses";
import AxiosService,{ConfigsPagseguro} from "./AxiosService";

class CreatePayment {

  constructor(){}

  /**
   * @param ConfigsPagseguro
   * @param RequestParamsPagseguro 
   * @returns Promise<RequestParamsPagseguro | { error:string }>
   */
  public async execute(
    {
      secreteKey,
      version = '4.0',
      baseUrl = 'https://sandbox.api.pagseguro.com/',
    }:ConfigsPagseguro , 
    params:RequestParamsPagseguro
    ):Promise<RequestParamsPagseguro | { error:string }>
  {
    
    
try {
  const api = AxiosService.api({baseUrl,secreteKey,version})

  const response = await api.post ('charges' ,{...params})

  if(response.data.status ==='DECLINED') return {
    error: response.data.payment_response
  }
  return response.data 
} catch (error) {
  return error.payment_response
}
  }

}

export default CreatePayment