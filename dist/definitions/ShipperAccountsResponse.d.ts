import { ShipperAccount } from "./ShipperAccount";
export interface ShipperAccountsResponse {
    next_token: string;
    limit: number;
    shipper_accounts: ShipperAccount[];
}
