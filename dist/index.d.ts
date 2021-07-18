import { RequestParamsPagseguro } from "./interfaces/requests";
import { ConfigsPagseguro } from "./services/AxiosService";
/**
 * @param ConfigsPagseguro
 * @param RequestParamsPagseguro
 * @returns Promise<RequestParamsPagseguro>
 */
export declare const generateKey: ({ secreteKey, version, baseUrl }: ConfigsPagseguro, params: RequestParamsPagseguro) => Promise<RequestParamsPagseguro>;
/**
 * @param ConfigsPagseguro
 * @param RequestParamsPagseguro
 * @returns Promise<RequestParamsPagseguro>
 */
export declare const generatePayment: ({ secreteKey, version, baseUrl }: ConfigsPagseguro, params: RequestParamsPagseguro) => Promise<RequestParamsPagseguro | {
    error: string;
}>;
