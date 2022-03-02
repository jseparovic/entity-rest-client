
import {AxiosRequestConfig, Axios} from 'axios';

export class EntityRestClient {
    private readonly baseURI: string;
    private readonly APIPrefix: string;
    private readonly config: AxiosRequestConfig;
    private readonly axios: Axios;

    constructor(baseURI: string, APIPrefix: string) {
        this.baseURI = baseURI;
        this.APIPrefix = APIPrefix;
        this.config = {
            validateStatus: (status: number) => {
                return status >= 200 && status <= 300;
            },
        };
        this.axios = new Axios(this.config);
    }

    constructURL(endpoint: string) {
        return this.baseURI + this.APIPrefix + '/' + endpoint;
    }

    async getEntities(endpoint: string) {
        const url = this.constructURL(endpoint);
        const res = await this.axios.get(url);
        return JSON.parse(res.data);
    }
}
