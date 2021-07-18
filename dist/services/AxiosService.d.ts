export interface ConfigsPagseguro {
    baseUrl: string;
    secreteKey: string;
    version: string;
}
declare class AxiosService {
    static api({ secreteKey, baseUrl, version }: ConfigsPagseguro): import("axios").AxiosInstance;
}
export default AxiosService;
