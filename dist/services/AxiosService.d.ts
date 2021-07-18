import { AxiosInstance } from "axios";
export interface ConfigsPagseguro {
    /**
     *  Url pagseguro
     *  @type string
     */
    baseUrl?: string;
    /**
     *  Chave secreta
     *  @type string
     */
    secreteKey: string;
    /**
     *  Versão do pagseguro
     *  @type string
     *  @default 4.0
     */
    version?: string;
}
declare class AxiosService {
    /**
     * @param ConfigsPagseguro
     * @returns AxiosInstance
     */
    static api({ secreteKey, baseUrl, version }: ConfigsPagseguro): AxiosInstance;
}
export default AxiosService;
