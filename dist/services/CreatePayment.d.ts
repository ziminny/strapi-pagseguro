import { RequestParamsPagseguro } from "../interfaces/requests";
import { ConfigsPagseguro } from "./AxiosService";
declare class CreatePayment {
    constructor();
    /**
     * @param ConfigsPagseguro
     * @param RequestParamsPagseguro
     * @returns Promise<RequestParamsPagseguro | { error:string }>
     */
    execute({ secreteKey, version, baseUrl, }: ConfigsPagseguro, params: RequestParamsPagseguro): Promise<RequestParamsPagseguro | {
        error: string;
    }>;
}
export default CreatePayment;
