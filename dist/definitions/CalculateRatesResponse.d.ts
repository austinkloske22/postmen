import { Common } from "./Common";
import { RateType } from "./RateType";
export interface CalculateRatesResponse {
    id: string;
    status: Common.Status;
    rates: RateType[];
    created_at: string;
    created_by: string;
}
