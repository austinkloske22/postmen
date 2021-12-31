"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class PostmenService {
    constructor(config) {
        this.axios = axios_1.default.create();
        this.axios = axios_1.default.create({ baseURL: config.url });
        this.axios.defaults.headers.common['Content-Type'] = 'application/json';
        this.axios.defaults.headers.common['postmen-api-key'] = config.apiKey;
        this.axios.defaults.validateStatus = (status) => {
            return status === 200;
        };
        // Axios Interceptor
        this.axios.interceptors.request.use(request => {
            return request;
        });
        function onFullilled(response) {
            if (response.data.meta.code !== 200) {
            }
            return response;
        }
        ;
        function onRejected(error) {
            console.log(error.message);
        }
        ;
        this.axios.interceptors.response.use(onFullilled, onRejected);
    }
}
exports.default = PostmenService;
