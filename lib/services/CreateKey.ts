import { PaymentMethod, RequestParamsPagseguro } from "../interfaces/requests";
import { ResponsePagseguro } from "../interfaces/responses";
import AxiosService,{ConfigsPagseguro} from "./AxiosService";

class CreateKey {

  constructor(){}

  public secreteKey:string;
  public version:string;
  public baseUrl:string;


  /**
   * @param ConfigsPagseguro 
   * @param RequestParamsPagseguro 
   * @returns Promise<RequestParamsPagseguro>
   */
  public async execute(
    {
      secreteKey,
      version = '4.0',
      baseUrl = 'https://sandbox.api.pagseguro.com/',
    }:ConfigsPagseguro , 
    params:RequestParamsPagseguro
    ):Promise<RequestParamsPagseguro>
  {
    this.secreteKey = secreteKey
    this.version = version
    this.baseUrl = baseUrl
    
try {
  const api = AxiosService.api({baseUrl,secreteKey,version})

  const response = await api.post<RequestParamsPagseguro>('charges' ,{...params})
  
  const repaseParam:RequestParamsPagseguro = params
  repaseParam.payment_method.card = {
    security_code: params.payment_method.card.security_code,
    id:response.data.payment_method.card.id
  }

  return repaseParam 
} catch (error) {
  return error.response.data.error_messages;   
}
  }

}

export default CreateKey