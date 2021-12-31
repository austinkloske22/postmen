export interface BaseResponse {
    meta: {
        code: number;
        message: string;
        details: any[];
        retryable: boolean;
    };
}
