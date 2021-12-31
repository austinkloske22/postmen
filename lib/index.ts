import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default class PostmenService {
    protected axios = axios.create() as AxiosInstance;
    constructor(config:any) {

        this.axios = axios.create({baseURL : config.url});
        this.axios.defaults.headers.common['Content-Type'] = 'application/json';
        this.axios.defaults.headers.common['postmen-api-key'] = config.apiKey;

        this.axios.defaults.validateStatus = (status) => {
            return status === 200;
        };
         // Axios Interceptor
		this.axios.interceptors.request.use(request => {
			return request;
		});

        function onFullilled(response: AxiosResponse): any {
            if (response.data.meta.code !== 200) {
            }
            return response;
        };
        function onRejected(error: AxiosError): any {
            console.log(error.message)
        };

        this.axios.interceptors.response.use(onFullilled, onRejected);
    }
}