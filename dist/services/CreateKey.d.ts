import { RequestParamsPagseguro } from "../interfaces/requests";
import { ConfigsPagseguro } from "./AxiosService";
declare class CreateKey {
    constructor();
    secreteKey: string;
    version: string;
    baseUrl: string;
    /**
     * @param ConfigsPagseguro
     * @param RequestParamsPagseguro
     * @returns Promise<RequestParamsPagseguro>
     */
    execute({ secreteKey, version, baseUrl, }: ConfigsPagseguro, params: RequestParamsPagseguro): Promise<RequestParamsPagseguro>;
}
export default CreateKey;
