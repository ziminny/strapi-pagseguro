import { RequestParamsPagseguro } from "./interfaces/requests"
import { ConfigsPagseguro } from "./services/AxiosService"
import CreateKey  from "./services/CreateKey"
import CreatePayment from "./services/CreatePayment"

/** 
 * @param ConfigsPagseguro 
 * @param RequestParamsPagseguro 
 * @returns Promise<RequestParamsPagseguro> 
 */
export const generateKey = async (
  {
    secreteKey,
    version,
    baseUrl
  }:ConfigsPagseguro,
  params:RequestParamsPagseguro
  ) => await new CreateKey().execute({secreteKey,version,baseUrl},params)


/** 
 * @param ConfigsPagseguro 
 * @param RequestParamsPagseguro 
 * @returns Promise<RequestParamsPagseguro> 
 */
  export const generatePayment = async (
    {
      secreteKey,
      version,
      baseUrl
    }:ConfigsPagseguro,
    params:RequestParamsPagseguro
    ) => await new CreatePayment().execute({secreteKey,version,baseUrl},params)