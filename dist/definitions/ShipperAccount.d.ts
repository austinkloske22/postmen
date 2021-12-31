import { Address } from "./Address";
export interface ShipperAccount {
    id: string;
    description: string;
    slug: string;
    account_country: string;
    credentials: {
        account_number: string;
        preferred_currency: string;
        key: string;
        meter_number: string;
    };
    status: "enabled" | "disabled";
    timezone: string;
    type: string;
    created_at: string;
    updated_at: string;
    account_balance: string;
    address: Address;
    settings: string;
    extra_info: {
        disallow_credentials_change: boolean;
        created_by_postmen: boolean;
        negotiated_rate: boolean;
    };
}
