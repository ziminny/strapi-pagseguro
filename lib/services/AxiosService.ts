import axios, { AxiosInstance } from "axios"

export interface ConfigsPagseguro {

  /**
   *  Url pagseguro
   *  @type string
   */
  baseUrl?:string

  /**
   *  Chave secreta
   *  @type string
   */
  secreteKey:string

  /**
   *  Versão do pagseguro 
   *  @type string
   *  @default 4.0
   */
  version?:string
}

class AxiosService {

    /**
     * @param ConfigsPagseguro 
     * @returns AxiosInstance
     */
    public static api({ 
      secreteKey,
      baseUrl,
      version 
    }:ConfigsPagseguro) :AxiosInstance
    {
      return axios.create( {
        baseURL:baseUrl,
        headers: {
          Authorization:secreteKey,
          'Content-Type' : 'application/json',
          'x-api-version':version
        }
      })
    }
}

export default AxiosService